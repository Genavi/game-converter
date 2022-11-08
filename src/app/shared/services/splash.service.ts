import { Injectable } from '@angular/core';
import { Observer, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplashService {
  subject = new Subject();

  subscribe(onNext:any): Subscription {
     return this.subject.subscribe(onNext);
  }

  stop() {
     this.subject.next(false);
  }

}
