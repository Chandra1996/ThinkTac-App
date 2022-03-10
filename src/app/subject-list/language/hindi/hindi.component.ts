import { Component, OnInit } from '@angular/core';
import{ApiService} from 'src/app/api.service';
@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit {
  public subjectList : any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getSubject().subscribe(res=>{this.subjectList= res;})
  }

}
