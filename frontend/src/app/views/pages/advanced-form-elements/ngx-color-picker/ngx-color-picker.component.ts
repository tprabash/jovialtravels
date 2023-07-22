import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-color-picker',
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.scss']
})
export class NgxColorPickerComponent implements OnInit {

  grayscaleColor = "#bcbcbc";
  color1 = "#727cf5";
  color2 = "#7987a1";
  color3 = "rgb(247, 126, 185)";
  color4 = "hsl(180, 54%, 61%)";
  color5 = "#fbbc06";
  color6 = "#ff3366";
  color7 = "#ececec";
  color8 = "#b1cfec";
  color9 = "#7ee5e5";
  color10 = "#f77eb9";

  constructor() { }

  ngOnInit(): void {
  }

}
