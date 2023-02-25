import { TestBed } from '@angular/core/testing';

import { ProjectPlannerService } from './project-planner.service';

describe('ProjectService', () => {
  let service: ProjectPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
