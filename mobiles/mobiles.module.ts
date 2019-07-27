import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamsungComponent } from './samsung/samsung.component';
import { HuaweiComponent } from './huawei/huawei.component';



@NgModule({
  declarations: [SamsungComponent, HuaweiComponent],
  imports: [
    CommonModule
  ]
})
export class MobilesModule { }
