import { Component } from '@angular/core';
import {User} from "../../../models/user.model";
import {Booking} from "../../../models/booking.model";
import {BankAccountService} from "../../../services/bankaccount.service";
import {BankAccount} from "../../../models/bankaccount.model";
import {Budget} from "../../../models/budget.model";
import {Project} from "../../../models/project.model";
import {BookingService} from "../../../services/booking.service";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent {
  constructor(private baService:BankAccountService,
              private bookingService:BookingService,
              private projectService:ProjectService) {
  }

// ------------------BankAccount Variables-----------------------------------
  // Create BankAccount
  saldo =0
  assignedUserBA: User[] = [];
  assignedBookingBA: Booking[] = []
  bankAcc:BankAccount[]=[]

  // Update BankAccount
  updSaldo =0
  updAssignedUserBA: User[] = [];
  updAssignedBookingBA: Booking[] = []


// ------------------Booking Variables-----------------------------------
  // Create Booking
  date=Date()
  value=0
  budgetBooking:Budget[]=[]
  userBooking:User[]=[]
  projectBooking:Project[]=[]
  bankAccountBooking=[]=[]
  booking:Booking[]=[]

  // Update Booking
  updDate=Date()
  updValue=0
  updBudgetBooking:Budget[]=[]
  updUserBooking:User[]=[]
  updProjectBooking:Project[]=[]
  updBankAccountBooking: BankAccount[]=[]

// ------------------Project Variables-----------------------------------
  // Create Projects
  name = ""
  description = "";
  assignedBudgetProject: Budget[] = [];
  assignedUserProject: User[] = [];
  assignedBookingProject: Booking[] = []
  project: Project[] = []

  // Update Project
  updName = ""
  updDescription = "";
  updAssignedBudgetProject: Budget[] = [];
  updAssignedUserProject: User[] = [];
  updAssignedBookingProject: Booking[] = []
  updProject: Project[] = []
  //-------------------Other Variables--------------------------
  hidden = [false]

  ngOnInit() {
    this.getAllBankAccounts()
    this.getAllBookings()
  }
//--------------------------Bank Accounts------------------------------------
  getAllBankAccounts() {
    this.baService.getAllBankAccounts().subscribe((dto: BankAccount[]) => {
      this.bankAcc = dto;
    })
  }

  createBankAccount() {
    this.baService.createBankAccont({
      saldo:this.saldo,
      assignedBookings:this.assignedBookingBA,
      assignedUser:this.assignedUserBA,

    }).subscribe(user => {
      this.getAllBankAccounts()
    })
  }

  updateBankAccount(id: number) {
    this.baService.updateBankAccount({
      saldo: this.updSaldo,
      assignedBookings: this.updAssignedBookingBA,
      assignedUser: this.updAssignedUserBA,
    }, id).subscribe(project => {

      this.getAllBankAccounts()

    })

  }

  deleteBankAccount(id: number) {
    this.baService.deleteBankAccount(id).subscribe(() => {
      this.getAllBankAccounts()
    })
  }


//--------------------------Booking------------------------------------
  getAllBookings() {
    this.bookingService.getAllBookings().subscribe((dto: Booking[]) => {
      this.booking = dto;
    })
}

createBookings() {
    this.bookingService.createBooking({
      date:this.date,
      value:this.value,
      assignedBudget:this.budgetBooking,
      assignedUser:this.userBooking,
      assignedProject:this.projectBooking,
      assignedBankAccount:this.bankAccountBooking,

    }).subscribe(user => {
      this.getAllBookings()
    })
  }

  updateBooking(id: number) {
    this.bookingService.updateBooking({
      date:this.updDate,
      value:this.updValue,
      assignedBudget:this.updBudgetBooking,
      assignedUser:this.updUserBooking,
      assignedProject:this.updProjectBooking,
      assignedBankAccount:this.updBankAccountBooking,

    }, id).subscribe(project => {

      this.getAllBookings()

    })

  }

  deleteBookings(id: number) {
    this.bookingService.deleteBooking(id).subscribe(() => {
      this.getAllBookings()
    })
  }
//--------------------------Projects------------------------------------
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.project = dto;
    })
  }

  createProject() {
    this.projectService.createProject({
      name: this.name,
      description: this.description,
      assignedBudget: this.assignedBudgetProject,
      assignedBooking: this.assignedBookingProject,
      assignedUser: this.assignedUserProject,

    }).subscribe(user => {
      this.getAllProjects()
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({
      name: this.updName,
      description: this.updDescription,
      assignedBudget: this.updAssignedBudgetProject,
      assignedBooking: this.updAssignedBookingProject,
      assignedUser: this.updAssignedUserProject,
    }, id).subscribe(project => {

      this.getAllProjects()

    })

  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects()
    })
  }


}

