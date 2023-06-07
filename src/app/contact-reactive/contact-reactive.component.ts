import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  departmentos: string[] = [];

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute){}

  ngOnInit(): void {
    this.departmentos = this.route.snapshot.data['department'];

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
