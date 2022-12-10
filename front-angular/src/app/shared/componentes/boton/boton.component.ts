import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  @Input() class:string = 'primario';
  @Input() type:string = "button";
  @Input() text:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
