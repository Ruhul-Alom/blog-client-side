import React, { useEffect, useState } from 'react';
import BlogContent from './BlogContent';
import img from'../images/blog-cover.png'
import '../Home/Home.css'

const Blog = () => {
    const [blogContent, setBlogContent] = useState([]);


    useEffect(()=>{
        fetch('https://fierce-taiga-05314.herokuapp.com/blogContent')
        .then(res => res.json())
        .then(data => setBlogContent(data))
    }, [])
    return (
        <div>
        <div className="blog-header">
         <img src={img} alt="" />
        </div>
        <div className="blog">
            
        {blogContent.map(data=><BlogContent key={data._id} data={data} ></BlogContent>)}   
        {/* <BlogContent></BlogContent> */}
        </div>
         
        </div>
    )
}


export default Blog
