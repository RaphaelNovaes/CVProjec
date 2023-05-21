import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  typeWriterContent = '';
  cursorOn = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    let intro_content = this.dataService.getIntroduction();
    setTimeout(() => this.typeWriterArray(intro_content.sumary), 2000);
  }

  typeWriterArray(array: Array<string>, str: string = '', strCnt: number = 0, arrCnt: number = 0): void {
    if (!str) {
      str = array[arrCnt];
      arrCnt++;
    }

    if (strCnt < str.length) {
      this.cursorOn = false;
      this.typeWriterContent += str.charAt(strCnt);
      strCnt++;
      setTimeout(() => this.typeWriterArray(array,str,strCnt,arrCnt), 30);
    }else{
      if (arrCnt < array.length) {
        this.typeWriterArray(array,'',0,arrCnt)
      }else{
        this.cursorOn = true;
      }
    }
  }
}
