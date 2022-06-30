import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { data } from 'src/app/Model/data';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  id!:number;
  data={
    id:0,
    name:'',
    quantity:'',
    CostPrice:'',
    SalePrice:'',
    
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    
  }

  AddData(item:any){
    
  }

}
