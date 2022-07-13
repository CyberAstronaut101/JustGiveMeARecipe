import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [
    { label: 'Home', routerLink: ['/'] },
    { label: 'About', routerLink: ['/about'] },
    { label: 'Contact', routerLink: ['/contact'] },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}