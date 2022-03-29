import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
   
  ];
  constructor() {}

  log(x: any) {
    console.log(x);
  }
  submit(form: any) {
    console.log(form);
  }
  submitData(value: any) {
    console.log('Data is : ', value.comment);
  }

  ngOnInit(): void {}
}
