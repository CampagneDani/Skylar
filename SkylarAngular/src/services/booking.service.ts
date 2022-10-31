import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from "../models/project.model";
import {Budget} from "../models/budget.model";
import {Booking} from "../models/booking.model";
import {User} from "../models/user.model";
import {BankAccount} from "../models/bankaccount.model";
import {BankAccountService} from "./bankaccount.service";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  bookingURL = 'http://localhost:8080/booking';

  getAllBookings() {
    return this.http.get<Booking[]>(this.bookingURL);
  }

  createBooking(booking: { date: string; assignedBankAccountId: BankAccount['id']; assignedProjectId: Project['id']; assignedBudgetId: Budget['id']; value: number; assignedUserId: User['id']; }): Observable<Booking> {
    return this.http.post<Booking>(this.bookingURL, booking);
  }

  deleteBooking(id: number): Observable<unknown> {
    const url = `${this.bookingURL}/${id}`
    return this.http.delete(url)
  }

  findByBooking(project: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.bookingURL}?project=${project}`);
  }

  updateBooking(booking: { date: string; assignedBankAccountId: BankAccount['id']; assignedProjectId: Project['id']; assignedBudgetId: Budget['id']; value: number; assignedUserId: User['id'];  },
                id: number): Observable<Booking> {
    const url = `${this.bookingURL}/${id}`
    return this.http.put<Booking>(url, booking)
  }
}
