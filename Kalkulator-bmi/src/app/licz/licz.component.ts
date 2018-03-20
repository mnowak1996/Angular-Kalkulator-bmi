import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licz',
  templateUrl: './licz.component.html',
  styleUrls: ['./licz.component.css']
})
export class LiczComponent implements OnInit {
  Waga = 0;
  Wzrost = 0 ;
  Wynik = 0;

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
    return this.Wynik > 24 ? 'red' : 'blue' ;
  }

  constructor() { }

  ngOnInit() {
  }

}
