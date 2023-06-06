import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

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
export class ContactComponent implements OnInit{

  id: string;

  constructor(private readonly route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    }
  )
  }

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
