import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../DTO/user';
import { signup } from '../DTO/signup';
import { login } from '../DTO/login';
import { updateInfo } from '../DTO/updateInfo';
// import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // baseurl = '';
  constructor(private httpClient: HttpClient) {
    // this.baseurl = environment.APIUrl;
  }
  getLoggedInUser(username: string): Observable<any> {
    return this.httpClient.get(
      `http://localhost/finalProject/api/Account/finduser?username=${username}`
    );
  }
  getUserById(id: string): Observable<any> {
    return this.httpClient.get(
      `http://localhost/finalProject/api/Account/finduserbyid?userId=${id}`
    );
  }
  // GetUserProfile(): Observable<any> {
  //   return this.httpClient.get(
  //     'http://localhost/finalProject/api/Account/finduser'
  //   );
  // }
  createAccount(user: signup): Observable<any> {
    debugger;
    return this.httpClient.post(
      'http://localhost/finalProject/api/Account/SignUp',
      user
    );
  }
  login(user: login): Observable<any> {
    return this.httpClient.post(
      'http://localhost/finalProject/api/Account/Login',
      user
    );
  }
  updateInfo(updateInfo: updateInfo, id: string): Observable<any> {
    return this.httpClient.put(
      `http://localhost/finalProject/api/Account/updateInfo?id=${id}`,
      updateInfo
    );
  }
}
