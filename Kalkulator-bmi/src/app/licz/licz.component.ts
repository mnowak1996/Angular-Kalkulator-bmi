import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licz',
  templateUrl: './licz.component.html',
  styleUrls: ['./licz.component.css']
})
export class LiczComponent implements OnInit {
  Waga = 80;
  Wzrost = 1.9 ;
  Wynik = 0;
  color;
  fontColor='white';

  getWaga() {
    return this.Waga;
  }
  getWzrost () {
    return this.Wzrost;
  }
  onLicz() {
    this.Wynik = (this.Waga) / (this.Wzrost * this.Wzrost);
  }
  getWynik() {
    return this.Wynik;
  }
  getColor(){
    if(this.Wynik <= 0){
      this.color='pink';
    }
    else if(this.Wynik >18.5 && this.Wynik <=25){
      this.color = 'green';
    }
    else {
      this.color= 'mistyrose';
      this.fontColor='red';
    }
    return this.color;
  }

  getFontColor() {
    return this.fontColor;
  }

  constructor() { }

  ngOnInit() {
  }

}
