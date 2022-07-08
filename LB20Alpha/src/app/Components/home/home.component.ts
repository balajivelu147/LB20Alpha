import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: any = []
  buttonText: string | undefined;
  bookId: any
  ID: any
  idArray: any = []
  constructor(private book: BookserviceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.BookDetails()
  }

  BookDetails() {
    this.book.getAllBookDetails().subscribe((res: any) => {
      this.books = res
      console.log(this.books)
    })
  }

  goToPage(index: number) {
    this.ID = this.books[index].bookId;
    this.router.navigate(['/book-details/', this.ID]);
  }

  addToCart(index: number) {
    this.book.addToCart(this.books[index].bookId).subscribe((res: any) => {
      console.log("CartItems", res)
    })
  }

  addtoWhishList(index: any) {
    // debugger;
    this.book.addtowishlist(this.books[index].bookId).subscribe((res: any) => {
      console.log("WishList Items", res);
      this.idArray.push(this.books[index].bookId)
    })
  }

  removeFromWishlist(index: number) {
    this.book.addtowishlist(this.books[index].bookId).subscribe((res: any) => {
      console.log("WishList Items", res);
      const indexx = this.idArray.indexOf(this.books[index].bookId);
      if (indexx > -1) {
        this.idArray.splice(indexx, 1);
      }
    })
  }
}
