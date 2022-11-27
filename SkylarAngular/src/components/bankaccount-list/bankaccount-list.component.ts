import {Component, OnInit} from '@angular/core';
import {BankAccountService} from "../../services/bankaccount.service";
import {BookingService} from "../../services/booking.service";
import {ProjectService} from "../../services/project.service";
import {UserService} from "../../services/user.service";
import {BudgetService} from "../../services/budget.service";
import {AuthenticationService} from "../../services/authentication.service";
import {BankAccount} from "../../models/bankaccount.model";
import {User} from "../../models/user.model";


@Component({
  selector: 'app-bankaccount-list',
  templateUrl: './bankaccount-list.component.html',
  styleUrls: ['./bankaccount-list.component.css']
})
export class BankaccountListComponent implements OnInit{
  constructor(private baService: BankAccountService,
              private bookingService: BookingService,
              private projectService: ProjectService,
              private userService: UserService,
              private budgetService:BudgetService,
              public authService: AuthenticationService) {
  }
ngOnInit() {
    this.getAllBankAccounts()
  this.getAllUser()
}
  getUserName(id:number){
    return this.users.find((user)=>user.id === id)?.username
  }
  getAllUser() {
    this.userService.getAllUser().subscribe((dto: User[]) => {
      this.users = dto;
    })
  }

  users:User[]=[]
  bankAccounts: BankAccount[]=[]
  hidden = [false]
  // ------------------BankAccount Variables-----------------------------------
  // Create BankAccount
  saldo = 0
  bankName=""
  assignedUserBA:number|undefined
  // Update BankAccount
  updSaldo = 0
  updBankName=""
  updAssignedUserBA: number | undefined


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


}
