import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  public search() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'rRBAtjJHclDE7jloWbT6nfIum8cUO31cmWjJWjkcRic',
        },
      })
      .pipe(pluck('urls', 'regular'));
  }
}
