import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




const materials = [
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
  
];

@NgModule({
  exports: [materials],
  imports: [materials]
})
export class MaterialModule { }
