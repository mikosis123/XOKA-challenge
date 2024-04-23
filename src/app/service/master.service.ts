import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../model/employeeModel';
import { MatSnackBar } from '@angular/material/snack-bar';

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
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(
    message: string,
    action: string = 'Close',
    duration: number = 3000
  ) {
    this.snackBar.open(message, action, { duration });
  }
}
