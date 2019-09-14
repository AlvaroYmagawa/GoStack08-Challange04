import React, { Component } from 'react'
import PostItem from './PostItem'

import avatar01 from '../../assets/profile.jpg'
import avatar02 from '../../assets/profile02.jpg'
import avatar03 from '../../assets/profile03.jpg'

class PostList extends Component {

  state = {
    posts: [{
      id: 1,
      author: {
        name: 'Álvaro Kenzo Ogasavara Ymagawa',
        avatar: avatar01
      },
      date: '13 Sep 2019',
      content: 'Boa Tarde senhor, gostaria de saber se o senhor é gay?',
      comments: [{
        id: 1,
        author: {
          name: 'Leleo Gay',
          avatar: avatar02
        },
        content: 'Boa tarde @Álvaro Kenzo sou sim! Sou um gayzão'
      },
      {
        id: 2,
        author: {
          name: 'Victão Bate Sete ao dia',
          avatar: avatar03
        },
        content: '@Álvaro Kenzo, ele realmente é um baitolinha muito gay mesmo'
      }]
    },
    {
      id: 1,
      author: {
        name: 'Álvaro Kenzo Ogasavara Ymagawa',
        avatar: avatar01
      },
      date: '13 Sep 2019',
      content: 'Boa Tarde senhor, gostaria de saber se o senhor é gay?',
      comments: [{
        id: 1,
        author: {
          name: 'Leleo Gay',
          avatar: avatar02
        },
        content: 'Boa tarde @Álvaro Kenzo sou sim! Sou um gayzão'
      }]
    }]
  }
  render() {
    return (
      <div className="postList">
        {this.state.posts.map(post =>
          <PostItem key={post.id} {...post} />
        )}
      </div>
    );
  }
}

export default PostList