import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';
import { CommonModule } from '@angular/common';

export interface PeriodicElement {
  id: number;
  employeeName: string;
  candidateName: string;
  company: string;
  department: string;
  salary: string;
  JobTitle: string;
  employmentStatus: string;
  education: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 2,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 3,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 4,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 5,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 6,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
  {
    id: 7,
    employeeName: 'John Doe',
    candidateName: 'Jane Smith',
    company: 'Tech Innovations Inc.',
    department: 'Research and Development',
    salary: '90000',
    JobTitle: 'Lead Researcher',
    employmentStatus: 'Full-time',
    education: 'PhD in Computer Science',
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'zokra-projuct';
  displayedColumns: string[] = [
    'id',
    'employeeName',
    'candidateName',
    'company',
    'department',
    'salary',
    'employmentStatus',
    'education',
    'action',
  ];
  constructor(private service: MasterService, private builder: FormBuilder) {}

  EmployeeForm = this.builder.group({
    id: this.builder.control(0),
    employeeName: [''],
    company: [''],
    department: [''],
    salary: this.builder.control(3000),
    JobTitle: [''],
    employmentStatus: [''],
    education: [''],
  });
  isadd = false;
  isedit = false;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    } else {
      console.error('Paginator is not available.');
    }
  }

  editEmployee(id: number) {
    console.log('Edit Employee:', id);
  }
  delateEmployee(id: number) {
    console.log('Delete Employee:', id);
  }
  saveEmployee() {}
  addEmployee() {
    this.isadd = true;
  }
}
