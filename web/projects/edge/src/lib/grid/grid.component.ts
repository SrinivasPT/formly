import { AfterViewInit, Component, ContentChildren, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@progress/kendo-angular-dialog';
import { ColumnComponent, GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { clone, concat, difference, isEmpty, keys, pluck } from 'ramda';

export enum GridEditAction {
  REDIRECT_AT_PRENT_LEVEL = 1,
  REDIRECT_AT_CHILD_LEVEL,
  OPEN_POPUP
}

export class GridSetting {
  public gridView: GridDataResult;
  public gridData: any[];
  public skip: number;
  public pageSize: number;
  public showEditForm: false;
  // tslint:disable-next-line: ban-types
  public content: string | TemplateRef<any> | Function;
  public editAction: number;

  constructor(
    data: any[] = [],
    // tslint:disable-next-line: ban-types
    detailDialogComponent: string | TemplateRef<any> | Function = '',
    editAction: number = GridEditAction.REDIRECT_AT_CHILD_LEVEL
  ) {
    this.skip = 0;
    this.pageSize = 3;
    this.gridData = clone(data);
    this.gridView = { data: data.slice(this.skip, this.skip + this.pageSize), total: data.length };
    this.showEditForm = false;
    this.content = detailDialogComponent;
    this.editAction = editAction;
  }

  reset() {
    this.skip = 0;
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'edge-grid',
  templateUrl: './grid.component.html'
})
export class GridComponent implements AfterViewInit {
  @Input() public gridSettings: GridSetting;
  @ViewChild('grid', { read: ViewContainerRef, static: true }) public gridRef;
  @ContentChildren(ColumnComponent) public gridColumns;

  constructor(private dialogService: DialogService, private activetedRoute: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.gridRef.columns.reset(this.getColumns());
  }

  getColumns() {
    // designerColumns are the custom columns defined by the developer while using the grid
    const designerColumns: any[] = this.gridColumns.toArray();
    const designerColumnFieldNames: any[] = pluck('field', designerColumns);
    const dynamicColumns = this.getDynamicColumnsExcludingDesignerColumns(designerColumnFieldNames);
    return concat(designerColumns, dynamicColumns);
  }

  getDynamicColumnsExcludingDesignerColumns(excludeColumnList: any[] = []) {
    const dynamicColumns: any[] = [];
    if (isEmpty(this.gridSettings.gridView.data[0])) {
      return [];
    }

    difference(keys(this.gridSettings.gridView.data[0]), excludeColumnList).forEach(field => {
      const columnComponent: ColumnComponent = new ColumnComponent();
      columnComponent.field = field.toString();
      columnComponent.title = this.getLabel(field.toString());
      dynamicColumns.push(columnComponent);
    });

    return dynamicColumns;
  }

  pageChange(event: PageChangeEvent) {
    this.gridSettings.skip = event.skip;
    this.gridSettings.gridView = {
      data: clone(this.gridSettings.gridData).slice(this.gridSettings.skip, this.gridSettings.skip + this.gridSettings.pageSize),
      total: this.gridSettings.gridView.total
    };
  }

  getLabel = (label: string) => (label.charAt(0).toUpperCase() + label.slice(1)).split(/(?=[A-Z])/).join(' ');

  onRowEdit(data) {
    if (this.gridSettings.editAction === GridEditAction.OPEN_POPUP) {
      this.openEditDialog(data);
    } else if (this.gridSettings.editAction === GridEditAction.REDIRECT_AT_CHILD_LEVEL) {
      this.router.navigate(['./', { id: data.id }], { relativeTo: this.activetedRoute });
    }
  }

  onRowRemove(data) {}

  private openEditDialog(data: any) {
    const dialogRef = this.dialogService.open({
      title: 'Confirmation?',
      content: this.gridSettings.content,
      actions: [{ text: 'Yes', primary: true }, { text: 'No' }]
    });
    const dialogComponentInstance = dialogRef.content.instance;
    dialogComponentInstance.formData = data;
  }
}
