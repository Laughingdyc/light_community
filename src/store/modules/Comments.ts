const comments = {
  state: {
    comments___show_sub_pop: false, // 是否展示子评论弹窗
    comments___main_content: {
      id           : 0,
      avatar       : 'http://175.27.165.106/static/2.png',
      author       : '飞翔的豆腐',
      title        : '这是标题',
      content      : '这是内容，这是内容，这是内容，这是内容，这是内容，这是内容。',
      post_time    : '04-28 00:35:20',
      is_like      : true,
      like_count   : 122,
      is_dislike   : false,
      dislike_count: 25,
      views        : 998,
      comments: [
        {
          id           : 1,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 12,
          isDis_like   : false,
          dislike_count: 0,
          children: [{
            id: 1,
            avatar: 'http://175.27.165.106/static/1.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐3',
            reply_to: '',
            content: '这是第一条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 9999,
            is_dislike   : false,
            dislike_count: 0,
          },{
            id: 2,
            avatar: 'http://175.27.165.106/static/3.png',
            comment_type: 2, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐4',
            reply_to: '飞翔的豆腐3',
            content: '这是第二条评论',
            post_time    : '04-28 00:35:20',
            is_like      : true,
            like_count   : 22,
            is_dislike   : false,
            dislike_count: 0,
          },{
            id: 3,
            avatar: 'http://175.27.165.106/static/4.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐5',
            reply_to: '',
            content: '这是第三条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 33,
            is_dislike   : false,
            dislike_count: 0,
          },{
            id: 4,
            avatar: 'http://175.27.165.106/static/4.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐5',
            reply_to: '',
            content: '这是第4条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 33,
            is_dislike   : false,
            dislike_count: 0,
          },{
            id: 5,
            avatar: 'http://175.27.165.106/static/4.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐5',
            reply_to: '',
            content: '这是第5条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 33,
            is_dislike   : false,
            dislike_count: 0,
          },{
            id: 6,
            avatar: 'http://175.27.165.106/static/4.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐5',
            reply_to: '',
            content: '这是第6条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 33,
            is_dislike   : false,
            dislike_count: 0,
          },]
        },
        {
          id           : 2,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论2',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 1,
          isDis_like   : false,
          dislike_count: 0,
          children: [{
            id: 1,
            avatar: 'http://175.27.165.106/static/1.png',
            comment_type: 1, // 1 - 回复层主, 2 - 回复楼中楼
            author: '飞翔的豆腐3',
            reply_to: '飞翔的豆腐2',
            content: '这是第一条评论',
            post_time    : '04-28 00:35:20',
            is_like      : false,
            like_count   : 9999,
            is_dislike   : false,
            dislike_count: 0,
          }]
        },
        {
          id           : 3,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论3',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 3,
          isDis_like   : false,
          dislike_count: 0,
          children: []
        },
        {
          id           : 4,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论4',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 3,
          isDis_like   : false,
          dislike_count: 0,
          children: []
        },
        {
          id           : 5,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论5',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 3,
          isDis_like   : false,
          dislike_count: 0,
          children: []
        },
        {
          id           : 6,
          avatar       : 'http://175.27.165.106/static/logo.jpg',
          author       : '飞翔的豆腐2',
          content      : '这是评论6',
          post_time    : '04-28 00:35:20',
          is_like      : false,
          like_count   : 3,
          isDis_like   : false,
          dislike_count: 0,
          children: []
        }
      ],
    },
    comments___pop_comment: {},
    comments___reply_attr: {
      reply_content    : '',
      reply_to_who     : 'someone',   // 默认是楼主
      reply_to_which_id: '1',         // 默认是楼主id
      reply_focus      : false,
      input_visible    : false,
    },
  },
  /**
   * 不建议直接调用 mutations!, 请用 actions 来完成赋值逻辑
   */
  mutations: {
    SET_COMMENTS___SHOW_SUB_POP: (state, value) => {
      state.comments___show_sub_pop = value
    },
    SET_COMMENTS___MAIN_CONTENT: (state, value) => {
      for ( let key in value ) {
        state.comments___main_content[key] = value[key]
      }
    },
    SET_COMMENTS___POP_COMMENT: (state, value) => {
      state.comments___pop_comment = value
    },
    SET_COMMENTS___COMMENT: (state, value) => {
      let _index = -1
      for ( let comment_index in state.comments___main_content.comments ) {
        state.comments___main_content.comments[comment_index]['id'] === value._id &&
          (_index = Number(comment_index))
      }
      delete value._id
      for ( let key in value ) {
          (state.comments___main_content.comments[_index][key] = value[key])
      }
    },
    SET_COMMENTS___COMMENT_CHILD: (state, value) => {
      let _index = -1
      let _sub_index = -1
      for ( let comment_index in state.comments___main_content.comments ) {
        state.comments___main_content.comments[comment_index]['id'] === value._id &&
          (_index = Number(comment_index))
      }
      for ( let sub_comment_index in state.comments___main_content.comments[_index]['children'] ) {
        state.comments___main_content.comments[_index]['children'][sub_comment_index]['id'] === value._sub_id &&
          (_sub_index = Number(sub_comment_index))
      }
      delete value._id
      delete value._sub_id
      for ( let key in value ) {
        state.comments___main_content.comments[_index]['children'][_sub_index][key] = value[key]
        state.comments___pop_comment['children'][key] = value[key]
      }
    },
    SET_COMMENTS___INPUT_ATTR: (state, value) => {
      for ( let key in value ) {
        state.comments___reply_attr[key] = value[key]
      }
    },
  },
  actions: {
    set_comments___show_sub_pop: ({ commit }, value: boolean) => {
      return commit('SET_COMMENTS___SHOW_SUB_POP', value)
    },
    set_comments___main_content: ({ commit }, value) => {
      return commit('SET_COMMENTS___MAIN_CONTENT', value)
    },
    set_comments___pop_comment: ({ commit }, value) => {
      return commit('SET_COMMENTS___POP_COMMENT', value)
    },
    set_comments___comment: ({ commit }, value) => {
      return commit('SET_COMMENTS___COMMENT', value)
    },
    set_comments___comment_child: ({ commit }, value) => {
      return commit('SET_COMMENTS___COMMENT_CHILD', value)
    },
    set_comments___reply_attr: ({ commit }, value) => {
      return commit('SET_COMMENTS___INPUT_ATTR', value)
    },
  },
  getters: {
    comments___show_sub_pop: state => state.comments___show_sub_pop,
    comments___pop_comment: state => state.comments___pop_comment,
    comments___main_content: state => state.comments___main_content,
    comments___reply_attr: state => state.comments___reply_attr,
  }

}



export default comments
