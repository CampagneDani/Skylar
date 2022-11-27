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
import {BudgetService} from "../../../services/budget.service";
import {ApexChart, ApexNonAxisChartSeries} from "ng-apexcharts";

@Component({
  selector: 'app-finance',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  chartSeries: ApexNonAxisChartSeries=[40,32,28,55]

  chartDetails: ApexChart = {
    type:'pie',
    toolbar:{
      show:true
    }
  }
  constructor(private baService: BankAccountService,
              private bookingService: BookingService,
              private projectService: ProjectService,
              private userService: UserService,
              private budgetService:BudgetService,
              public authService: AuthenticationService) {
  }

  bankAccounts: BankAccount[] = [];
  users: User[] = []
  booking: Booking[] = []
  budgets: Budget[] = []
  projects: Project[] = []
  budget:Budget[]=[]
  hidden = [false]
  truefalse=[true,false]

  getAllUser() {
    this.userService.getAllUser().subscribe((dto: User[]) => {
      this.users = dto;
    })
  }
  getProjectName(id:number){
    return this.projects.find((project) => project.id === id)?.projectName  }
  getBankAccountName(id:number){
    return this.bankAccounts.find((bankaccount)=>bankaccount.id === id)?.bankAccountName
  }
  getUserName(id:number){
    return this.users.find((user)=>user.id === id)?.username
  }

  //-------------------Budget Variables--------------------------
  // Create Budgets
  startDate = Date()
  endDate = Date()
  valueB = 0

  assignedProjectBudget:number|undefined


  //Update Budgets
  updStartDate = Date()
  updEndDate = Date()
  updValueB = 0
  updAssignedProjectBudget: number|undefined


  // ------------------BankAccount Variables-----------------------------------
  // Create BankAccount
  saldo = 0
  bankName=""
  assignedUserBA:number|undefined
  // Update BankAccount
  updSaldo = 0
  updBankName=""
  updAssignedUserBA: number | undefined


// ------------------Booking Variables-----------------------------------
  // Create Booking
  date = Date()
  value = 0
  budgetB: number | undefined;
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
  userP: number | undefined;


  // Update Project
  updName = ""
  updDescription = "";
  updUserP: number|undefined

  //-------------------Other Variables--------------------------

  ngOnInit() {
    this.getAllBankAccounts()
    this.getAllUser()
    this.getAllBookings()
    this.getAllProjects()
    this.getAllBudgets()
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
      bankAccountName:this.bankName,
      assignedUserId: this.assignedUserBA!,

    }).subscribe(user => {
      this.getAllBankAccounts()
      console.log(user)
    })
  }

  updateBankAccount(id: number) {
    this.baService.updateBankAccount({
      saldo: this.updSaldo,
      bankAccountName:this.updBankName,
      assignedUserId: this.updAssignedUserBA!,
    }, id).subscribe(bankAcc => {

      this.getAllBankAccounts()
      console.log(bankAcc)
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

//--------------------------Projects------------------------------------
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((dto: Project[]) => {
      this.projects = dto;
    })
  }

  createProject() {
    this.projectService.createProject({
      projectName: this.name,
      projectDescription: this.description,
      assignedUserId: this.userP!,

    }).subscribe(project => {
      this.getAllProjects()
      console.log(project)
    })
  }

  updateProject(id: number) {
    this.projectService.updateProject({
      projectName: this.updName,
      projectDescription: this.updDescription,
      assignedUserId: this.updUserP!,
    }, id).subscribe(project => {

      this.getAllProjects()
      console.log(project)
    })

  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects()
    })
  }

  //--------------------------Budgets------------------------------------

  getAllBudgets() {
    this.budgetService.getAllBudget().subscribe((dto: Budget[]) => {
      this.budgets = dto;
    })
  }

  createBudget() {
    this.budgetService.createBudget({
      startDate: this.startDate,
      endDate: this.endDate,
      value: this.valueB,
      assignedProjectId: this.assignedProjectBudget!,

    }).subscribe(budget => {
      this.getAllBudgets()
      console.log(budget)
    })
  }

  updateBudget(id: number) {
    this.budgetService.updateBudget({
      startDate: this.updStartDate,
      endDate: this.updEndDate,
      value: this.updValueB,
      assignedProjectId:this.updAssignedProjectBudget!
    }, id).subscribe(budget => {

      this.getAllBudgets()
      console.log(budget)

    })

  }

  deleteBudget(id: number) {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.getAllBudgets()
    })
  }


}

