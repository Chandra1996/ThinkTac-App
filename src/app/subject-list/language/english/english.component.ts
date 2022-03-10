import { Component, OnInit } from '@angular/core';
import{ApiService} from 'src/app/api.service';
@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  public subjectList : any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getSubject().subscribe(res=>{this.subjectList= res;})
  }

}
