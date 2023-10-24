import { Component } from '@angular/core';
import { SeriesService } from 'src/app/services/contact/contact.service';

export interface Contact {
  ID: number
  NombreCompleto: string;
  NumeroDocumento: string;
  Direccion: string;
  PhoneNumber: string;
  Email: string;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {
  data!: Contact[];


  constructor(private dataSeire: SeriesService) { }

  CreateContactData(fullName: string, document: string, direction: string, PhoneNumber: string, Email: string) {
  
    console.log('Ejecuta')
       this.dataSeire.CreateAContact(fullName, document, direction, PhoneNumber, Email).subscribe((response: Contact[])=>{
         alert('Contacto Editado , refresca para visualizar el cambio')


     }
  )}

  UpdateContactData(ID: string, fullName:string, document:string, direction:string, PhoneNumber:string, Email:string) {
    if (confirm('Seguro de eliminar')) {
      this.dataSeire.UpdateAContact(ID, fullName, document, direction, PhoneNumber, Email ).subscribe((response) => {
        alert('Contacto Actualizado , refresca para visualizar el cambio')
      })

    }
  }

  DeleteContactData(ID: number) {
    if (confirm('Seguro de eliminar')) {
      this.dataSeire.DeleteAContact(ID).subscribe((response) => {
        alert('Contato Eliminado, refresca para visualizar el cambio')
      })

    }
  }

  ngOnInit(): void {
    this.dataSeire.GetAllContacts().subscribe((response: Contact[]) => {
      this.data = response;

    });
  }

}
