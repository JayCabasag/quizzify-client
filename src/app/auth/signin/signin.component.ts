import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/_services/toast.service';
import { FormControl, FormGroup } from '@angular/forms'
import { Roles } from './constants';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm = new FormGroup({
    role: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  isSubmitting: boolean = false

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.signInForm.setValue({
      role: Roles.STUDENT,
      email: '',
      password: ''
    })
  }

  updateRole(value: string): void {
    this.signInForm.patchValue({ role: value })
  }

  onSubmit(): void {
    this.isSubmitting = true

    console.log(this.signInForm.value)
    setTimeout(() => {
      this.isSubmitting = false
      this.toastService.alertToast('Submitted successfully', 'success')
    }, 5000)

    setTimeout(() => {
      this.toastService.clearToast()
    }, 10000)
  }

}
