import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() valueField: EventEmitter<Event> = new EventEmitter();
  @Input()  label:string = "";
  @Input()  type: string = "";
  @Input()  placeholder:string = "";
  @Input()  form!:FormGroup;
  @Input()  name:string = "";
  @Input()  error: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
