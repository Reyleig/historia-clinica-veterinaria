import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../services/mascota/mascota.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  mascotaForm = new FormGroup({
    nombre: new FormControl(),
    raza: new FormControl(),
    usuario_id: new FormControl(),
    sexo: new FormControl()
  });

  mascotas:any;
   
  constructor(
    public fb: FormBuilder,
    public mascotaService: MascotaService,
  ) { }

  ngOnInit(): void {
    this.mascotaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      usuario_id: ['', Validators.required],
      sexo: ['', Validators.required],
    });
    this.mascotaService.getAllMascota().subscribe(resp=>
      {this.mascotas=resp;
      },
      error=>{console.error(error)}
      )
  }




guardar(): void {
  this.mascotaService.saveMascota(this.mascotaForm.value).subscribe(resp=>{
    this.mascotaForm.reset();
    this.mascotas=this.mascotas.filter((mascota: { id: any; })=> resp.id!=mascota.id);
    this.mascotas.push(resp);
    alert("Guardado correctamente");
  }, error => { console.error(error) 
    alert("Se a producido un error intente mas tarde");}
  )
}
eliminar(mascota: { id: any; }){
  this,this.mascotaService.deleteMascota(mascota.id).subscribe(resp=>{
    if(resp==true){
      this.mascotas.pop(mascota)
      alert("Usuario eliminado");
      this.mascotas.push(resp);
    }
  })
}
editar(mascota: { id: any; nombre: any; raza: any; usuario_id: any; sexo: any; }){
  this.mascotaForm.setValue({
    id:mascota.id,
    nombre: mascota.nombre,
    raza: mascota.raza,
    usuario_id: mascota.usuario_id,
    sexo: mascota.sexo,
  })
}

}