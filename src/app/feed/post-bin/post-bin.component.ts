import { Component, OnInit } from '@angular/core';
import { posting_service } from '../../services/services_post';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-post-bin',
  templateUrl: './post-bin.component.html',
  styleUrls: ['./post-bin.component.css']
})
export class PostBinComponent implements OnInit {
  posted_item: any;
  subscription: Subscription;
items=[];
def_hide=[];
like_liked: boolean = false;
  constructor(private posting_service_: posting_service,private domSanitizer: DomSanitizer) {
    this.subscription = this.posting_service_.getMessage().subscribe(posted_item => {
      this.posted_item = posted_item;
      this.items.splice(0, 0, posted_item);
    });
  }
  toogle_cmd(index)
  {

    if(this.def_hide[index])
    {
      this.def_hide[index]=false;
    }
    else
    {
      this.def_hide[index]=true;
    }
  }
  ngOnInit():Promise<boolean> {
    return new Promise((resolve) => {
      this.posting_service_.get_public_posts().then((res) => {
        this.items=[];
        this.items =res['posts'];
          console.log(res,"posts");
        let n_ps=res['posts'].length;
        for(let i=0;i<n_ps;i++)
        {
          this.def_hide.push(false);
        }
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
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  like_post(item,like_cnt,index)
  {
    let like_data={'post':item};
    this.posting_service_.like_post(like_data).subscribe((res) => {
     if(res['code']==200) {
       if(this.items[index].liked)
       {
        if(this.items[index].dislike)
        {
         this.items[index].dislikes-=1;
         this.items[index].dislike=true;
        }
        this.items[index].likes-=1;
        this.items[index].liked=false;
       }
       else
       {
        if(this.items[index].dislike)
        {
         this.items[index].dislikes-=1;
         this.items[index].dislike=false;
        }
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
        if(this.items[index].liked)
        {
          this.items[index].likes+=1;
          this.items[index].liked=true;
        }
        this.items[index].dislikes-=1;
        this.items[index].dislike=false;
       }
       else
       {
        if(this.items[index].liked)
        {
          this.items[index].likes-=1;
          this.items[index].liked=false;
        }
        this.items[index].dislikes+=1;
        this.items[index].dislike=true;
       }


          }

        });
  }
}
