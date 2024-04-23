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

          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
        },
        {
          id: 2,
          employeeName: 'John Doe',
          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
        },
        {
          id: 3,
          employeeName: 'John Doe',
          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
        },
        {
          id: 4,
          employeeName: 'John Doe',

          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
        },
        {
          id: 5,
          employeeName: 'John Doe',
          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
        },
        {
          id: 6,
          employeeName: 'John Doe',
          company: 'Tech Innovations Inc.',
          department: 'Research and Development',
          salary: '90000',
          jobTitle: 'Lead Researcher',
          employmentStatus: 'Full-time',
          education: 'PhD in Computer Science',
          date: ' 20 / 15 / 24',
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
