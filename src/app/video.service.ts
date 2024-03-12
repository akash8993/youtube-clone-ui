import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private HttpClient: HttpClient) { }
  private URL= "http://localhost:8080"

  uploadVideo(file: File): Observable<any>  
  {
          const formData = new FormData()
          //Yahan pe file hai apna request param backend pe
          formData.append('file', file, file.name)

    return this.HttpClient.post(this.URL+"/upload-video",formData);
  }
}
