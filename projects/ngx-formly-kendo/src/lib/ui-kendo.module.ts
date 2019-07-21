import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { FIELD_TYPE_COMPONENTS, KENDO_FORMLY_CONFIG } from './ui-kendo.config';

@NgModule({
  declarations: FIELD_TYPE_COMPONENTS,
  imports: [CommonModule, DropDownsModule, ReactiveFormsModule, GridModule, FormlySelectModule, FormlyModule.forChild(KENDO_FORMLY_CONFIG)],
  exports: [GridModule]
})
export class FormlyKendoModule {}
