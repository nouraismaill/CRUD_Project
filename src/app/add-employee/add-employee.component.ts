import { DialogRef } from '@angular/cdk/dialog';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-add-employee',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
})
export class AddEmployeeComponent {
  empForm: FormGroup;
  education: string[] = [
    'Matric',
    'Intermediate',
    'Bachelor',
    'Master',
    'Post Graduate',
  ];
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<AddEmployeeComponent>
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      dob: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }
  onSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee added successfully');
          this._dialogRef.close();
        },
        error: () => {
          console.log('error');
        },
      });
    } else {
      console.log('Invalid form');
    }
  }
}
