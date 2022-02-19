import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }
 @Input() selectedLanguage = '';

  ngOnInit(): void {
  }
}
