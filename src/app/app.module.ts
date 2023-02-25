import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProjectModule } from './project-planner/project.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ProjectModule],
  declarations: [AppComponent, WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
