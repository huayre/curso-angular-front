import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  public  linkTheme = document.getElementById('theme')!;

  constructor() {
  }

  ngOnInit(): void {
    const newTheme = localStorage.getItem('theme') ||  "./assets/template/css/colors/default-dark.css";
    localStorage.setItem('theme', newTheme);
    this.linkTheme.setAttribute('href',newTheme);
  }

}
