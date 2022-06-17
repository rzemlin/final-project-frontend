const initialPost = {
    image: "", caption: "", id: null
}

const initialUser = {
    username: "", email: "", bio: "", photo: "", id: null
}

const initialState = {
    posts: [],
    comments: [],
    likes: null,
    setPost: initialPost,
    user: initialUser,

}

function commentReducer(state=initialState, action){
    switch(action.type) {
        case 'ADD_COMMENT':
            return {...state, setPost: initialPost, comments: [action.payload, ...state.comments]}
    
        default: return {...state}
    }
}

export default commentReducer