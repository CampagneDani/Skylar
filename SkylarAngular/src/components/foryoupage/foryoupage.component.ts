import { Component } from '@angular/core';

@Component({
  selector: 'foryoupage-component',
  templateUrl: './foryoupage.component.html',
  styleUrls: ['./foryoupage.component.css']
})
export class ForyoupageComponent {
test =""
  ddd=""
  ngOnInit(){

  }
  onSubmit(data: string){
  alert("The Data '"+data+"' was submitted!")
    data = this.ddd
    return data
  }
}

