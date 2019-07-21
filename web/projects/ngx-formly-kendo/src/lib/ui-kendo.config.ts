import { ConfigOption } from '@ngx-formly/core';
import {
  FormlyFieldCheckbox,
  FormlyFieldGrid,
  FormlyFieldInput,
  FormlyFieldRadio,
  FormlyFieldSelect,
  FormlyFieldTextArea
} from './types/types';
import { PanelWrapperComponent } from './wrappers/panel-wrapper';
import { FormlyWrapperFormField } from './wrappers/wrappers';

export const FIELD_TYPE_COMPONENTS = [
  // types
  FormlyFieldInput,
  FormlyFieldTextArea,
  FormlyFieldCheckbox,
  FormlyFieldGrid,
  FormlyFieldRadio,
  FormlyFieldSelect,

  // wrappers
  FormlyWrapperFormField,
  PanelWrapperComponent
];

export const KENDO_FORMLY_CONFIG: ConfigOption = {
  types: [
    {
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field']
    },
    {
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['form-field']
    },
    {
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['form-field']
    },
    {
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['form-field']
    },
    {
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['form-field']
    },
    {
      name: 'grid',
      component: FormlyFieldGrid,
      wrappers: ['form-field']
    }
  ],
  wrappers: [{ name: 'form-field', component: FormlyWrapperFormField }, { name: 'panel', component: PanelWrapperComponent }]
};
