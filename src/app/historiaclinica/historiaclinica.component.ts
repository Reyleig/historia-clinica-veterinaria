import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MascotaService } from '../services/mascota/mascota.service';
import { HistoriaclinicaService } from '../services/historiaclinica/historiaclinica.service';

@Component({
  selector: 'app-historiaclinica',
  templateUrl: './historiaclinica.component.html',
  styleUrls: ['./historiaclinica.component.css']
})

export class HistoriaclinicaComponent implements OnInit {

  historiaclinicaForm = new FormGroup({
    mascota: new FormControl()
  });

  mascotas:any;
  historiasclinicas: any;

  constructor(
    public fb: FormBuilder,
    public mascotaService: MascotaService,
    public historiaClinicaService: HistoriaclinicaService,
    
  ) { }

  ngOnInit(): void {
    
    
    this.historiaclinicaForm = this.fb.group({
      id: [''],
      mascota: ['', Validators.required],
      fecha_creacion:['']
    });

    this.historiaClinicaService.getAllHistoriaClinica().subscribe(resp=>
      {this.historiasclinicas=resp;
      },
      error=>{console.error(error)});
  
      this.mascotaService.getAllMascota().subscribe(resp => {
        this.mascotas = resp;
      },
        error => { console.error(error) });
      
}
      guardar(): void {
        this.historiaClinicaService.saveHistoriaclinica(this.historiaclinicaForm.value).subscribe(resp=>{
          this.historiaclinicaForm.reset();
          this.historiasclinicas=this.historiasclinicas.filter((historiaclinica: { id: any; })=> resp.id!=historiaclinica.id); 
          this.historiasclinicas.push(resp);
          alert("Guardado correctamente")
          console.log(resp)
        },  error => { console.error(error)
          alert("Se a producido un error intente mas tarde"); }
        
        )
      }
      eliminar(historiaclinica: { id: any; }){
        this,this.historiaClinicaService.deleteHistoriaClinica(historiaclinica.id).subscribe(resp=>{
          if(resp!==true){
           this.mostrar();
          }
          alert("Mascota eliminada");
         
        })
      }
      editar(historiaclinica:  { id: any;mascota:any;fecha_creacion:any;}){
        this.historiaclinicaForm.setValue({
          id:historiaclinica.id,
          mascota:historiaclinica.mascota,
          fecha_creacion:historiaclinica.fecha_creacion,
        })
      }
      mostrar(){
        this.historiaClinicaService.getAllHistoriaClinica().subscribe((resp: any)=>
          {this.historiasclinicas=resp;
          },
          (error: any)=>{console.error(error)});
          this.mascotaService.getAllMascota().subscribe(resp => {
            this.mascotas = resp;
          },
            error => { console.error(error) });
      }

    }
