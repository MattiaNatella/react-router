import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import axios from 'axios'


const PostDetail = () => {

    const baseApi = 'http://localhost:3000'
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null)

    const handlerDeletePost = (id) => {

        axios.delete(`${baseApi}/posts/${id}`)
            .then(res => {
                fetchPosts()
            })
    }

    const fetchPost = () => {
        axios.get(`${baseApi}/posts/${id}`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(error => {
                console.error('Errore durante il caricamento delle pizze:', error)
            })
    }

    useEffect(() => {

        fetchPost()

    }, [])

    return (
        <div className='d-flex justify-content-center'>
            {post ? (<PostCard post={post} onDelete={handlerDeletePost} />) : (<h2>Post in caricamento</h2>)}
        </div>
    )
}

export default PostDetail