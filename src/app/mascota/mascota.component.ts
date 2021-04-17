import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotaService } from '../services/mascota/mascota.service';
import { UsuarioService } from '../services/usuario/usuario.service';
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {
  mascotaForm = new FormGroup({
    nombre: new FormControl(),
    raza: new FormControl(),
    usuario: new FormControl(),
    sexo: new FormControl()
  });

  mascotas:any;
  usuarios:any;
   
  constructor(
    public fb: FormBuilder,
    public mascotaService: MascotaService,
    public usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.mascotaForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      usuario: ['', Validators.required],
      sexo: ['', Validators.required],
    });

      this.usuarioService.getAllusuario().subscribe(resp=>
        {this.usuarios=resp;
        },
        error=>{console.error(error)});
        this.mascotaService.getAllMascota().subscribe(resp => {
          this.mascotas = resp;
        },
          error => { console.error(error) }
        );
    }




guardar(): void {
  this.mascotaService.saveMascota(this.mascotaForm.value).subscribe(resp=>{
    this.mascotaForm.reset();
    this.mascotas=this.mascotas.filter((mascota: { id: any; })=> resp.id!=mascota.id); 
    this.mascotas.push(resp);
    alert("Guardado correctamente")
  },  error => { console.error(error)
    alert("Se a producido un error intente mas tarde"); }
  
  )
}
eliminar(mascota: { id: any; }){
  this,this.mascotaService.deleteMascota(mascota.id).subscribe(resp=>{
    if(resp!=true){
      this.mascotas.pop(mascota); 
    }
    alert("Mascota eliminada");
   
  })
}
editar(mascota: { id: any; nombre: any; raza: any; usuario: any; sexo: any; }){
  this.mascotaForm.setValue({
    id:mascota.id,
    nombre: mascota.nombre,
    raza: mascota.raza,
    usuario: mascota.usuario,
    sexo: mascota.sexo,
  })
}

}