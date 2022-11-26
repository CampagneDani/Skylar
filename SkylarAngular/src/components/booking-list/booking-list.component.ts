import {Component, OnInit} from '@angular/core';
import {BankAccountService} from "../../services/bankaccount.service";
import {BookingService} from "../../services/booking.service";
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {BudgetService} from "../../services/budget.service";
import {AuthenticationService} from "../../services/authentication.service";
import {BankAccount} from "../../models/bankaccount.model";
import {User} from "../../models/user.model";
import {Booking} from "../../models/booking.model";
import {Budget} from "../../models/budget.model";
import {Project} from "../../models/project.model";


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit{
  constructor(private baService: BankAccountService,
              private bookingService: BookingService,
              private projectService: ProjectService,
              private userService: UserService,
              private budgetService:BudgetService,
              public authService: AuthenticationService) {
  }
  ngOnInit() {
  this.getAllBookings()
    this.getAllBudgets()
    this.getAllProjects()
    this.getAllBankAccounts()
    }

  getProjectName(id:number){
    return this.projects.find((project) => project.id === id)?.projectName  }
  getBankAccountName(id:number){
    return this.bankAccounts.find((bankaccount)=>bankaccount.id === id)?.bankAccountName
  }
  booking:Booking[]=[]
  users:User[]=[]
  bankAccounts: BankAccount[]=[]
  budgets:Budget[]=[]
  projects:Project[]=[]
  hidden = [false]
// ------------------Getter Functions-----------------------------------
  getAllBankAccounts() {
    this.baService.getAllBankAccounts().subscribe((dto: BankAccount[]) => {
      this.bankAccounts = dto;
    })
  }
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.projects = dto;
    })
  }
  getAllBudgets() {
    this.budgetService.getAllBudget().subscribe((dto: Budget[]) => {
      this.budgets = dto;
    })
  }
// ------------------Booking Variables-----------------------------------
  // Create Booking
  date = Date()
  value = 0
  budgetB: number | undefined;
  //userB: number|undefined;
  projectB: number | undefined
  bankAccountB: number | undefined

  // Update Booking
  updDate = Date()
  updValue = 0
  updBudgetB: number | undefined;
  updUserB: number | undefined;
  updProjectB: number | undefined
  updBankAccountB: number | undefined;

//--------------------------Booking------------------------------------
  getAllBookings() {
    this.bookingService.getAllBookings().subscribe((dto: Booking[]) => {
      this.booking = dto;
    })
  }

  createBookings() {
    this.bookingService.createBooking({
      date: this.date,
      value: this.value,
      assignedBudgetId: this.budgetB!,
      assignedUserId: this.authService.getUserId()!,
      assignedProjectId: this.projectB!,
      assignedBankAccountId: this.bankAccountB!,


    }).subscribe(user => {
      this.getAllBookings()
      console.log(user)
    })
  }

  updateBooking(id: number) {
    this.bookingService.updateBooking({
      date: this.updDate,
      value: this.updValue,
      assignedBudgetId: this.updBudgetB!,
      assignedUserId: this.updUserB!,
      assignedProjectId: this.updProjectB!,
      assignedBankAccountId: this.updBankAccountB!,

    }, id).subscribe(booking => {

      this.getAllBookings()
      console.log(booking)
    })

  }

  deleteBookings(id: number) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.getAllBookings()
    })
  }


}
