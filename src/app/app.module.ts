import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguagePipe } from './pipe/language.pipe';
import { EnglishComponent } from './subject-list/language/english/english.component';
import { HindiComponent } from './subject-list/language/hindi/hindi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectListComponent,
    FooterComponent,
    FilterPipe,
    LanguagePipe,
    HindiComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
