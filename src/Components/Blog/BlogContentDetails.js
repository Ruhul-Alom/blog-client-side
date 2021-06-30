import React from 'react'
import img from '../images/mahin.jpg'
import '../Home/Home.css'

const BlogContentDetails = (props) => {
    const blogInfo = props.data;
    const { title,price,description } = blogInfo;
    return (
        <div className="blog-detail">
        <div className="blog-image">
            <img src={img} alt="" />
        </div>
             <div className="blog-text">
                <p>{title}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            </div>
           
        
    )
}

export default BlogContentDetails
