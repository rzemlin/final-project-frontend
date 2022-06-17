const endpoint = "http://localhost:4000/api/v1"

export const getUsers = () => {
    return dispatch => fetch(endpoint + "/users")
    .then(resp => resp.json())
    .then(users => dispatch({type: "GET_USERS", payload: users}))
}

export const getUser = (id) => {
    return dispatch => fetch(endpoint + `/users/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.token
        },
        body: JSON.stringify(id),
    })
    .then(resp => resp.json())
    .then(user =>console.log(user))
}

export const submitSignup = (user) => {
    return dispatch => fetch(endpoint + "/signup", {
    method: 'POST',
    headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
  }) 
  .then(resp => resp.json())
  .then(resp => {
      localStorage.token = resp.token
      dispatch({type: "SET_USER", payload: resp.user })
  })

}

function handleUserResponse(res, dispatch) {
    if (res.ok){
        res.json()
        .then(response => {
            localStorage.token = response.token
            dispatch({type: "SET_USER", payload: response.user})
        })
    } else {
        res.json()
        .then(res => alert(res.errors))
    }
}

export const submitLogin = (user) => {
     return dispatch => fetch(endpoint + "/login", { 
     method: 'POST',
     headers: {
         'Content-Type': 'application/json',
     },
     body: JSON.stringify(user),
  }) 
  .then(resp => handleUserResponse(resp, dispatch))
  
}



export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch({type: "LOGOUT"})
    }
}

export const jwtLogin = () => {
    return dispatch => fetch(endpoint + "/hello", {
      headers: {
          'Authorization': localStorage.token
      }  
    })
    .then(resp => handleUserResponse(resp, dispatch))
    
}
