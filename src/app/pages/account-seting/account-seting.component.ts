import {Component, OnInit} from '@angular/core';
import {SettingService} from "../../services/setting.service";

@Component({
  selector: 'app-account-seting',
  templateUrl: './account-seting.component.html',
  styleUrls: ['./account-seting.component.css']
})
export class AccountSetingComponent implements OnInit {

  public linkTheme = document.getElementById('theme')!;
  public links!: NodeListOf<Element>;
  constructor(private settingService: SettingService) {
  }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingService.changeCurrentCheck(this.links);
  }

  public changeTheme(theme: string): void {
    this.settingService.changeTheme(theme);
    this.settingService.changeCurrentCheck(this.links);
  }

}
