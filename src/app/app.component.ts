import { Component } from '@angular/core';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photoUrl = '';

  constructor(private photoSearch: PhotoService) {}

  displayNewImage() {
    this.photoSearch.search().subscribe((url) => {
      this.photoUrl = url;
    });
  }
}
