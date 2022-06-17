//const endpoint = "http://localhost:4000/api/v1"

export const getPosts = () => {
    return dispatch => fetch("http://localhost:4000/api/v1/posts")
      .then(resp => resp.json())
      .then(posts => dispatch({ type: 'GET_POSTS', payload: posts}))
  }
  

  export const getPost = (id) => {
    return dispatch => fetch(`http://localhost:4000/api/v1/posts/${id}`)
      .then(resp => resp.json())
      .then(post => dispatch({ type: 'GET_POST', payload: post}))
  }

  export const addPost = post => {
     return dispatch => fetch("http://localhost:4000/api/v1/posts", {
       method: "POST",
       headers: {
         'Content-Type': 'application/json',
         'Authorization': localStorage.token
       },
       body: JSON.stringify(post)
     })
     .then(resp => resp.json())
     .then(post => {
       dispatch({type: "ADD_POST", payload: post})
     })
  }

  export const deletePost = (post_id) => {
    return dispatch => fetch(`http://localhost:4000/api/v1/${post_id}`, {
      method: 'DELETE', 
      headers: {
        'Content_Type': 'application/json',
      }, 
    }) 
      .then(() => dispatch({type: "DELETE_POST"}))
  }
