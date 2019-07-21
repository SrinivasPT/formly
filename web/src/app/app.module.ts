import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EditorModule } from '@progress/kendo-angular-editor';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { LabelModule } from '@progress/kendo-angular-label';
import { FormlyKendoModule } from 'ngx-formly-kendo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    LabelModule,
    DateInputsModule,
    DialogsModule,
    EditorModule,
    ExcelExportModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyKendoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
