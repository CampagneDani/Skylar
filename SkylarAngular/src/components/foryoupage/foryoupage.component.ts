import { Component } from '@angular/core';

@Component({
  selector: 'foryoupage-component',
  templateUrl: './foryoupage.component.html',
  styleUrls: ['./foryoupage.component.css']
})
export class ForyoupageComponent {

  value = '';
  onEnter(value: string) {
    this.value = value; }
}

