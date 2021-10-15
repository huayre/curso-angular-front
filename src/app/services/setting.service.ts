import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public linkTheme = document.getElementById('theme')!;

  constructor() {
    const newTheme = localStorage.getItem('theme') || "./assets/template/css/colors/default-dark.css";
    this.linkTheme.setAttribute('href', newTheme);
  }

  public changeTheme(theme: string): void {
    const newLink = './assets/template/css/colors/' + theme + '.css';
    this.linkTheme.setAttribute('href', newLink);
    localStorage.setItem('theme', newLink);
  }

  public changeCurrentCheck(links: NodeListOf<Element>): void {
    const linkCurrentTheme = this.linkTheme.getAttribute('href');
    links.forEach(function (element) {
      element.classList.remove('working');
      const themeTemp = element.getAttribute('data-theme');
      const linkThemeTemp = './assets/template/css/colors/' + themeTemp + '.css';

      if (linkThemeTemp === linkCurrentTheme) {
        element.classList.add('working');
      }
    });
  }

}
