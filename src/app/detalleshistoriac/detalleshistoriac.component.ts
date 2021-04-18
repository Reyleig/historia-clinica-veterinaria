import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DetalleshistoriacService } from '../services/detalleshistoriac/detalleshistoriac.service';
import { HistoriaclinicaService } from '../services/historiaclinica/historiaclinica.service';
import { ColaboradorService } from '../services/colaborador/colaborador.service';

@Component({
  selector: 'app-detalleshistoriac',
  templateUrl: './detalleshistoriac.component.html',
  styleUrls: ['./detalleshistoriac.component.css']
})
export class DetalleshistoriacComponent implements OnInit {

  detallesHistoriaCForm = new FormGroup({
    temperatura: new FormControl(),
    peso: new FormControl(),
    frecuencia_cardiaca: new FormControl(),
    frecuencia_respiratoria: new FormControl(),
    fecha_hora: new FormControl(),
    alimentacion: new FormControl(),
    habitad: new FormControl(),
    observacion: new FormControl(),
    colaborador: new FormControl(),
    historiaclinica: new FormControl()
  });

  detallesHistoriasClinicas: any;
  colaboradores: any;
  historiasclinicas: any;

  constructor(
    public fb: FormBuilder,
    public detallesHistoriaClinicaService: DetalleshistoriacService,
    public historiaClinicaService: HistoriaclinicaService,
    public colaboradorService: ColaboradorService,
  ) { }

  ngOnInit(): void {
    this.detallesHistoriaCForm = this.fb.group({
      id: [''],
      temperatura: ['', Validators.required],
      peso: ['', Validators.required],
      frecuencia_cardiaca: ['', Validators.required],
      frecuencia_respiratoria: ['', Validators.required],
      fecha_hora: [''],
      alimentacion: ['', Validators.required],
      habitad: ['', Validators.required],
      observacion: ['', Validators.required],
      colaborador: ['', Validators.required],
      historiaClinica: ['', Validators.required],
    });
    this.detallesHistoriaClinicaService.getAllDetallesHistoriaC().subscribe(resp => {
      this.detallesHistoriasClinicas = resp;
    },
      error => { console.error(error) });


    this.colaboradorService.getAllColaborador().subscribe(resp => {
      this.colaboradores = resp;
    },
      error => { console.error(error) });
    this.historiaClinicaService.getAllHistoriaClinica().subscribe(resp => {
      this.historiasclinicas = resp;
    },
      error => { console.error(error) });


  }

  guardar(): void {
    this.detallesHistoriaClinicaService.saveDetallesHistoriaC(this.detallesHistoriaCForm.value).subscribe(resp => {
      this.detallesHistoriaCForm.reset();
      this.detallesHistoriasClinicas = this.detallesHistoriasClinicas.filter((detallesHistoriaClinica: { id: any; }) => resp.id != detallesHistoriaClinica.id);
      this.detallesHistoriasClinicas.push(resp);
      alert("Guardado correctamente");
    }, error => {
      console.error(error)
      alert("Se a producido un error intente mas tarde");
    }
    )
  }

  eliminar(detallesHistoriaClinica: { id: any; }) {
    this, this.detallesHistoriaClinicaService.deleteDetalleHistoriaC(detallesHistoriaClinica.id).subscribe(resp => {
      if (resp !== true) {
        this.mostrar();
      }
      alert("Eliminado correctamente");
    })
  }
  editar(detallesHistoriaClinica:any ) {
    this.detallesHistoriaCForm.setValue({
      id: detallesHistoriaClinica.id,
      temperatura: detallesHistoriaClinica.temperatura,
      peso: detallesHistoriaClinica.peso,
      frecuencia_cardiaca: detallesHistoriaClinica.frecuencia_cardiaca,
      frecuencia_respiratoria: detallesHistoriaClinica.frecuencia_respiratoria,
      fecha_hora: detallesHistoriaClinica.fecha_hora,
      alimentacion: detallesHistoriaClinica.alimentacion,
      habitad: detallesHistoriaClinica.habitad,
      observacion: detallesHistoriaClinica.observacion,
      colaborador: detallesHistoriaClinica.colaborador.nombre,
      historiaClinica: detallesHistoriaClinica.historiaClinica.id,

    })
  }
  mostrar() {
    this.detallesHistoriaClinicaService.getAllDetallesHistoriaC().subscribe(resp => {
      this.detallesHistoriasClinicas = resp;
    },
      error => { console.error(error) });
  }
  }


