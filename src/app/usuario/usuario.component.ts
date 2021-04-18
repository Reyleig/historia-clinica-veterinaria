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
    this.usuarioService.getAllUsuario().subscribe(resp => {
      this.usuarios = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(resp => {
      this.usuarioForm.reset();
      this.usuarios = this.usuarios.filter((usuario: { id: any; }) => resp.id != usuario.id);
      this.usuarios.push(resp);
      alert("Guardado correctamente");
    }, error => {
      console.error(error)
      alert("Se a producido un error intente mas tarde");
    }
    )
  }

  eliminar(usuario: { id: any; }) {
    this, this.usuarioService.deleteUsuario(usuario.id).subscribe(resp => {
      if (resp !== true) {
        this.mostrar();
      }
      alert("Usuario eliminado");
    })
  }
  editar(usuario: { id: any; nombre: any; apellido: any; tipo_documento: any; documento_identificacion: any; estado: any; sexo: any; }) {
    this.usuarioForm.setValue({
      id: usuario.id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      tipo_documento: usuario.tipo_documento,
      documento_identificacion: usuario.documento_identificacion,
      estado: usuario.estado,
      sexo: usuario.sexo,
    })
  }
  mostrar() {
    this.usuarioService.getAllUsuario().subscribe(resp => {
      this.usuarios = resp;
    },
      error => { console.error(error) }
    );
  }
}
