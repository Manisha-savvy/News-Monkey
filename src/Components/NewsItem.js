import React, { Component } from 'react'
import "./News.css";

export class NewsItem extends Component {
    render() {
        let { title, description, urlImage, newsUrl, author, date } = this.props //destructuring
        return (
            <>
                <div>
                    {/* one bracket for java script and one for object */}
                    <div className="card" style={{ width: "18rem" }}>

                        <img src={urlImage} className="card-img-top" alt="..." />
                        <div class="card-body">
                            {/* <h5 class="card-title">{title}...<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                99+
                                <span class="visually-hidden">unread messages</span>
                            </span></h5> */}
                            <p class="card-text"><b>{description}....</b></p>
                            <p className="text-muted"><small>{author} published on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" class="readmore btn btn-sm btn-secondary"> Read More...</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default NewsItem
