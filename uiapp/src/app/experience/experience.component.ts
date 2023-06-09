import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  experience: SafeHtml | string = '';

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private elRef: ElementRef,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.experience = this.sanitizer.bypassSecurityTrustHtml(
      this.dataService.getExperience()
    );
  }

  ngAfterViewInit(): void {
    this.routerLinkSet('#contpg');
    //this.routerScrollSet('#mylink');
  }

  routerScrollSet(elementId: string){
    const aEl: HTMLAnchorElement = this.elRef.nativeElement
      .querySelector(elementId);
    aEl.addEventListener('click', (e) => {
      e.preventDefault();
      this.viewportScroller.scrollToAnchor(aEl.href.split('#').slice(-1).toString());
    });
  }

  routerLinkSet(elementId: string) {
    const aEl: HTMLAnchorElement = this.elRef.nativeElement
      .querySelector(elementId);
    aEl.addEventListener('click', (e) => {
      e.preventDefault();
      this.router.navigate(['/' + aEl.href.split('/').slice(-1)], {replaceUrl: true, skipLocationChange: false});
      this.viewportScroller.scrollToPosition([0,0]);
    });
  }

  scrollDown(target: string) {
    console.log('asdfasdf');
    this.viewportScroller.scrollToAnchor(target);
  }
}
