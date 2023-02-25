import { NgModule } from '@angular/core';
import { ProjectPlannerComponent } from './project-planner.component';
import { ProjectDetailComponent } from './project-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [ProjectPlannerComponent, ProjectDetailComponent],
  imports: [RouterModule, SharedModule],
})
export class ProjectModule {}
