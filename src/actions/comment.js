//const endpoint = "http://localhost:4000/api/v1"

export const addComment = (comment, post_id) => {
    
   return dispatch => fetch(`http://localhost:4000/api/v1/${post_id}/comments`, {
     method: 'POST', 
     headers: {
       'Content-Type': 'application/json',
       'Authorization': localStorage.token
     },
     body: JSON.stringify(comment)
   })
    .then(resp => resp.json())
    .then(comment => { 
      dispatch({type: "ADD_COMMENT", payload: comment})
    })
 }