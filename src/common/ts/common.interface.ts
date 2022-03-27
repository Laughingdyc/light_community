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