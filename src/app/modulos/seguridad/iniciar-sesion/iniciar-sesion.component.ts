import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  fgValidacion: FormGroup = this.fb.group({});
  //en el constructor podemos inyectar todo lo que queramos
  constructor(private fb: FormBuilder) { }

ConstruirFormulario() {
  this.fgValidacion = this.fb.group({
  correo: ['', Validators.required],
  clave: ['', Validators.required]
});
}
//ngOnInit se ejecutan con las acciones de un componente
ngOnInit(): void {
  this.ConstruirFormulario();
  }
  get ObtenerFGV(){
    return this.fgValidacion.controls;
  }
}
