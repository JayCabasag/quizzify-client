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
    this.toastService.alertToast('Hello', 'success')
    setTimeout(() => {
      this.isSubmitting = false
    }, 5000)
  }

}
