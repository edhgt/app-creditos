import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './core/services/auth.service';
import { TokenService } from './core/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = this.tokenService.getToken();
    if(token) {
      this.authService.getProfile()
      .subscribe(() => {
        if(this.router.url === '/auth/login') {
          this.router.navigate(['/app']);
        }
      });
    }
  };
}