import { Component, OnInit } from '@angular/core';

import { SPService } from './sp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  constructor(private spService: SPService) {}

  ngOnInit() {
    this.spService.getWebTitle().subscribe(web => (this.title = web.Title));
  }
}
