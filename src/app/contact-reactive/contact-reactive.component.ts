import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup;
  constructor(private readonly fb: FormBuilder){
  }
  ngOnInit(): void {
    this.contactForm = this.iniForm();
  }

  onSubmit(): void{
    console.log('Form -> ');
  }

  iniForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]
    })

  }

}
