import { Component, OnInit } from '@angular/core';
import{ApiService} from 'src/app/api.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  public subjectList : any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getSubject().subscribe(res=>{this.subjectList= res;})
  }
  nameSearch: string=''
}
