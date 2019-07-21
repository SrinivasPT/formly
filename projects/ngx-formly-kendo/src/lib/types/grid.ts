import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formly-field-edge-grid',
  template: `
    <kendo-grid #grid [data]="model" [pageable]="true" [pageSize]="10" [skip]="10"> </kendo-grid>
  `
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldGrid extends FieldArrayType implements OnInit {
  ngOnInit() {}
}
