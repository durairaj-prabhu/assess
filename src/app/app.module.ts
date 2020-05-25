import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { App2Component } from './app2/app2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  App3Component } from './app3/app3.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TopicFilterPipe} from '../app/appTopicFilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { App1Component } from './app1/app1.component';
import { TopicComponent } from './topic/topic.component';


@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    App3Component,
    TopicComponent,
    TopicFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    AngularEditorModule ,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
