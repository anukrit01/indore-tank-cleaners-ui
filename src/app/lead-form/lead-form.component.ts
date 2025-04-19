import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lead-form',
  standalone: false,
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.scss'
})
export class LeadFormComponent {
  formData = {
    name: '',
    phone: '',
    area: '',
    service: ''
  };

  constructor(private http: HttpClient) {}

  submitForm() {
    if (!this.formData.name || !this.formData.phone || !this.formData.service) {
      alert('Please fill out all required fields!');
      return;
    }

    this.http.post('https://your-backend-url.com/api/leads', this.formData)
      .subscribe({
        next: () => {
          alert('Thanks! We’ll contact you shortly.');
          this.formData = { name: '', phone: '', area: '', service: '' };
        },
        error: () => {
          alert('Oops! Something went wrong. Try again later.');
        }
      });
  }

  callNow() {
    window.location.href = 'tel:+91XXXXXXXXXX';
  }
}
