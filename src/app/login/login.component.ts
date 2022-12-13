import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private logintoken: LoginService,
    private router: Router,
    private SpinnerService: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
  }

  // onSubmit(form: NgForm) {
  //   this.logintoken.getLoginToken(
  //     form.value.email,
  //     form.value.password
  //   );
  // }


  onSubmit(form: NgForm) {
    this.SpinnerService.show();
    let res = this.logintoken.getLoginToken(
      form.value.email,
      form.value.password
    );

    res.subscribe(
      (data) => {
        localStorage.setItem('token', data['token']);
        console.log(data['token']);
        this.SpinnerService.hide();
        if (['token']) {
          this.navigateToHome();
        }
      },
      (err: HttpErrorResponse) => {
        alert('Please Enter Correct Credentials!');
      }
    );
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
