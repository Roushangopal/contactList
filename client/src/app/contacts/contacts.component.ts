import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service'
import { contact } from '../contact'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public contacts = [];
  firstName: string;
  lastName: string;
  phone: string;

  constructor(private contactService:ContactService) { }

  addContact(){
    const newContact = {
      first_name: this.firstName,
      last_name: this.lastName,
      phone: this.phone
    }
    this.contactService.addContact(newContact).subscribe(data =>{
      this.contacts.push(newContact);
      console.log(this.contacts);
    });
    this.contactService.getContact()
    .subscribe(data => this.contacts = data);
  }

  deleteContact(id:string){
    this.contactService.deleteContact(id).subscribe(data =>{
      for (var i=0; i<this.contacts.length; i++){
        if(this.contacts[i]._id == id){
          this.contacts.splice(i,1);
          console.log(this.contacts)
        }
      }
    });
    this.contactService.getContact()
    .subscribe(data => this.contacts = data);
  }

  ngOnInit(): void {
    this.contactService.getContact()
    .subscribe(data => this.contacts = data);
  }

}
