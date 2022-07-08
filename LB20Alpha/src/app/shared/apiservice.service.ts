import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getallbooks(){
    let url="https://bookcart.azurewebsites.net/api/Book"
    return this.http.get(url);
  }

  getcategories(){
    let url="https://bookcart.azurewebsites.net/api/Book/GetCategoriesList"
    return this.http.get(url);
  }

  getOrdersdata(body: any){
    let url="https://bookcart.azurewebsites.net/api/CheckOut/1050"
    const customHeaders= new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTdWJoYXNoIGQiLCJ1c2VyaWQiOiIxMDUwIiwidXNlclR5cGVJZCI6IjIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwianRpIjoiNzg5YWQ4NzAtMjU5NC00YWU2LWExZDktM2QzNTZiZjU2YjE1IiwiZXhwIjoxNjU3Mjg2MTQwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2NC8ifQ.-DaxHdeUB8Mu7ukqDcheFkd34RJC2OfpIohTuMCNJLY'
    })
    return this.http.post(url,body,{headers: customHeaders})
    
  }
}
