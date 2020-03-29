import { Component, OnInit, OnDestroy,} from '@angular/core';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post_area } from 'src/app/service_models/api_service.model';
import { NgForm } from '@angular/forms';
import { posting_service } from 'src/app/services/services_post';
import Notiflix from "notiflix-angular";
@Component({
  selector: 'app-feed-area',
  templateUrl: './feed-area.component.html',
  styleUrls: ['./feed-area.component.css'],
  providers:[Post_area]
})
export class FeedAreaComponent implements OnInit {
 
  public searchControl: FormControl;
  public zoom: number;
  @ViewChild('myPond') myPond: any;
  files: File[] = [];
  topic:string;
  pondOptions = {
    class: 'my-filepond',
    multiple: true,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png'
  }
  public searchElementRef: ElementRef;

  pondFiles = [
  ]
  constructor(
    private ngZone: NgZone,
    public Post_area_lc:Post_area,
    private posting_service_:posting_service , ) {

  }

  ngOnInit() {
    Notiflix.Notify.Init({
      width:'300px',
      timeout: 5000,
      position:'right-bottom',
      cssAnimationStyle: 'from-bottom',
      distance:'15px',
      opacity: 0.75,
    });
this.topic='';
    this.Post_area_lc.topic="";
    //set google maps defaults
    this.zoom = 4;
    this.searchControl = new FormControl();

  }

  onSubmit(form : NgForm)
  {
    form.value["attachments"]=this.pondFiles;
    console.log(form.value,"form.value");
    this.posting_service_.create_post(form.value).subscribe((res) => {
 console.log(res);

 if(res['code']==200)
 {
  this.posting_service_.sendMessage(res['data']);
 }
    Notiflix.Notify.Success('Posted Successfully');
    form.reset();
    let ele=this.myPond;
    this.myPond.getFiles().forEach(function(e,i){
      ele.removeFile(e.id);
});
    this.pondFiles=[];
    });
  }
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }
  pondHandleAddFile(event: any) {
    this.pondFiles.push({"file_name":event['file'].filename,"file_type":event['file'].fileType,"file_ext":event['file'].fileExtension,"data":event['file'].getFileEncodeBase64String()});
    }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
