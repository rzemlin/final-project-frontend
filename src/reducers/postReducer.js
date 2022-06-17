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

function postReducer(state=initialState, action){
    switch(action.type) {
        case 'GET_POST':
            return {...state, user: action.payload}
        case 'GET_POSTS':
            return {...state, user: action.payload}
        case 'ADD_POST':
            return {...state, setPost: initialPost, posts: [ action.payload, ...state.posts] }
        case 'DELETE_POST':
            return {...state, setPost: initialPost} 
       
        default: return {...state}
    }
}

export default postReducer