import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from './Project';
import { ProjectPlannerService } from './project-planner.service';

@Component({
  templateUrl: './project-planner.component.html',
  styleUrls: ['./project-planner.component.scss'],
})
export class ProjectPlannerComponent implements OnInit, OnDestroy {
  constructor(private projectPlannerService: ProjectPlannerService) {}

  //properties
  private _filter: string = '';
  isWrapped: boolean = false;
  errorMessage: string = '';
  sub!: Subscription;

  //data
  filteredProjects: IProject[] = [];
  projects: IProject[] = [];

  //methods
  toggleWrap() {
    this.isWrapped = !this.isWrapped;
  }
  ngOnInit(): void {
    this.filter = '';
    this.sub = this.projectPlannerService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.filteredProjects = this.projects;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  performFilter(strFilter: string): IProject[] {
    strFilter = strFilter.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>
      project.name.toLocaleLowerCase().includes(strFilter)
    );
  }

  //getters setters
  get filter(): string {
    return this._filter;
  }
  set filter(strFilter: string) {
    this._filter = strFilter;
    this.filteredProjects = this.performFilter(strFilter);
  }
}
