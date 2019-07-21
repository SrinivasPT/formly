import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'formly-field-kendo-checkbox',
  template: `
    <input type="checkbox" class="k-checkbox" [class.k-state-invalid]="showError" [formControl]="formControl" [formlyAttributes]="field" />

    <label [for]="id" class="k-checkbox-label">
      <span>
        {{ to.label }}
        <span *ngIf="to.required" class="k-required">*</span>
      </span>
    </label>
  `
})
// tslint:disable-next-line: component-class-suffix
export class FormlyFieldCheckbox extends FieldType {
  defaultOptions = {
    templateOptions: {
      hideLabel: true
    }
  };
}
