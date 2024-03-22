import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-cargar-avatar',
  templateUrl: './cargar-avatar.component.html',
  styleUrls: ['./cargar-avatar.component.scss']
})
export class CargarAvatarComponent implements OnInit {
  @Input() avatarType:string='';
  @Output() attchamentEvent=new EventEmitter();
  attachments:File[]=[];
  imageSrc='assets/svg/logos/logo.svg';
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    switch(this.avatarType) { 
      case 'pacientes': { 
        this.imageSrc='assets/png/home/clientes.png';
         break; 
      } 
      case 'medicos': { 
        this.imageSrc='assets/png/home/terapeuta.png';
         break; 
      } 
      case 'farmacia': { 
        this.imageSrc='assets/png/home/productos.png';
         break; 
      } 
      default: { 
        this.imageSrc='assets/png/home/reservaciones.png';
         break; 
      } 
   } 
  }

  uploadResource(event:any){
    this.attachments.push(event.target.files[0]);
    this.extraerBase64(event.target.files[0]).then((image:any)=>{
      this.imageSrc=image.base;
    })
    //this.attchamentEvent.emit(this.attachments);
    //this.selectImage(this.images.length-1);
  }

  extraerBase64=async($event:any)=>new Promise((resolve, reject)=>{
    try{
      const unsafeImg=window.URL.createObjectURL($event);
      const image=this.sanitizer.bypassSecurityTrustHtml(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload=()=>{
        resolve({
          base:reader.result
        });
      };
      reader.onerror=error=>{
        resolve({
          base:null

        });
      };
    }catch(e){
      return null;
    }
  });

}
