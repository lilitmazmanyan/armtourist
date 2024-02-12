import {Component, Input} from '@angular/core';
import {Tour} from "../../tour.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() tour!: Tour;
}
