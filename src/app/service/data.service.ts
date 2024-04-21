import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb(): {} | Observable<{}> | Promise<{}> {
    return {
      employees: [
        {
          id: 1,
          name: 'miko',
          age: 25,
          gender: 'male',
          salary: 5000,
          position: 'manager',
          department: 'IT',
        },
        {
          id: 2,
          name: 'sis',
          age: 25,
          gender: 'male',
          salary: 5000,
          position: 'manager',
          department: 'IT',
        },
        {
          id: 3,
          name: 'mena',
          age: 25,
          gender: 'male',
          salary: 5000,
          position: 'manager',
          department: 'IT',
        },
      ],
    };
  }
}
