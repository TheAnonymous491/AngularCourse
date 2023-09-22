import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LogginService } from '../LogginService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  nombreInput='';
  apellidoInput='';

  constructor(private logginService:LogginService, private personasServices:PersonasService){
    this.personasServices.saludar.subscribe(
      (indice:number)=>alert("El indice es: "+indice)
    );
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.logginService.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + " apellido: " + persona1.apellido)
    // this.personaCreada.emit(persona1)
    this.personasServices.personaAgregada(persona1)
  }
}
