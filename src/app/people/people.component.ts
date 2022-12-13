import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListApiService } from '../list-api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  listuser = [{ avatar: '', first_name: '', last_name: '' }];

  constructor(private http: HttpClient, private listApi: ListApiService) {}

  ngOnInit() {
    this.listApi.apiListCall().subscribe((response) => {
      console.warn('list api data', response);
      this.listuser = response['data'];
      console.log(this.listuser);
    });
  }
}
