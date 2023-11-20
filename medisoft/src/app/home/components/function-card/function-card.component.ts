import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-function-card',
  templateUrl: './function-card.component.html',
  styleUrls: ['./function-card.component.scss']
})
export class FunctionCardComponent implements OnInit {
  @Input() functionData:any
  @Output() functionEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.functionEvent.emit(this.functionData.value);
  }
}
