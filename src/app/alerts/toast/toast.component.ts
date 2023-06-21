import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  message: string | null = null;
  status: 'success' | 'error' | null = null
  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.getMessage().subscribe((message) => {
      this.message = message
    })

    this.toastService.getStatus().subscribe((status) => {
      this.message = status
    })
  }

}
