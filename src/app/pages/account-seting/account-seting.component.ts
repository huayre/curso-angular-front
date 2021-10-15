import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account-seting',
  templateUrl: './account-seting.component.html',
  styleUrls: ['./account-seting.component.css']
})
export class AccountSetingComponent implements OnInit {

  public linkTheme = document.getElementById('theme')!;
  public links!: NodeListOf<Element>;

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.changeCurrentCheck();
  }

  public changeTheme(theme: string): void {
    const newLink = './assets/template/css/colors/' + theme + '.css';
    this.linkTheme.setAttribute('href', newLink);
    localStorage.setItem('theme', newLink);
    this.changeCurrentCheck();
  }

  public changeCurrentCheck(): void {
    const linkCurrentTheme = this.linkTheme.getAttribute('href');
    this.links.forEach(function (element) {
      element.classList.remove('working');
      const themeTemp = element.getAttribute('data-theme');
      const linkThemeTemp = './assets/template/css/colors/' + themeTemp + '.css';

      if (linkThemeTemp === linkCurrentTheme) {
        element.classList.add('working');
      }
    });
  }

}
