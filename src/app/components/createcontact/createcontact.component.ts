import { Component } from '@angular/core';
import { SeriesService } from 'src/app/services/contact/contact.service';
import { Contact } from '../agenda/agenda.component';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent {

  constructor(private dataSeire: SeriesService) { }

  CreateContactData(NombreCompleto: string, NumeroDocumento: string, Direccion: string, PhoneNumber: string, Email: string) {
    console.log('Ejecuta')
       this.dataSeire.CreateAContact(NombreCompleto, NumeroDocumento, Direccion, PhoneNumber, Email).subscribe((response: Contact[])=>{
         alert('Contacto creado , refresca para visualizar el cambio')


     }
  )}

}
