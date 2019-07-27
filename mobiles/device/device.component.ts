import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor() { }
samA=["S7", "S8", "S9"];
huA=["P8", "P9", "P20"];
samsung:string="Samsung";
huawei:string="Huawei";
  ngOnInit() {
  }

}
