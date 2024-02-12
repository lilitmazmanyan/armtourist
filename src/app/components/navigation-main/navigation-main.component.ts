import {Component} from '@angular/core';
import {RouterName} from "../../app-routing.module";

@Component({
  selector: 'app-navigation-main',
  templateUrl: './navigation-main.component.html',
  styleUrls: ['./navigation-main.component.scss']
})
export class NavigationMainComponent {
  protected readonly RouterName = RouterName;
}
