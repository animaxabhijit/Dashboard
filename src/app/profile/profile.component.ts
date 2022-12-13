import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallApiService } from '../call-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user = {
    avatar: '',
    first_name: '',
    last_name: '',
  };
  constructor(private http: HttpClient, private api: CallApiService) {}

  ngOnInit() {
    this.api.apiCall().subscribe((response) => {
      console.warn('call api data', response);
      this.user = response['data'];
    });
  }
}
