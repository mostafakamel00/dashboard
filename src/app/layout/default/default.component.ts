import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent implements OnInit {
  sideOpen = true;
  constructor() {}

  ngOnInit(): void {}
  sideBarToggler() {
    this.sideOpen = !this.sideOpen;
  }
}
