

const PostCard = (props) => {
    const { id, title, content, image, tags, authorize } = props.post

    const handlerDeletePost = props.onDelete

    return (
        <div className="col-12 col-md-6 col-lg-4 my-2 text-center">
            <div className="card border border-danger-subtle">

                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body">

                    <h5 className="card-title">{title} {authorize ? <span className="badge text-bg-success">Pubblicato</span> : <span className="badge text-bg-warning">Bozza</span>}</h5>

                    {/* CONTENUTO POST */}

                    <p className="card-text text-start border border-3 border-danger rounded p-2">{content}</p>
                    <div className="row justify-content-between align-items-center ms-0">

                        {/* TAGS */}

                        <div className="col-6 position-relative border border-3 border-primary rounded-3 mt-3 pb-5">
                            <h4 className="text-white border rounded bg-primary rounded-pill shadow p-2 mb-1 bg-body-primary rounded position-relative top-4 start-50 translate-middle p-0">Tags</h4>
                            {tags.map((tag, index) => (
                                <span key={index} className="badge bg-primary mt me-1 pe-3">{tag}</span>
                            ))}
                        </div>

                        {/* BOTTONE ELIMINA */}

                        <div className="col-6">
                            <button
                                type="button"
                                className="btn btn-danger text-start"
                                onClick={() => handlerDeletePost(id)}
                            ><i className="fa-solid fa-eraser text-dark pe-2"></i>Elimina post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default PostCard