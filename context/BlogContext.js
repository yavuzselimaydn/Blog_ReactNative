import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;

        /*case 'add_blogPost':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                title: action.payload.title,
                content: action.payload.content
            }]
        */
        case 'edit_blogPost':
            return state.map((blogPost) => {   //map ile guncelleme yaptım
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
                }
            )

        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload); //filter ile silme
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts',{title,content});  
        dispatch({ type: 'add_blogPost', payload: { title, content } });
        if (callback) {
            callback(); //bu sayfa yonlendirmesi yapan fonk calıstımak icin cagırdım
        }
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`,{title,content})
        dispatch({ type: 'edit_blogPost', payload: { id, title, content } }); //reducer fonkuna verileri yolluyor
        if (callback) {
            callback();
        }
    }
}


const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogPost', payload: id })
    }
}


const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type:'get_blogposts', payload:response.data});
    }
}

export const { Context, Provider } = createDataContext(   //bu fonksiyonu cagırarak contexti ve provideri olusturdum
        blogReducer, 
        {addBlogPost, deleteBlogPost, editBlogPost ,getBlogPosts}, 
        []
    )

/* ----> useState ile listeyi duzenleme
const [blogPosts, setBlogPosts] = useState([
    {title:'java'},
    {title:'python'}
])
const addBlogPost = () => {                    //listeye eleman ekleyen fonk
    setBlogPosts([...blogPosts, {title:'C#'}])
}
*/



