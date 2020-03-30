import { Component, OnInit } from '@angular/core';
import { posting_service } from '../../services/services_post';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import Notiflix from "notiflix-angular";
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
  cmd_ob={};
  like_liked: boolean = false;
  constructor(private posting_service_: posting_service,private domSanitizer: DomSanitizer) {
    this.subscription = this.posting_service_.getMessage().subscribe(posted_item => {
      this.posted_item = posted_item;
      this.items.splice(0, 0, posted_item);
        let cmd_l=this.posted_item['comments'].length;
        if(cmd_l>0)
        {
          this.def_hide.splice(0, 0, [true]);
        }else{
          this.def_hide.splice(0, 0, [true]);
        }
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


    Notiflix.Notify.Init({
      width:'300px',
      timeout: 2000,
      position:'right-bottom',
      cssAnimationStyle: 'from-bottom',
      distance:'15px',
      opacity: 0.75,
    });

    return new Promise((resolve) => {
      this.posting_service_.get_public_posts().then((res) => {
        this.items=[];
        console.log(res['posts'],"res['posts']");
        this.items =res['posts'];
        let n_ps=res['posts'].length;
        for(let i=0;i<n_ps;i++)
        {
          let cmd_l=res['posts'][i]['comments'].length;
          if(cmd_l>0)
          {
            this.def_hide.push(true);
          }else{
            this.def_hide.push(true);
          }
          this.cmd_ob[i]=[];
    
      }

        

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
  like_comment(item,index,c_index)
  {
    let like_data={'comment':item};
    this.posting_service_.like_comment(like_data).subscribe((res) => {
     if(res['code']==200) {
       console.log(item,index,c_index,"comment",this.items);
       if(this.items[index]['comments'][c_index].liked)
       {
        if(this.items[index]['comments'][c_index].dislike)
        {
         this.items[index]['comments'][c_index].dislikes-=1;
         this.items[index]['comments'][c_index].dislike=true;
        }
        this.items[index]['comments'][c_index].likes-=1;
        this.items[index]['comments'][c_index].liked=false;
       }
       else
       {
        if(this.items[index]['comments'][c_index].dislike)
        {
         this.items[index]['comments'][c_index].dislikes-=1;
         this.items[index]['comments'][c_index].dislike=false;
        }
        this.items[index]['comments'][c_index].likes+=1;
        this.items[index]['comments'][c_index].liked=true;
       }


          }

        });

  }


  delete_post(item,index)
  {
    let like_data={'post':item};
    this.posting_service_.delete_post(like_data).subscribe((res) => {
     if(res['code']==200) {
             // console.log("Delelted successfullt please refresh ");
             Notiflix.Notify.Success('Deleted Your Post');
              this.items.splice(index, 1);
          }

        });
  }
  delete_comment(post,nth_c)
  {
    var del_ob=this.items[post]['comments'];
    this.cmd_ob[post][nth_c]['state']=true;
   // del_ob.splice(nth_c, 1);
   Notiflix.Notify.Success('Deleted Your Comment');
  }
  create_comment(item,comment,post_ite)
  {
    let comment_ob={'post_id':item,'comment':comment};
    this.posting_service_.create_comment(comment_ob).subscribe((res) => {
     if(res['code']==200) {
            //  Notiflix.Notify.Success('Deleted Your Post');
            //   this.items.splice(index, 1);
            this.items[post_ite]['comments'](post_ite, 1);
          }

        });
  }
  dislike_comment(item,index,c_index)
  {
    let dlike_data={'comment':item};
    this.posting_service_.dislike_comment(dlike_data).subscribe((res) => {
     if(res['code']==200) {
       if(this.items[index]['comments'][c_index].dislike)
       {
        if(this.items[index]['comments'][c_index].liked)
        {
          this.items[index]['comments'][c_index].likes+=1;
          this.items[index]['comments'][c_index].liked=true;
        }
        this.items[index]['comments'][c_index].dislikes-=1;
        this.items[index]['comments'][c_index].dislike=false;
       }
       else
       {
        if(this.items[index]['comments'][c_index].liked)
        {
          this.items[index]['comments'][c_index].likes-=1;
          this.items[index]['comments'][c_index].liked=false;
        }
        this.items[index]['comments'][c_index].dislikes+=1;
        this.items[index]['comments'][c_index].dislike=true;
       }


          }

        });
  }
  
  dislike_post(item,like_cnt,index)
  {
    let like_data={'post':item};
    this.posting_service_.dislike_post(like_data).subscribe((res) => {
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
