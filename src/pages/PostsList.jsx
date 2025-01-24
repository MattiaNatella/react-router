import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"




const PostsList = () => {

    const baseApi = 'http://localhost:3000'
    const [posts, setPosts] = useState([])

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

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <ul className="list-group ">
            {posts.map(post => (
                <>
                    <li key={post.id} className="list-group-item d-flex justify-content-between">{post.title} <Link to={`/dettaglio-post/${post.id}`} className="btn btn-info">Mostra dettagli</Link></li>

                </>
            ))}
        </ul>
    )
}

export default PostsList