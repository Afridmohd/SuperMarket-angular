import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.css']
})
export class OwnerDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {id:1, name:"Biscuit", quantity:200, CostPrice:28, SalePrice:35},
    {id: 2, name:"Cookies", quantity:230, CostPrice:65, SalePrice:84},
    {id: 3, name:"Chocolates", quantity:2, CostPrice:200, SalePrice:200}
  ]

  deleteData(id:number){
    this.data=this.data.filter((d, index)=>d.id!=id);
  }
  
  addNew(ag:any){
    this.data.push(ag);
  }
}
