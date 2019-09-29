import { Component, OnInit } from '@angular/core';
import { posting_service } from '../../services/services_post';
import { forEach } from '@angular/router/src/utils/collection';
declare var $: any;
@Component({
  selector: 'app-post-bin',
  templateUrl: './post-bin.component.html',
  styleUrls: ['./post-bin.component.css']
})
export class PostBinComponent implements OnInit {
items=[];
like_liked: boolean = false;
  constructor(private posting_service_: posting_service) {
  }

  ngOnInit():Promise<boolean> {
    return new Promise((resolve) => {
      this.posting_service_.get_public_posts().then((res) => {
        this.items=[];
        this.items =res['posts'];
        this.items.forEach(function(element)
        {
          var d = new Date(element.updated_on);
          element.updated_on= d.toLocaleString();
        });
        console.log(this.items);
        })
        .catch(err => {
          resolve(false);
        });
      })

  }
  like_post(item,like_cnt,index)
  {
    let like_data={'post':item};
    this.posting_service_.like_post(like_data).subscribe((res) => {
     if(res['code']==200) {
       if(this.items[index].liked)
       {
        this.items[index].likes-=1;
        this.items[index].liked=false;
       }
       else
       {
        this.items[index].likes+=1;
        this.items[index].liked=true;
       }


          }

        });

  }
  dislike_post(item,like_cnt,index)
  {
    let like_data={'post':item};
    this.posting_service_.dislike_post(like_data).subscribe((res) => {
      console.log(res,"res");
     if(res['code']==200) {
       if(this.items[index].dislike)
       {
        this.items[index].dislikes-=1;
        this.items[index].dislike=false;
       }
       else
       {
        this.items[index].dislikes+=1;
        this.items[index].dislike=true;
       }


          }

        });
  }
}
