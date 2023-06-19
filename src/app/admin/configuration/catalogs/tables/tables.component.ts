import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  title: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.queryParamMap.get('title');
  }
}
