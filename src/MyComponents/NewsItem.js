import React, { Component } from 'react'


export default class NewsItem extends Component {
    render(props) {
        let { title, content, imageUrl, url, author, date,source } = this.props;
        return (
            <div className="container my-3">
                <div className="card">
                    <img src={imageUrl === null ? `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/ILMT-647x363.jpeg?vQwg.ThOgDg8dHlPb0qG0LHPc0CyoQKr` : imageUrl} className="card-img-top" style={{ height: "20vh" }} alt="News" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
                        {source}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content} <code>Read more</code> ...</p>
                        <small className="text-muted"><b>By:</b> {author === null ? "Unknown" : author}, <b>On:</b> {new Date(date).toGMTString()}</small><br />
                        <a href={url} rel="noreferrer" className="btn btn-sm btn-dark mt-2" target="_blank">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
