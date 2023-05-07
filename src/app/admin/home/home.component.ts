import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showStatistics: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Statistics show');
      this.showStatistics = true;
    }, 1500)
  }

}
