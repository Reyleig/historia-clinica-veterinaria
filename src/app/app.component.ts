import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ColaboradorService } from './services/colaborador/colaborador.service';
import { DetalleshistoriacService } from './services/detalleshistoriac/detalleshistoriac.service';
import { HistoriaclinicaService } from './services/historiaclinica/historiaclinica.service';
import { MascotaService } from './services/mascota/mascota.service';
import { UsuarioService } from './services/usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  usuarioForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    tipo_documento: new FormControl(),
    documento_identificacion: new FormControl(),
    estado: new FormControl(),
    sexo: new FormControl()
  });
  colaborador: any;
  detalleshistoriac: any;
  historiaclinica: any;
  mascota: any;
  usuario: any;
  title: any;

  constructor(
    public fb: FormBuilder,
    public colaboradorService: ColaboradorService,
    public detalleshistoriacService: DetalleshistoriacService,
    public historiaclinicaService: HistoriaclinicaService,
    public mascotaService: MascotaService,
    public usuarioService: UsuarioService,
  ) {

  }

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
  }

  guardar(): void {
    this.usuarioService.saveUsuario(this.usuarioForm.value).subscribe(resp=>{

    }, error => { console.error(error) }
    )

  }

}
