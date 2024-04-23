import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MasterService } from './service/master.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { employee } from './model/employeeModel';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'zokra-project';
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'company',
    'department',
    'salary',
    'employmentStatus',
    'education',
    'action',
    'date',
  ];
  dataSource = new MatTableDataSource<employee>();
  employeeForm: FormGroup;

  isAdd = false;
  isEdit = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: MasterService,
    private formBuilder: FormBuilder
  ) {
    this.employeeForm = this.formBuilder.group({
      id: ['', Validators.required],
      employeeName: ['', Validators.required],
      company: [''],
      department: [''],
      salary: [''],
      jobTitle: [''],
      employmentStatus: [''],
      education: [''],
      date: [''],
    });
  }

  ngOnInit() {
    this.service.getallemployee().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      console.log('Data fetched successfully:', data);
      console.log(data);
    });
    console.log(this.dataSource.data);
  }

  fetchAllEmployees() {
    this.service.getallemployee().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        console.log('Data fetched successfully:', data);
      },
      (error) => console.error('Error fetching data: ', error)
    );
  }

  // addEmployee() {
  //   if (this.employeeForm.valid) {
  //     const newEmployee = this.employeeForm.value;
  //     this.service.Createemployee(newEmployee).subscribe(
  //       (data) => {
  //         console.log('Employee added:', data);
  //         this.fetchAllEmployees(); // Refresh the list
  //       },
  //       (error) => console.error('Error creating employee:', error)
  //     );
  //   }
  //   this.isAdd = !this.isAdd;
  // }
  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.isEdit) {
        // Call the update service method if in edit mode.
        this.service.Updateemployee(this.employeeForm.value).subscribe({
          next: () => {
            console.log('Employee updated');
            this.fetchAllEmployees(); // Refresh the list after update.
            this.employeeForm.reset(); // Reset the form after submission.
            this.isEdit = false; // Reset the edit flag.
          },
          error: (error) => console.error('Error updating employee:', error),
        });
      } else {
        // Call the create service method if adding a new employee.
        this.service.Createemployee(this.employeeForm.value).subscribe({
          next: () => {
            console.log('Employee added');
            this.fetchAllEmployees(); // Refresh the list after adding.
            this.employeeForm.reset(); // Reset the form after submission.
            this.isAdd = false; // Reset the add flag.
          },
          error: (error) => console.error('Error adding employee:', error),
        });
      }
    } else {
      console.log('Form is not valid.');
    }
  }

  editEmployee(employee: employee) {
    console.log('Editing employee:', employee); // Debug: log the employee data
    this.isEdit = true;

    this.employeeForm.setValue({
      id: employee.id,
      employeeName: employee.employeeName,
      company: employee.company,
      department: employee.department,
      salary: employee.salary,
      jobTitle: employee.jobTitle,
      employmentStatus: employee.employmentStatus,
      education: employee.education,
      date: employee.date,
    });

    this.isAdd = false;
    this.isEdit = true;

    console.log('Form Value after setting:', this.employeeForm.value); // Debug: log form values
  }
  addEmployee() {
    this.isAdd = true;
    this.isEdit = false;
  }
  deleteEmployee(employeeId: number) {
    this.service.Deleteemployee(employeeId).subscribe(
      () => {
        console.log('Employee deleted:', employeeId);
        this.fetchAllEmployees(); // Refresh the list
      },
      (error) => console.error('Error deleting employee:', error)
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
