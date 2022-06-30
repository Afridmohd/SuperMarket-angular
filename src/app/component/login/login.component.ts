import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData={email:'', password:''};
  errorMessage='';

  constructor(private auth:AuthServiceService) {}

  ngOnInit(): void { }

  onSubmit(){
    let userId=this.auth.login(this.formData.email, this.formData.password);
    if(!userId){
      this.errorMessage="Invalid Account!!"
    }else{
      this.errorMessage='';
      this.auth.storageToken(userId);
      this.auth.canAccess();
    }
  }
  

}
