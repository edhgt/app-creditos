import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

//declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  appBrand =  environment.APP_BRAND;
  user: User | null = null;
  sub?: Subscription;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.sub = this.authService.user$
    .subscribe(data => {
      this.user = data;
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
