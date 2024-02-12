import {Component} from '@angular/core';
import {RouterName} from "../../app-routing.module";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected readonly RouterName = RouterName;
}
