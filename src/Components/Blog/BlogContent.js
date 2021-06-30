import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom';
import img from '../images/mahin.jpg'

const BlogContent = (props) => {
    const blogInfo = props.data;
    const { _id, title, img,date,description } = blogInfo;
    var des = description.substr(1, 250);
    // console.log(blogInfo);
    return (
        <div className="blog">
            <div className="blog-image">
                {
            blogInfo.image ? <img  src={`data:image/png;base64,${blogInfo.image.img}`}/>
            :
            <img className="img-fluid mb-3" src={`https://fierce-taiga-05314.herokuapp.com/${blogInfo.image.img}`} alt=""/>
        }
            </div>
            <div className="blog-content">
            <div className="blog-content-text">
            <p className="h5">{title}</p>
            <p >Posted On  {date}</p>
            <p >{des}</p>
            <Link to={`/blogDetails/${_id}`}className="btn text-white d-flex justify-content-end" >Read more</Link> 
            
            </div>
            </div>
          
        </div>
    )
}

export default BlogContent
