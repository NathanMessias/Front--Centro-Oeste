import { Component, OnInit} from "@angular/core";
import { SocialUser, AuthService, FacebookLoginProvider } from "ng4-social-login";


@Component({
    selector: 'login-home',
    templateUrl: './login-home.component.html',
    styleUrls: ['./login-home.component.css']
})


export class LoginHomeComponent implements OnInit{
 
    title = 'login';
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService) { }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
  }


    ngOnInit(){
    }
    
}