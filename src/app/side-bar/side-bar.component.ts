import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onLogout() {
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
