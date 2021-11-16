import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  public datas!: unknown;
  constructor() {
  }

  ngOnInit(): void {
    /*const promise = new Promise((resolve, reject) => {
      if (false) {
        resolve('hola mundo');
      } else {
        reject('Algo salio mal')
      }
    });

    promise.then((response) => {
      console.log(response)
    }).catch((response) => {
      console.log(response)
    })

    console.log('fin del init');*/
    this.getUsers().then((valores)=>{
      this.datas = valores;
    });
    console.log(this.datas)
  }

  public getUsers() {
    const promise = new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((jsonData) => resolve(jsonData.data));
    });

    /*fetch('https://reqres.in/api/users')
      .then((response) => {
        response.json().then((body) => {
          console.log(body.data);
        });
      });*/

    return promise;
  }


}
