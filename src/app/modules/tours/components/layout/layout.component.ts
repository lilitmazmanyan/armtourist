import {Component} from '@angular/core';
import {Tour} from "../../tour.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  tours: Tour[] = [{
    imageUrl: 'http://armtourist.fluger.am/news_images/1_122_small.jpg',
    name: "tatev",
    multiday: true
  }];
}
