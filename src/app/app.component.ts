import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="k-form flex">
      <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
      <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
export class AppComponent {
  form = new FormGroup({});
  model = { experience: [{ name: 'Srinivas Hi', age: 40 }, { name: 'Sreelatha', age: 30 }] };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      wrappers: ['panel'],
      templateOptions: { label: 'Experience' },
      fieldGroup: [
        {
          key: 'experience',
          type: 'grid',
          templateOptions: {}
        }
      ]
    },
    {
      key: 'personalInformation',
      wrappers: ['panel'],
      templateOptions: { label: 'Personal Information' },
      fieldGroupClassName: 'd-flex flex-wrap',
      fieldGroup: [
        {
          className: 'col-3',
          key: 'firstName',
          type: 'input',
          defaultValue: 'This is a default value',
          templateOptions: {
            label: 'First Name'
          }
        },
        {
          className: 'col-3',
          key: 'middleName',
          type: 'input',
          defaultValue: 'This is a default value',
          templateOptions: {
            label: 'Middle Name'
          }
        },
        {
          className: 'col-3',
          key: 'lastName',
          type: 'input',
          defaultValue: 'This is a default value',
          templateOptions: {
            label: 'Last Name'
          }
        },
        {
          className: 'col-3',
          key: 'age',
          type: 'input',
          defaultValue: '40',
          templateOptions: {
            label: 'Age'
          }
        },
        {
          className: 'col-12',
          key: 'agree',
          type: 'checkbox',
          templateOptions: {
            label: 'Click the below check box to confirm that above informaiton is correct?',
            required: true
          }
        }
      ]
    },
    {
      key: 'address',
      wrappers: ['panel'],
      templateOptions: { label: 'Address' },
      fieldGroup: [
        {
          key: 'firstName',
          type: 'input',
          defaultValue: 'This is a default value',
          templateOptions: {
            label: 'First Name (initialized via default value)'
          }
        },
        {
          key: 'lastName',
          type: 'input',
          defaultValue: 'This is a default value',
          templateOptions: {
            label: 'Last Name (initialized via the model)'
          }
        },
        {
          key: 'candy',
          type: 'input',
          defaultValue: 'milky_way',
          templateOptions: {
            label: 'Favorite Candy (initialized via default value',
            options: [
              { label: 'Snickers', value: 'snickers' },
              { label: 'Baby Ruth', value: 'baby_ruth' },
              { label: 'Milky Way', value: 'milky_way' }
            ]
          }
        }
      ]
    },
    {
      key: 'agree',
      type: 'checkbox',
      templateOptions: {
        label: 'Agree? (not initialized at all)',
        required: true
      }
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
    this.model = { experience: [{ name: 'Srinivas Changed', age: 60 }, { name: 'Sreelatha', age: 30 }] };
  }
}
