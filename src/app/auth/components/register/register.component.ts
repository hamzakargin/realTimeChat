import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'rc-register',
  templateUrl: './register.component.html',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ]
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({

    username: [null, {validators: Validators.required, nonNullable: true}],
    email: [null, {validators: Validators.required, nonNullable: true}],
    password: [null, {validators: Validators.required, nonNullable: true}]
  })

  onSubmit() {
    console.log('form', this.form.getRawValue());
  }
}
