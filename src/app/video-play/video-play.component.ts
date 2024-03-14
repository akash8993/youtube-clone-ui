import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent {
  preload: string = 'auto';
  api: VgApiService | undefined;

  constructor() {}

  onPlayerReady(api: VgApiService) {
      this.api = api;
  }
}
