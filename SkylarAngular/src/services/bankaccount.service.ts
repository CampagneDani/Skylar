import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Booking} from "../models/booking.model";
import {User} from "../models/user.model";
import {BankAccount} from "../models/bankaccount.model";
import {Project} from "../models/project.model";
import {Budget} from "../models/budget.model";


@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }
  bankAccountURL = 'http://localhost:8080/bankAccount';
  getAllBankAccounts(){
    return this.http.get<BankAccount[]>(this.bankAccountURL);
  }

  createBankAccount(account: { saldo: number;bankAccountName:string; assignedUserId: User["id"] }): Observable<BankAccount> {
    return this.http.post<BankAccount>(this.bankAccountURL, account);
  }

  deleteBankAccount(id: number): Observable<unknown> {
    const url = `${this.bankAccountURL}/${id}`
    return this.http.delete(url)
  }

  updateBankAccount(account: {saldo:number,bankAccountName:string,assignedUserId:User['id']},
                    id: number):Observable<BankAccount>{
    const url = `${this.bankAccountURL}/${id}`
    return this.http.put<BankAccount>(url,account)
  }
}
