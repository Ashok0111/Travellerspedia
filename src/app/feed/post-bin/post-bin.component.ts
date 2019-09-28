import { Component, OnInit } from '@angular/core';
import { posting_service } from '../../services/services_post';
declare var $: any;
@Component({
  selector: 'app-post-bin',
  templateUrl: './post-bin.component.html',
  styleUrls: ['./post-bin.component.css']
})
export class PostBinComponent implements OnInit {
items=['test'];
  constructor(private posting_service_: posting_service) {
  }

  ngOnInit():Promise<boolean> {
    return new Promise((resolve) => {
      this.posting_service_.get_public_posts().then((res) => {
        this.items=[];
        this.items =res['posts'];
        console.log(this.items);
        })
        .catch(err => {
          resolve(false);
        });
      })

  }

}
