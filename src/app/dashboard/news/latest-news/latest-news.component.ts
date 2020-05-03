import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import { INews } from 'src/app/shared/interfaces/INews';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  constructor(private newsService : NewsService) { }
  allnews:INews[] = [];
  ngOnInit(): void {
    this.newsService.getNews()
    .subscribe(news=>{
      this.allnews = news.reverse();
      
      console.log(news)
    })
  }

}
