import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'devtools-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() progressed: number = 0;
  progress: string = '0%';

  ngOnChanges(): void {
    this.progress = `${this.progressed}%`;
  }
  progressUpdate(): void {
    alert(`The progress is ${this.progressed}`);
  }
}
