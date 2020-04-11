export class RegisterModel {
    fname: string ;
    lname: string ;
    email: string ;
    username: string ;
    gender:string;
    password:string;
  }
  export class LoginModel {
    email: string ;
    password:string;
  }
  export class Auth_Model {
    token: string ;
  }
  export class Create_comment {
    post_id: string ;
    comment: string ;
  }
  export class Post_like {
    post: string ;
  }
  export class Comment_l_d {
    comment: string ;
  }
  export class Delete_post {
    post: string ;
  }
  export class Search_all {
    search: string ;
    }
    export class Single_post {
      post_id: string ;
      }
    export class Profile_picture {
      file_name: string ;
      file_ext: string ;
      file_type: string ;
      data: string ;
   
    }
    export class Message {
      id: string;
      body: string;
  }
  export class MessageObject {
    type:string;
    message:string;
  }
  export class Room_number {
    room_id:string;
  }
  export class Document {
    jwt_token: string;
  }