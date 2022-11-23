import {Component} from '@angular/core';
import {Link, NgxLinkifyjsService} from 'ngx-linkifyjs-v2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-linkifyjs-v2';

  example1 = `Hi, I'm Anthony Nahas, the developer of ngx-linkifyjs. You can find this project on
              github here: https://github.com/anthonynahas/ngx-linkifyjs and the demo app with this
              link: https://anthonynahas.github.io/ngx-linkifyjs. Please feel free to contact me here @ anthony.na@hotmail.de
              if you have any question or troubles with this package. Thank you <3`;

  example2 = 'Output...';

  foundLinks: Link[] = [];

  testLinkResult: boolean;
  testLinkRequested: boolean;

  constructor(public linkifyService: NgxLinkifyjsService) {
  }

}
