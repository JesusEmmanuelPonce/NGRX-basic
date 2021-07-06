import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Input() contador:number;
  @Output() operacion = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(){
    this.contador *= 2;
    this.operacion.emit(this.contador);
  }

  dividir(){
    this.contador /= 2;
    this.operacion.emit(this.contador);
  }

}
