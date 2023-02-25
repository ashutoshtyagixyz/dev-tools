import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProjectDetailComponent } from './project-planner/project-detail.component';
import { ProjectDetailGuard } from './project-planner/project-detail.guard';
import { ProjectPlannerComponent } from './project-planner/project-planner.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectPlannerComponent,
  },
  {
    path: 'projects/:id',
    canActivate: [ProjectDetailGuard],
    component: ProjectDetailComponent,
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
