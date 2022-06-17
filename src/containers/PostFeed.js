import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../actions/post';
import PostCard from '../components/PostCard'
import Header from '../components/Header'

function PostFeed({getPosts, posts}) {
    
   useEffect(() => { getPosts() }, [getPosts])
        
    const renderPosts = posts.map((post) => <PostCard key={post.id} image={post.image} caption={post.caption} likes={post.likes} username={post.username} photo={user.image} postId={post.id} comments={post.comments}  />)
        return (
        <div>
           <h4>
              <Header />
                 {renderPosts}
                
             </h4>
        </div> )
      }
   const mapStateToProps = (state) => {
      return {posts: state.posts}
       }
       
export default connect(mapStateToProps, { getPosts} )(PostFeed);