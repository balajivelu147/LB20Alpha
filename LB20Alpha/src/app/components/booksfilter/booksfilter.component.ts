import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, shareReplay } from 'rxjs';
import { pipe } from 'rxjs';
import { ApiserviceService } from 'src/app/shared/apiservice.service';


@Component({
  selector: 'app-booksfilter',
  templateUrl: './booksfilter.component.html',
  styleUrls: ['./booksfilter.component.scss']
})
export class BooksfilterComponent implements OnInit {
  productList: any=[];
  displayList:any=[];
  categorytype: string ='';
  categoriesName: any =[];
  categorylistResponse:any= [];

  autoTicks = false; disabled = false;
  invert = false;
  max = 56000; min = 111; showTicks = false; step = 1000;
  thumbLabel = true;
  value = 56000;
  vertical = false;
  tickInterval = 1000;
  searchKey: string=''

  constructor(public api: ApiserviceService) { }

  ngOnInit(): void {
    this.Allcategories();
    this.getcategories();
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      console.log(this.tickInterval)
      return this.autoTicks ? 'auto' : this.tickInterval;
    }
    return 0;
  }
  
  formatLabel(value: number) {
    if (value >= 1000) {
      console.log(value)
      return Math.round(value / 1000) + 'k';
    }
    console.log(value)
    return value;
  }

  Allcategories(){
    this.api.getallbooks().subscribe(response  => {
      console.log(response)
      this.productList=response;
      this.displayList= this.productList.filter((x: {
        price: number; category: string;title: string}) => x.price<=this.value)
      console.log(this.displayList)
      console.log(this.value)
      
    })
 }
     
    categoryList(categorytype: string){
      this.api.getallbooks().subscribe(response  => {
        this.productList=response;
        this.displayList= this.productList.filter((x: {
          price: number; category: string;}) => x.category==categorytype && x.price<=this.value)
        console.log(this.displayList)
        
      })
    }

    getcategories(){
      this.api.getcategories().subscribe(response => {
        this.categorylistResponse=response;
        this.categoriesName= this.categorylistResponse
        console.log(this.categoriesName)
      })
    }

    inputSearch(abc: string){
      this.displayList=[];
      console.log(this.productList)
      this.searchKey=abc;
      this.productList.forEach((i:any)=> {
        if(i.title.includes(abc)){
          console.log(i.title);
          this.displayList.push(i);
         console.log(this.displayList);
        }
      })
    }

}
