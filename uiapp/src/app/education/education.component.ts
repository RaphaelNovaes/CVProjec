import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education:
    | (
        | string[][]
        | {
            year: string[][];
          }[]
      )[]
    | any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.education = this.dataService.getEducation();
  }

  getArrayFromUnknowObject(obj: any): string[] {
    return obj.values();
  }
}
