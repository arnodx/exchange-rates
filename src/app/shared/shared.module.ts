import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PRIMENG_MODULES} from "../primeng-modules";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...PRIMENG_MODULES
  ],
  exports:[
    ...PRIMENG_MODULES
  ]
})
export class SharedModule { }
