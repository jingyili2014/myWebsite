import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: any;

  post: {};

  constructor(
    private route: ActivatedRoute, 
    private configService: ConfigService,
    private location: Location
  ) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);
  }

  getPostById(id: number) {
    return this.configService.getPostById(id);
  }

  getBack() {
    this.location.back();
  }

}
