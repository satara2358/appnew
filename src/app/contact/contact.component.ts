import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Contact {
  "name": string
  "checkAdult": boolean,
  "department": string,
  "comment": string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }
  onSubmit(form: NgForm){
    console.log('Form Values', form);
  }

}
