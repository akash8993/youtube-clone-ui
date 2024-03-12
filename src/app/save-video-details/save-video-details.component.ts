import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { saveVideoDetails } from './saveVideoDetails';

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
constructor()
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
  
  addTag(): void {
    if (this.newTag && this.tags.indexOf(this.newTag) === -1) {
      this.tags.push(this.newTag);
      this.newTag = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index !== -1) {
      this.tags.splice(index, 1);
    }
  }
}
