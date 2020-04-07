import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private isAuth = false;

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

  isAuthentificated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000)
    })
  }
}
