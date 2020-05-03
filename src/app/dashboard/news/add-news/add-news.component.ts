import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INews } from 'src/app/shared/interfaces/INews';
import { NewsService } from 'src/app/core/services/news.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  submitted:boolean = false;

  constructor(private newsService : NewsService,private router:Router,private toaster:ToastrService) { }
  addNewsForm : FormGroup;
  defaultpath:string ='../../../assets/defaultcovid.jpg';

  ngOnInit(): void {
    this.addNewsForm = new FormGroup({
      title : new FormControl('',Validators.required),
      description : new FormControl('',[Validators.required,Validators.maxLength(50)]),
      summary : new FormControl('', [Validators.required,Validators.maxLength(100)]),
      fullnews: new FormControl('',Validators.required),
      image : new FormControl(),
      file:new FormControl(null)
    })
  }
  get newsForm() { return this.addNewsForm.controls; }
  addNews(){
    this.submitted = true;
    if(this.addNewsForm.valid){
      var news = {
        title : this.newsForm.title.value,
        description : this.newsForm.description.value,
        summary:this.newsForm.summary.value,
        fullnews:this.newsForm.fullnews.value,
        file : this.newsForm.file.value == null ? this.defaultpath : this.newsForm.file.value
      }
      this.newsService.addNews(news)
      .subscribe(news=>{
        console.log(news)
        this.toaster.success('News has been added successfully.', 'Covid Tracker');
        this.router.navigate(['dashboard'])
      });
    }
    
   
  }
  onFileChange(event) {
    const reader = new FileReader();
    console.log(event.target.files);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.addNewsForm.patchValue({
          file: reader.result
       });
      };
    }
  }
}
