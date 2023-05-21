import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSource = new Subject<boolean>();
  isLoading$ = this.loaderSource.asObservable();

  showLoader(loader: boolean) {
    this.loaderSource.next(loader);
  }
}
