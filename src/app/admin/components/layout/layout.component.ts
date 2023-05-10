import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    document.body.classList.add('sidebar-mini', 'layout-fixed');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('sidebar-mini', 'layout-fixed');
  }
}
