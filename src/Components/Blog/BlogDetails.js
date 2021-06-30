
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from '../images/mahin.jpg'
import '../Home/Home.css'
import BlogContentDetails from './BlogContentDetails';

const BlogDetails = () => {
    const [blog, setBlog] = useState({});
    const {_id } = useParams();
    useEffect(()=>{
        fetch(`https://fierce-taiga-05314.herokuapp.com/blogContentInfo/${_id}`)
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])
    console.log(blog);
    const { title,description,img,date } = blog;
    return (
        <div className="blog-details">
            <div className="blog-detail">
        <div className="blog-image">
        {
            blog.image ? <img  src={`data:image/png;base64,${blog.image.img}`}/>
            :
            <img className="img-fluid mb-3" src={`https://fierce-taiga-05314.herokuapp.com/${img}`} alt=""/>
        }
        </div>
             <div className="blog-text">
                <p className="h5">{title}</p>
                <p>Posted Date   {date}</p>
                <p>{description}</p>
            </div>
            </div>
            </div> 
       
    )
}

export default BlogDetails
