import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {register} from '../../store/actions';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

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
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  private store = inject(Store);

  onSubmit() {
    console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }
    this.store.dispatch(register({request}))
  }
}
