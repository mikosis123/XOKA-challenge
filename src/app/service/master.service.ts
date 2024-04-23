import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../model/employeeModel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private employees = 'api/employee/';
  constructor(private http: HttpClient) {}

  getallemployee() {
    return this.http.get<employee[]>(this.employees);
  }

  Createemployee(inputdata: employee) {
    return this.http.post(this.employees, inputdata);
  }

  Updateemployee(inputdata: employee) {
    return this.http.put(this.employees + inputdata.id, inputdata);
  }
  Deleteemployee(productid: number) {
    return this.http.delete(this.employees + productid);
  }
  Getemployees(productid: number) {
    return this.http.get<employee>(this.employees + productid);
  }
}
