import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  Similarbooks: any = []
  particularbook: any = []
  bookIdNo: any
  ID: any;
  idArray: any = [];
  constructor(private router: Router,
    private book: BookserviceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSimilarBookDetails();
    this.indivudualBookdata();
    this.ID = this.route.snapshot.paramMap.get('id')
  }

  getSimilarBookDetails() {
    // debugger;
    this.route.paramMap.subscribe(params => {
      this.ID = this.route.snapshot.paramMap.get('id')
    })
    this.book.getBookById(this.ID).subscribe((res: any) => {
      this.Similarbooks = res;
    })
  }

  indivudualBookdata() {
    this.book.IndividualBook(this.ID).subscribe((res: any) => {
      this.particularbook = res;
    })
  }

  indivudualBookdataa(index: number) {
    this.ID = this.Similarbooks[index].bookId;
    const ID = this.route.snapshot.paramMap.get('id')
    this.router.navigate(['/book-details/', this.ID]);
    this.bookIdNo = this.Similarbooks[index].bookId;
    this.book.IndividualBook(this.bookIdNo).subscribe((res: any) => {
      this.particularbook = res;
    })
  }

  bookFilter(index: number) {
    this.indivudualBookdataa(index);
    this.getSimilarBookDetails()
  }

  addToCart(index: number) {
    this.book.addToCart(index).subscribe((res: any) => {
      console.log("CartItems", res)
    })
  }

  addToCartt(index: number) {
   
    this.book.addToCart(this.Similarbooks[index].bookId).subscribe((res: any) => {
      console.log("CartItems", res)
    })
  }

  addtoWhishList(index: any) {
    // debugger;
    this.book.addtowishlist(this.Similarbooks[index].bookId).subscribe((res: any) => {
      console.log("WishList Items", res);
      this.idArray.push(this.Similarbooks[index].bookId)
    })
  }
  addtoWhishListt(index: any){
    this.book.addtowishlist(index).subscribe((res: any) => {
      console.log("WishList Items", res);
      this.idArray.push(index)
    })
  }
  removeFromWishlist(index: number) {
    this.book.addtowishlist(this.Similarbooks[index].bookId).subscribe((res: any) => {
      console.log("WishList Items", res);
      const indexx = this.Similarbooks.indexOf(this.Similarbooks[index].bookId);
      if (indexx > -1) {
        this.Similarbooks.splice(indexx, 1);
      }
    })
  }
}
