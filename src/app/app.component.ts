// src/app/app.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required], // Validators.required để yêu cầu trường name
      email: ['', [Validators.required, Validators.email]], // Validators.email để kiểm tra định dạng email
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Biểu mẫu hợp lệ, xử lý dữ liệu
      console.log('Form data:', this.myForm.value);
    } else {
      // Biểu mẫu không hợp lệ, hiển thị thông báo lỗi
      console.log('Form is not valid');
    }
  }

}
