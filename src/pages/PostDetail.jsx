import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PostCard from '../components/PostCard'
import axios from 'axios'


const PostDetail = () => {

    const baseApi = 'http://localhost:3000'
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null)


    const fetchPosts = () => {
        axios.get(`${baseApi}/posts`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)
            })
            .catch(error => {
                console.error('Errore durante il caricamento delle pizze:', error)
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

    const handlerDeletePost = (id) => {

        axios.delete(`${baseApi}/posts/${id}`)
            .then(res => {
                fetchPosts()
            })
        navigate(-1)
    }

    useEffect(() => {

        fetchPost()

    }, [id])

    return (
        <div className='d-flex justify-content-center'>


            {id - 1 > 0 ? (
                <button type="button" className="btn btn-secondary btn-lg p-1 mt-2" onClick={() => navigate(`/dettaglio-post/${id - 1}`)}>Post precedente</button>
            ) : ""}

            {post ? (<PostCard post={post} onDelete={handlerDeletePost} />) : (<h2>Post in caricamento</h2>)}
            <button type="button" className="btn btn-secondary btn-lg p-1 mt-2" onClick={() => navigate(`/dettaglio-post/${id + 1}`)}>Post Successivo</button>

        </div >

    )
}

export default PostDetail