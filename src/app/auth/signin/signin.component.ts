import { Component } from '@angular/core';
import { Roles } from './constants';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  role: string = Roles.STUDENT;
  isSubmitting: boolean = false

  constructor(private toastService: ToastService) { }

  updateRole(value: string): void {
    this.role = value
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault()

    this.isSubmitting = true

    setTimeout(() => {
      this.isSubmitting = false
      this.toastService.alertToast('Submitted successfully', 'success')
    }, 5000)

    setTimeout(() => {
      this.toastService.clearToast()
    }, 10000)
  }

}
