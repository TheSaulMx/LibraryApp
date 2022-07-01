import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  hide = true; //password form-field

  loginForm;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group(
      {
        email:["", [Validators.required, Validators.email]],
        password:["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],

      });

   }

  ngOnInit()
  {

  }

  submit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
    else{
      alert("Formulario no valido")
    }
  }

}
