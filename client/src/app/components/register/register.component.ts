import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void
  {
    this.registerForm = this.formBuilder.group
    ({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      cpassword:['', [Validators.required]],
      tel:['', [Validators.required]],
    })
  }

  submit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
    }
    else{
      alert("Formulario no valido")
    }
  }

}
