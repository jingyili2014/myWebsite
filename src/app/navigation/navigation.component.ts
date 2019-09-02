import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  tabName: string = 'Home';
  navigation: {};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.navigation = this.getNavigation();
  }

  getNavigation() {
    return this.configService.getConfig().navigation;
  }

  getActive(tabName: string) {
    this.tabName = tabName;
    console.log(this.tabName)
  }

}
