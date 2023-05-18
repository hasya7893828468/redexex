import React, { Component } from 'react'
import {  connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import PropTypes from'prop-types'



 class Posts extends Component {
   
  componentWillMount(){
    this.props.fetchPosts()
  }
  componentWillReceiveProps(nextProps){
   if(nextProps.newPost&& this.props.posts){
    this.props.posts.unshift(nextProps.newPost)
   }
  }
  render() {
    const postItems=this.props.post.map(post=>(
      <div key={post.id}>
        <h3>{post.title}</h3> 
        <p>{post.body}</p>    
      </div>
    ))
    return (
      <div>
        <h1>Post</h1>
        {postItems}
      </div>
    )
  }
}
Posts.propTypes={
  fetchPosts:PropTypes.func.isRequired,
  post:PropTypes.array.isRequired,
  newPost:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
  post:state.post.items,
  newPost:state.post.item
})
export default connect(mapStateToProps, { fetchPosts})(Posts)