import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglishComponent } from './subject-list/language/english/english.component';
import {HindiComponent} from './subject-list/language/hindi/hindi.component';
import { SubjectListComponent } from './subject-list/subject-list.component';


const routes: Routes = [
  {path:'', redirectTo:'subjectlist',pathMatch:'full'},
  {path:'subjectlist', component:SubjectListComponent},
  {path:'hindi', component:HindiComponent},
  {path:'english', component:EnglishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
