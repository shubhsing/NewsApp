import React  from 'react'

const Newsitem =(props)=> {
        let { title, description, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <span  className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex : '1', left : '90%'}}>
                        {source}
                    </span>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p  className="card-text"><small  className="text-muted">By {(author == null) ? "Unknown" : author} at {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-primary btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
export default Newsitem
