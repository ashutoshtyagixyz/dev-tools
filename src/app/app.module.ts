import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPlannerComponent } from './project-planner/project-planner.component';
import { StarComponent } from './star-component/star-component.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, ProjectPlannerComponent, StarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
