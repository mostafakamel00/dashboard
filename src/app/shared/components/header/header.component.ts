import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sidebarToggle: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  toggleSidebar() {
    this.sidebarToggle.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
