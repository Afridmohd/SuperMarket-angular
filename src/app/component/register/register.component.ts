import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formData={name:'', email:'', password:''};

  constructor(private auth: AuthServiceService, private router: Router) { }

  ngOnInit(): void {}

  onSubmit(){
    let userId= this.auth.register(this.formData.name, this.formData.email, this.formData.password);

    if(userId){
      this.router.navigate(['/login']);
    }
  }
}
