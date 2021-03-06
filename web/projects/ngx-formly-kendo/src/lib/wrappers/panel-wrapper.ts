import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formly-wrapper-panel',
  template: `
    <div class="card mb-3">
      <h6 class="card-header">{{ to.label }}</h6>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `
})
export class PanelWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;
}
