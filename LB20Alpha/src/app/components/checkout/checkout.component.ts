import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/shared/apiservice.service';

export interface PeriodicElement {
  quantity: number;
  position: string;
  mrp: number;
  total: number;
}

interface Transaction {
  title: string;
  quantity: number;
  mrp: number;
  cost: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'HP1', quantity: 1, mrp: 234, total: 234},
  {position: 'HP2', quantity: 2, mrp: 213, total: 416},
  {position: 'HP3', quantity: 3, mrp: 321, total: 642},
];

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  user:any ={}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  displayedColumnser: string[] = ['title','quantity','mrp', 'cost'];
  transactions: Transaction[] = [
    {title: 'HP2',quantity:1,mrp : 234, cost: 4 },
    {title: 'HP3',quantity:2,mrp : 213, cost: 4 },
    {title: 'HP4',quantity:2,mrp : 321, cost: 4 }
    
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.quantity*t.mrp).reduce((acc, value) => acc + value, 0);
  }
  

  constructor(private fb:FormBuilder, private router: Router, private api: ApiserviceService) { }

  ngOnInit(): void {
  }

  checkoutForm= this.fb.group({
    'name': new FormControl("",[Validators.required]),
    'AddressLine1': new FormControl("",[Validators.required]),
    'AddressLine2': new FormControl("",[Validators.required]),
    'Pincode': new FormControl("",Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{5}$')])),
    'State': new FormControl("",[Validators.required])

  })


  get name(){
    return this.checkoutForm.get('name');
  }
  
    
  PlaceOrder(){
    if(this.checkoutForm.valid){
    this.api.getOrdersdata(this.checkoutForm.value).subscribe(response => {
        console.log(response)
    })
    this.router.navigate(['/myorders'])
    this.user=Object.assign(this.user, this.checkoutForm.value)
    localStorage.setItem('Users',JSON.stringify(this.user) )
  }else{ 
    window.alert("Kindly enter the shipping address")
  }
}

}
