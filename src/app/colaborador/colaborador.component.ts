import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ColaboradorService } from '../services/colaborador/colaborador.service';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {
  colaboradorForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    cargo: new FormControl(),
    especialidad: new FormControl(),
    tipo_documento: new FormControl(),
    documento_identificacion: new FormControl()
  });

  colaboradores: any;

  constructor(
    public fb: FormBuilder,
    public colaboradorService: ColaboradorService,
  ) { }

  ngOnInit(): void {
    this.colaboradorForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cargo: ['', Validators.required],
      especialidad: ['', Validators.required],
      tipo_documento: ['', Validators.required],
      documento_identificacion: ['', Validators.required],
    });
    this.colaboradorService.getAllColaborador().subscribe(resp => {
      this.colaboradores = resp;
    },
      error => { console.error(error) }
    );
  }

  guardar(): void {
    this.colaboradorService.saveColaborador(this.colaboradorForm.value).subscribe(resp => {
      this.colaboradorForm.reset();
      this.colaboradores = this.colaboradores.filter((colaborador: { id: any; }) => resp.id != colaborador.id);
      this.colaboradores.push(resp);
      alert("Guardado correctamente");
    }, error => {
      console.error(error)
      alert("Se a producido un error intente mas tarde");
    }
    )
  }

  eliminar(colaborador: { id: any; }) {
    this, this.colaboradorService.deleteColaborador(colaborador.id).subscribe(resp => {
      if (resp !== true) {
        this.mostrar();
      }
      alert("Colaborador eliminado");
    })
  }
  editar(colaborador: { id: any; nombre: any; apellido: any; cargo: any; especialidad: any; tipo_documento: any; documento_identificacion: any; }) {
    this.colaboradorForm.setValue({
      id: colaborador.id,
      nombre: colaborador.nombre,
      apellido: colaborador.apellido,
      cargo: colaborador.cargo,
      especialidad: colaborador.especialidad,
      tipo_documento: colaborador.tipo_documento,
      documento_identificacion: colaborador.documento_identificacion,
    })
  }
  mostrar() {
    this.colaboradorService.getAllColaborador().subscribe(resp => {
      this.colaboradores = resp;
    },
      error => { console.error(error) }
    );
  }
}
