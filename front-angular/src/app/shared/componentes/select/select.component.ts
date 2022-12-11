import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() firstOption:string = "";
  @Input() options: any[]= [];
  @Input() error:string = "";
  @Input() placeholder:string = "";
  @Input() name:string = "";
  @Input() form!:FormGroup;
  @Input() label:string = "";
  @Output() valueSelect: EventEmitter<string> = new EventEmitter();
  @Input() disabledLabel: boolean = false;
  @Input() id:string = "";

  selected:boolean = false;

  getValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueSelect.emit(value);
  }

}
