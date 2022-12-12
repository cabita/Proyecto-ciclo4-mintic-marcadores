import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() deporte:string = "";
  @Input() equipo1:string = "";
  @Input() equipo2:string = "";
  @Input() marcador1!:number;
  @Input() marcador2!:number;
  @Output() editar = new EventEmitter<boolean>(false);
  @Output() borrar = new EventEmitter<boolean>(false);
  existeToken$ = this.authService.existetoken$;


  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
  }

}
