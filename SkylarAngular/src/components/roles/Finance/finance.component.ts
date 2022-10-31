import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.model";
import {Booking} from "../../../models/booking.model";
import {BankAccountService} from "../../../services/bankaccount.service";
import {BankAccount} from "../../../models/bankaccount.model";
import {Budget} from "../../../models/budget.model";
import {Project} from "../../../models/project.model";
import {BookingService} from "../../../services/booking.service";
import {ProjectService} from "../../../services/project.service";
import {UserService} from "../../../services/user.service";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  constructor(private baService: BankAccountService,
              private bookingService: BookingService,
              private projectService: ProjectService,
              private userService: UserService,
              public authService: AuthenticationService) {
  }

  bankAccounts: BankAccount[] = [];
  users: User[] = []
  booking: Booking[] = []
  budgets: Budget[] = []
  projects: Project[] = []


  getAllUser() {
    this.userService.getAllUser().subscribe((dto: User[]) => {
      this.users = dto;
    })
  }

  // ------------------BankAccount Variables-----------------------------------
  // Create BankAccount
  saldo = 0
  bankName=""
  assignedUserBA: number | undefined;

  // Update BankAccount
  updSaldo = 0
  updBankName=""
  updAssignedUserBA: number | undefined


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

// ------------------Project Variables-----------------------------------
  // Create Projects
  name = ""
  description = "";
  userP: number[] | undefined;


  // Update Project
  updName = ""
  updDescription = "";
  updUserP: number[]=[]

  //-------------------Other Variables--------------------------
  hidden = [false]

  ngOnInit() {
    this.getAllBankAccounts()
    this.getAllUser()
    this.getAllBookings()
    this.getAllProjects()

    //this.getAllBookings()
  }

//--------------------------Bank Accounts------------------------------------
  getAllBankAccounts() {
    this.baService.getAllBankAccounts().subscribe((dto: BankAccount[]) => {
      this.bankAccounts = dto;
    })
  }

  createBankAccount() {
    this.baService.createBankAccount({
      saldo: this.saldo,
      bankName:this.bankName,
      assignedUserId: this.authService.getUserId()!,

    }).subscribe(user => {
      this.getAllBankAccounts()
    })
  }

  updateBankAccount(id: number) {
    this.baService.updateBankAccount({
      saldo: this.updSaldo,
      bankName:this.updBankName,
      assignedUserId: this.updAssignedUserBA!,
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
      date: this.date,
      value: this.value,
      assignedBudgetId: this.budgetB!,
      assignedUserId: this.authService.getUserId()!,
      assignedProjectId: this.projectB!,
      assignedBankAccountId: this.bankAccountB!,


    }).subscribe(user => {
      this.getAllBookings()
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
      this.projects = dto;
    })
  }

  createProject() {
    this.projectService.createProject({
      name: this.name,
      description: this.description,
      assignedUserIds: this.userP!,

    }).subscribe(user => {
      this.getAllProjects()
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({
      name: this.updName,
      description: this.updDescription,
      assignedUserIds: this.updUserP!,
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

