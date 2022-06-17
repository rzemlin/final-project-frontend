import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CommentCard from '../components/CommentCard'
import { getPosts } from '../actions/actionCreators'
import PhotoGrid from '../components/PhotoGrid'

function Comments({getPosts, posts }) {

  useEffect(() => { getPosts() }, [getPosts])
   return  <div>
      {posts.map(comment => <PhotoGrid postId={comment.id} comments={comment.comments} key={comment.id}  />)}
    </div>
    
}



const mapStateToProps = (state) => {
  console.log(state)
 return {posts: state.posts}
}

  
  

export default connect(mapStateToProps, {getPosts} )(Comments);