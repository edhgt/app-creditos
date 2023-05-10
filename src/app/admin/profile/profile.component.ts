import { Component } from '@angular/core';

import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
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
