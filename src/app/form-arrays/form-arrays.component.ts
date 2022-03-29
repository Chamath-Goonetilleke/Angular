import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-arrays',
  templateUrl: './form-arrays.component.html',
  styleUrls: ['./form-arrays.component.css'],
})
export class FormArraysComponent implements OnInit {
  form: any;
  //   form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({                        //first way
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([]),
  // });

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.required],              //second way
      contact: formBuilder.group({
        email: [],
        phone: [],
      }),
      topics: formBuilder.array([]),
    });
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  ngOnInit(): void {}
}
