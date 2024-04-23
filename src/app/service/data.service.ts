import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { employee } from '../model/employeeModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      employee: [
        {
          id: 1,
          employeeName: 'John Doe',
          email: 'john.doe@techinnovations.com',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: '2024-04-22',
        },
        {
          id: 2,
          employeeName: 'Jane Smith',
          email: 'jane.smith@techinnovations.com',
          department: 'Engineering',
          salary: '85000',
          jobTitle: 'Senior Engineer',
          employmentStatus: 'Full-time',
          education: 'MSc in Mechanical Engineering',
          date: '2024-04-21',
        },
        {
          id: 3,
          employeeName: 'Alice Johnson',
          email: 'alice.johnson@techinnovations.com',
          department: 'Product Management',
          salary: '95000',
          jobTitle: 'Product Manager',
          employmentStatus: 'Full-time',
          education: 'MBA',
          date: '2024-04-20',
        },
        {
          id: 4,
          employeeName: 'Michael Brown',
          email: 'michael.brown@techinnovations.com',
          department: 'Quality Assurance',
          salary: '78000',
          jobTitle: 'QA Specialist',
          employmentStatus: 'Full-time',
          education: 'BSc in Computer Science',
          date: '2024-04-19',
        },
        {
          id: 5,
          employeeName: 'Rachel Green',
          email: 'rachel.green@techinnovations.com',
          department: 'Human Resources',
          salary: '70000',
          jobTitle: 'HR Manager',
          employmentStatus: 'Full-time',
          education: 'MA in Human Resources',
          date: '2024-04-18',
        },
        {
          id: 6,
          employeeName: 'David Lee',
          email: 'david.lee@techinnovations.com',
          department: 'Marketing',
          salary: '80000',
          jobTitle: 'Marketing Director',
          employmentStatus: 'Full-time',
          education: 'BSc in Marketing',
          date: '2024-04-17',
        },
      ],
    };
  }
  genId(employee: employee[]): number {
    return employee.length > 0
      ? Math.max(...employee.map((hero) => hero.id)) + 1
      : 11;
  }
}
