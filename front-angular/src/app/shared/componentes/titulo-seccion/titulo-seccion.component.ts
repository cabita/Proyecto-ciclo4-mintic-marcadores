import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html',
  styleUrls: ['./titulo-seccion.component.scss']
})
export class TituloSeccionComponent implements OnInit {
  @Input() titulo = "";

  constructor() { }

  ngOnInit(): void {
  }

}
