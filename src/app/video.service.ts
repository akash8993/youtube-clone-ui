import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uploadVideoResponse } from './upload-video/uploadVideoResponse';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private HttpClient: HttpClient) { }
  private URL= "http://localhost:8080"

  uploadVideo(file: File): Observable<uploadVideoResponse>  
  {
          const formData = new FormData()
          //Yahan pe file hai apna request param backend pe
          formData.append('file', file, file.name)

    return this.HttpClient.post<uploadVideoResponse>(this.URL+"/upload-video",formData);
  }


  uploadThumbnail(file: File, videoId: string): Observable<string>  
  {
          const formData = new FormData()

          //Yahan pe file hai apna request param backend pe
          //Ye yahan pe humne file as a name jo postman se dete and then file
          // file is key, file is type, file name
          formData.append('file', file, file.name)
          formData.append('videoId', videoId);

    return this.HttpClient.post(this.URL+"/thumbnail",formData,{
      responseType : 'text'
    });
  }



}
