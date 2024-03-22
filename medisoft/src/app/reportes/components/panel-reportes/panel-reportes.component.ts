import { Component, OnInit } from '@angular/core';
import { single } from './data';
@Component({
  selector: 'app-panel-reportes',
  templateUrl: './panel-reportes.component.html',
  styleUrls: ['./panel-reportes.component.scss']
})
export class PanelReportesComponent {
  single!: any[];
  view: any= [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'below';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
