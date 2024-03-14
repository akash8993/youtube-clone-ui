import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { saveVideoDetails } from './saveVideoDetails';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VideoService } from '../video.service';
@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent {



title: string='';
description: string='';
videoStatus: string ='';


tags: string[] = [];
newTag: string = '';

saveVideoDetailsForm: saveVideoDetails ={
  title:'',
  description: '',
  videoStatus: '',
}

selectedFile!: File;
selectedFileName: string ='';
  videoId: any;
//Ye activated route bcoz apan ko url uthana hai usse id lenege
constructor( private activatedRoute: ActivatedRoute, private videoService: VideoService)
{

}
SaveDetails() {
  this.saveVideoDetailsForm.title=this.title;
  this.saveVideoDetailsForm.description= this.description;
  this.saveVideoDetailsForm.videoStatus=this.videoStatus;
  console.log(this.title);
  console.log(this.description);
  console.log(this.videoStatus);
  console.log(this.saveVideoDetailsForm);
  }
  

//Jo apan ko file name lena hai uske lie hai ye
  onFileSelected($event: Event ) {

    //Yahan pe ts ignore isleye jisse error na aae undefined wlaa
    //@ts-ignore
    this.selectedFile= event.target.files[0];
    this.selectedFileName= this.selectedFile.name;
    console.log(this.selectedFileName);
    }

    uploadThumbnail() {
       this.videoId= this.activatedRoute.snapshot.params['videoId'];
      this.videoService.uploadThumbnail(this.selectedFile, this.videoId).subscribe(data=>{
        console.log(data);
        alert("Uploaded");
      })
      }
}
