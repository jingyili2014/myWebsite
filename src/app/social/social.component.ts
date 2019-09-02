import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socialSites: {};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.socialSites = this.getSocialSites();
  }

  getSocialSites() {
    return this.configService.getConfig().socialSites;
  }

}
