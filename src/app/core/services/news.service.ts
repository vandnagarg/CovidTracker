import { Injectable } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsURL = 'api/allNews';
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  allnews:INews[] = [];
  constructor (private http: HttpClient) {
  }

  addNews(news : INews){
    return this.http.post<INews>(this.newsURL,news, this.httpOptions).pipe(
      catchError(this.handleError)
    );

  }
  getNews(){
    return this.http.get<INews[]>(this.newsURL) ;
  }
  private handleError (error: any) {
    console.error(error); // log to console instead
    return throwError(error);
  }
}
