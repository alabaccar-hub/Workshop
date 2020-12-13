import { Component, OnInit } from '@angular/core';
import {Vol} from '../../Model/Vol';

@Component({
  selector: 'app-view-vol',
  templateUrl: './view-vol.component.html',
  styleUrls: ['./view-vol.component.css']
})
export class ViewVolComponent implements OnInit {
  title = 'workshop';
  vols : Vol[] = [];
  i : number;
  constructor() {  }

  ngOnInit(): void {
    this.vols.push(new Vol(1,new Date("2019-01-16"),'djerba','tunis',50));
    this.vols.push(new Vol(2,new Date("2019-01-18"),'tunis','paris',45));
    this.vols.push(new Vol(3,new Date("2019-01-03"),'monastir','lyon',20));
    this.vols.push(new Vol(4,new Date("2019-01-12"),'sousse','monastir',33));
    this.vols.push(new Vol(5,new Date("2021-01-01"),'djerba','nfidha',120));
  }

  delete(id){
    console.log(id);
    if (id<5) {
      for (this.i = id - 1; this.i <= 4; this.i++) {
        this.vols[this.i] = this.vols[this.i + 1];
      }
    }
    else {
      this.vols=this.vols.slice(4);
    }
  }

}
