import { Component, OnInit } from '@angular/core';
import { IProject } from './Project';

@Component({
  selector: 'devtools-project-planner',
  templateUrl: './project-planner.component.html',
  styleUrls: ['./project-planner.component.scss'],
})
export class ProjectPlannerComponent implements OnInit {
  //properties
  private _filter: string = '';
  isWrapped: boolean = false;

  //data
  filteredProjects: IProject[] = [];
  projects: IProject[] = [
    {
      name: 'Semper Rutrum Corporation',
      id: 'C8D7FE2A-FD27-A87A-C5A1-63107BB78771',
      target: 'Picardie',
      url_target: 'https://cnn.com/en-ca?ab=441&aad=2',
      release: 'odio',
      url_release: 'https://facebook.com/en-us?search=1&q=de',
      first_build: '02/02/2023',
      story_points: 443,
      completion: 26.79,
    },
    {
      name: 'Gravida Sit Amet Corp.',
      id: 'D24DF54C-54DA-C8DA-9755-8C926B621E2B',
      target: 'South Australia',
      url_target: 'https://walmart.com/fr?q=0',
      release: 'facilisis',
      url_release: 'http://yahoo.com/fr?search=1&q=de',
      first_build: '04/06/2023',
      story_points: 500,
      completion: 91.46,
    },
    {
      name: 'At Nisi Cum Inc.',
      id: '1A7B4D99-457C-3B8E-23BC-57F42BD1A2ED',
      target: 'North Gyeongsang',
      url_target: 'https://walmart.com/one?gi=100',
      release: 'aptent',
      url_release: 'http://ebay.com/group/9?ad=115',
      first_build: '11/13/2022',
      story_points: 228,
      completion: 6.37,
    },
    {
      name: 'Euismod Mauris Eu Consulting',
      id: 'E8AD11B5-476D-EA76-3B9A-D726620D8D75',
      target: 'Jönköpings län',
      url_target: 'https://baidu.com/fr?search=1',
      release: 'lacinia.',
      url_release: 'https://reddit.com/en-ca?client=g',
      first_build: '08/20/2023',
      story_points: 369,
      completion: 72.58,
    },
    {
      name: 'Morbi Tristique Inc.',
      id: '58CC9ED3-487F-DB1A-29BD-9ACEB6271E66',
      target: 'Samara Oblast',
      url_target: 'http://twitter.com/site?q=0',
      release: 'Aenean',
      url_release: 'http://guardian.co.uk/group/9?ad=115',
      first_build: '09/13/2022',
      story_points: 207,
      completion: 95.54,
    },
    {
      name: 'Erat Industries',
      id: 'A5C1ACD3-1617-A635-F8B1-0187852FF96A',
      target: 'Manisa',
      url_target: 'https://facebook.com/en-ca?search=1',
      release: 'eget',
      url_release: 'https://netflix.com/sub?page=1&offset=1',
      first_build: '09/21/2022',
      story_points: 461,
      completion: 0.59,
    },
    {
      name: 'Dolor Sit Corp.',
      id: '3B68A071-088E-99CB-38BA-541A2B3EA74F',
      target: 'Salzburg',
      url_target: 'https://naver.com/site?k=0',
      release: 'quam,',
      url_release: 'https://netflix.com/sub?search=1&q=de',
      first_build: '10/12/2022',
      story_points: 176,
      completion: 55.9,
    },
    {
      name: 'Dictum Associates',
      id: '80A8A76B-8185-A623-38CA-DDD82B98AD3B',
      target: 'Risaralda',
      url_target: 'https://cnn.com/site?ab=441&aad=2',
      release: 'elit.',
      url_release: 'https://facebook.com/fr?q=0',
      first_build: '10/08/2023',
      story_points: 60,
      completion: 92.43,
    },
    {
      name: 'Velit Dui Semper Corp.',
      id: '6E328848-FCB6-CFC2-4C5E-304A861794B6',
      target: 'Indiana',
      url_target: 'https://wikipedia.org/settings?q=0',
      release: 'Ut',
      url_release: 'http://ebay.com/site?k=0',
      first_build: '07/15/2022',
      story_points: 471,
      completion: 51.37,
    },
    {
      name: 'Erat Vitae Risus Foundation',
      id: 'F41E181A-5943-6ACC-D71B-F71CB44E2718',
      target: 'Dōngběi',
      url_target: 'http://twitter.com/one?ad=115',
      release: 'Integer',
      url_release: 'http://google.com/en-ca?q=test',
      first_build: '07/27/2023',
      story_points: 479,
      completion: 21.99,
    },
    {
      name: 'Sed Nulla Associates',
      id: 'A32C4176-474C-15E6-BC62-427EBBD3514D',
      target: 'Hessen',
      url_target: 'http://google.com/site?q=4',
      release: 'urna',
      url_release: 'https://ebay.com/fr?str=se',
      first_build: '07/11/2023',
      story_points: 410,
      completion: 26.42,
    },
    {
      name: 'Nam Ligula Foundation',
      id: 'A45C6876-A840-EC9C-DF6D-3DA586538D42',
      target: 'Kogi',
      url_target: 'https://ebay.com/sub?k=0',
      release: 'odio',
      url_release: 'https://zoom.us/sub/cars?search=1&q=de',
      first_build: '03/18/2022',
      story_points: 399,
      completion: 55.63,
    },
    {
      name: 'Elit Pellentesque LLP',
      id: 'B9817C87-1D44-3E34-B066-34B4EE72265F',
      target: 'Central Sulawesi',
      url_target: 'https://naver.com/sub/cars?ab=441&aad=2',
      release: 'semper',
      url_release: 'http://yahoo.com/one?ab=441&aad=2',
      first_build: '10/23/2022',
      story_points: 105,
      completion: 94.24,
    },
    {
      name: 'Orci LLC',
      id: '7F516BB5-3A9B-2C6D-79C4-E161E2A61E82',
      target: 'Riau Islands',
      url_target: 'https://netflix.com/user/110?q=0',
      release: 'nostra,',
      url_release: 'https://zoom.us/en-us?ad=115',
      first_build: '10/27/2022',
      story_points: 298,
      completion: 31.64,
    },
    {
      name: 'Inceptos Hymenaeos Limited',
      id: '74C7911A-40CB-1BA2-E4DA-EB8F8EA16551',
      target: 'Riau',
      url_target: 'http://reddit.com/en-ca?q=4',
      release: 'nisl.',
      url_release: 'http://yahoo.com/one?g=1',
      first_build: '07/21/2022',
      story_points: 286,
      completion: 22.96,
    },
  ];
  //methods
  toggleWrap() {
    this.isWrapped = !this.isWrapped;
  }
  ngOnInit(): void {
    this.filter = '';
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
