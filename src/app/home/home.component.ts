import { Component, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { timeout } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObservableSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstObservableSubscription = interval( 1000).subscribe( count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObservableSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObservableSubscription.unsubscribe();
  }
}
