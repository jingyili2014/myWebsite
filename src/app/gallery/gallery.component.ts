import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: {};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.gallery = this.getGallery();
  }

  getGallery() {
    return this.configService.getConfig().gallery;
  }

}
