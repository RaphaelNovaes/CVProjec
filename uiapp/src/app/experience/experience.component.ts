import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience = '';

 constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.experience = this.dataService.getExperience();
  }
}
