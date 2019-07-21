import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { EdgeComponent } from './edge.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [EdgeComponent, GridComponent],
  imports: [GridModule],
  exports: [EdgeComponent, GridComponent]
})
export class EdgeModule {}
