import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    tipo_documento: new FormControl(),
    documento_identificacion: new FormControl(),
    estado: new FormControl(),
    sexo: new FormControl()
  });

  usuarios: any;

  constructor(
    public fb: FormBuilder,
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento_identificacion: ['', Validators.required],
      estado: ['', Validators.required],
      sexo: ['', Validators.required],
    });
    this.usuarioService.getAllusuario().subscribe(resp=>
      {this.usuarios=resp;
      },
      error=>{console.error(error)}
      )
  }
  
  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(resp=>{
      this.usuarioForm.reset();
      alert("Guardado correctamente");
    }, error => { console.error(error) 
      alert("Se a producido un error intente mas tarde");}
    )

  }


}
