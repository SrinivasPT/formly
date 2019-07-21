import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formly-wrapper-kendo-form-field',
  template: `
    <label [for]="id" class="k-form-field">
      <span *ngIf="to.label">
        {{ to.label }}
        <span *ngIf="to.required" class="k-required">*</span>
      </span>
      <ng-container #fieldComponent></ng-container>
    </label>

    <formly-validation-message *ngIf="showError" class="k-field-info k-required" [field]="field"> </formly-validation-message>
  `
})
// tslint:disable-next-line: component-class-suffix
export class FormlyWrapperFormField extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef, static: true }) fieldComponent: ViewContainerRef;
}
