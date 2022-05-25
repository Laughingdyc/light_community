export interface iListData {
  id      : number,
  type    : number,
  tagName?: string,
  avatar  : string,
  name    : string,
  time    : string,
  content : string,
  views   : number,
  comments: number,
  imgs    : string[]
}

export interface iState {
  listData_recommend: iListData[],
  listData_idle: iListData[],
  listData_academic: iListData[],
  listData_make_frds: iListData[],
}

export interface iMessage {
  id: number;
  type: number;
  avatar: string;
  name: string;
  time: string;
  comment: string;
  isRead: boolean;
}

export interface iPost {
  id           : number;
  avatar       : string;
  author       : string;
  title        : string;
  content      : string;
  post_time    : string;
  is_like      : Boolean;
  like_count   : number;
  is_dislike   : Boolean;
  dislike_count: number;
  views        : number;
  comments     : any;
}
