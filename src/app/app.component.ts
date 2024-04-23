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
  FormsModule,
} from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MasterService, NotificationService } from './service/master.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { employee } from './model/employeeModel';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    MatSelectModule,
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
    FormsModule,
    MatSnackBarModule,
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
    'email',
    'department',
    'salary',
    'employmentStatus',
    'education',
    'date',
    'action',
  ];
  dataSource = new MatTableDataSource<employee>();
  employeeForm: FormGroup;

  isAdd = false;
  isEdit = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: MasterService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.employeeForm = this.formBuilder.group({
      id: ['', Validators.required],
      employeeName: ['', [Validators.required]],
      email: [''],
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.isEdit) {
        // Call the update service method if in edit mode.
        this.service.Updateemployee(this.employeeForm.value).subscribe({
          next: () => {
            console.log('Employee updated');
            this.fetchAllEmployees();
            this.employeeForm.reset();
            this.isAdd = false;
            this.isEdit = false;
            this.snackbar.open('Employee updated successfully', 'Close', {
              duration: 3000,
            });
          },

          error: (error) => console.error('Error updating employee:', error),
        });
      } else {
        this.service.Createemployee(this.employeeForm.value).subscribe({
          next: () => {
            console.log('Employee added');
            this.fetchAllEmployees();
            this.employeeForm.reset();
            this.isAdd = false;
            this.isEdit = false;
            this.snackbar.open('Employee added successfully', 'Close', {
              duration: 3000,
            });
          },
          error: (error) => console.error('Error adding employee:', error),
        });
      }
    } else {
      console.log('Form is not valid.');
    }
  }

  editEmployee(employee: employee) {
    console.log('Editing employee:', employee);
    this.isEdit = true;

    this.employeeForm.setValue({
      id: employee.id,
      employeeName: employee.employeeName,
      email: employee.email,
      department: employee.department,
      salary: employee.salary,
      jobTitle: employee.jobTitle,
      employmentStatus: employee.employmentStatus,
      education: employee.education,
      date: employee.date,
    });

    this.isEdit = true;

    console.log('Form Value after setting:', this.employeeForm.value);
  }
  addEmployee() {
    this.employeeForm.reset();

    this.isAdd = true;
    this.isEdit = false;
  }
  backtolist() {
    this.isAdd = false;
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
