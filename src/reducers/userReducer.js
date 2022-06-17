const initialPost = {
    image: "", 
    caption: "", 
    id: null
}

const initialUser = {
    username: "", 
    email: "", 
    bio: "", 
    image: "", 
    id: null
}

const initialState = {
    posts: [],
    comments: [],
    likes: null,
    setPost: initialPost,
    user: initialUser,
}

function userReducer(state=initialState, action){
    switch(action.type) {
        case 'GET_USERS':
            return {...state, user: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}
    
        default: return {...state}
    }
}

export default userReducer