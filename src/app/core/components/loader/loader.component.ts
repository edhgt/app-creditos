import { Component, OnDestroy } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnDestroy {
  loaderSubscription: Subscription;
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) {
    this.loaderSubscription = this.loaderService.isLoading$.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy(): void {
    this.loaderSubscription.unsubscribe();
  }
}
