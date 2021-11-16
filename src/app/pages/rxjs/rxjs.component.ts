import {Component, OnInit,OnDestroy} from '@angular/core';
import {Observable, interval, Subscription} from "rxjs";
import {map, retry, take, filter} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs!: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.intervalSubs = this.returnInterval().subscribe(console.log);

    // this.returnObserver().pipe(
    //  retry(1)
    // ).subscribe(
    //   (valor) => {
    //     console.log('subs ' + valor)
    //   },
    //   (error) => {
    //     console.log('Error ' + error)
    //   },
    //   () => {
    //     console.log('Obs Terminado')
    //   }
    // );
  }

  public returnInterval(): Observable<number> {
    const intervalo = interval(100)
      .pipe(
        // take(10),
        map((valor) => {
          return valor + 1
        }),
        filter(function (valor) {
            return (valor % 2 == 0) ? true : false
          }
        )
      );

    return intervalo;
  }

  public returnObserver(): Observable<number> {
    //manualmente
    let i = 0;
    return new Observable<number>((subscriber) => {
      const interval = setInterval(function () {
        i++;
        subscriber.next(i)
        if (i == 10) {
          clearInterval(interval)
          subscriber.complete();
        }
        if (i == 5) {
          i = 0;
          subscriber.error('i llego al valor de 2')
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
