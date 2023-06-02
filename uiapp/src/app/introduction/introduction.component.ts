import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  mainInnerHtml: SafeHtml | string = '';
  tempInnerHtml: SafeHtml | string = '';
  cursorOn = true;
  strCnt: number = 0;

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    let intro_content = this.dataService.getIntroduction();
    setTimeout(async () => {
      for (let i = 0; i < intro_content.sumary.length; i++) {
        const res = await this.typeLetterByLetter(
          intro_content.sumary[i],
          (val: string) => {
            this.setMainInnerHtml(val, true);
          }
        );
      }
      const res = await this.typeLetterByLetter('./prettier', (val: string) => {
        this.setTempInnerHtml(val, true);
      });
      setTimeout(() => {
        this.setTempInnerHtml('', false);
        this.sanitizeHtml(<string>this.mainInnerHtml, (val: SafeHtml) => {
          this.setMainInnerHtml(val, false);
        });
      }, 500);
    }, 2000);
  }

  setMainInnerHtml(html: SafeHtml | string, append: boolean) {
    if (append) this.mainInnerHtml += <string>html;
    else this.mainInnerHtml = html;
  }

  setTempInnerHtml(html: SafeHtml | string, append: boolean) {
    if (append) this.tempInnerHtml += <string>html;
    else this.tempInnerHtml = html;
  }

  sanitizeHtml(dirtyHtml: string, callbackfn: Function): void {
    let sanitezed = this.sanitizer.bypassSecurityTrustHtml(
      dirtyHtml.toString()
    );
    callbackfn(sanitezed);
  }

  async typeLetterByLetter(str: string, callbackfn: Function) {
    const awt = await new Promise((resolve) => {
      if (this.strCnt < str.length) {
        this.cursorOn = false;
        if (this.strCnt === 0 && str.charAt(0) === '<') {
          callbackfn(str);
          this.strCnt = 0;
          resolve([]);
        } else {
          callbackfn(str.charAt(this.strCnt));
          this.strCnt++;
          setTimeout(
            async () => {
              const rec = await this.typeLetterByLetter(str, callbackfn);
              resolve([]);
            },
            30,
            this.typeLetterByLetter,
            { str, callbackfn }
          );
        }
      } else {
        this.strCnt = 0;
        this.cursorOn = true;
        return resolve([]);
      }
    });
  }
}
