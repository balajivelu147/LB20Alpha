import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  public Book = [];
  headers = new HttpHeaders();
  tokens = new HttpHeaders();
  constructor(private httpClient: HttpClient) { }
  getAllBookDetails() {
    let url = 'https://bookcart.azurewebsites.net/api/Book';
    return this.httpClient.get(url)
  }

  getToken() {
    var t = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYWhhbmFSZWRkeSIsInVzZXJpZCI6Ijk5OSIsInVzZXJUeXBlSWQiOiIyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMiIsImp0aSI6IjYyYjgzYjBiLWY2NjAtNDdmYi1hZDc2LTcyMzVhZjg5ODMxZSIsImV4cCI6MTY1NzI3MDMzMSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzNjQvIn0.-SuH6cx8F-flzv_Kq8Tp5NW4uTObNmwGPBJN9WI648A'
    this.tokens = this.headers.append('Authorization', 'Bearer  ' + t),
      this.headers.set('accept', 'text/plain')

    return this.tokens;
  }
  addtowishlist(bookId: number) {
    this.getToken()
    return this.httpClient.post("https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/999/" + bookId, { limit: 10 }, { headers: this.tokens })
  }
  removeWishlist(){
    let url = 'https://bookcart.azurewebsites.net/api/Wishlist/999';
    this.getToken()
    return this.httpClient.delete(url , { headers: this.tokens })

  }

  addToCart(id: number) {
    let url = "https://bookcart.azurewebsites.net/api/ShoppingCart/AddToCart/999/" + id
    let header = new HttpHeaders().set(
      "accept", 'text/plain'
    );
    return this.httpClient.post(url, { headers: header })

  }
  // <------------Book Filter------------------->

  getBookById(book: number) {
    let url = 'https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/' + book;
    return this.httpClient.get(url)
  }
  IndividualBook(book: number) {
    let url = 'https://bookcart.azurewebsites.net/api/Book/' + book;
    let header = new HttpHeaders().set(
      'accept', '*/*')
    return this.httpClient.get(url, { headers: header })
  }

}
