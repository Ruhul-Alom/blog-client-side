import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import SideBar from '../../SideBar/SideBar';
// import Navbar from '../../Home/Navbar/Navbar';


const AddBlog = () => {
    const [newBlog, setNewBlog] = useState({});
    const [file,setFile] = useState(null);
// const history = useHistory();
const handleOnBlur = (e) => {
    const newBlogAdd =newBlog;
    newBlogAdd[e.target.name] = e.target.value;
    setNewBlog(newBlogAdd);
}
const handleFileChange= (e) =>{
   const newFile= e.target.files[0];
   setFile(newFile);
}

const handleAddBlog = (e) => {
    // e.preventDefault();
    // fetch('https://fierce-taiga-05314.herokuapp.com/addBlog', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newBlog)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         alert('Blog inserted successfully');
    //         // history.replace('/');
    //     })
    const formData = new FormData()
    formData.append('file', file);
    formData.append('title', newBlog.title);
    formData.append('description', newBlog.description);
  
    fetch('https://fierce-taiga-05314.herokuapp.com/addBlog', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
}
    return (
        <div className="container">
        {/* <Navbar></Navbar> */}
      
         <div className="row">
             <div className="col-md-3">
             <SideBar></SideBar>
             </div>
             <div className="col-md-8">
             <form onSubmit={handleAddBlog }>
                        <input onBlur={handleOnBlur} name="title" className="form-control" type="text" placeholder="Blog Title" required /> <br />
                        <input onBlur={handleOnBlur} name="description" className="form-control" type="text" placeholder="Blog Content" required /> <br />
                        <input onChange={handleFileChange} name="file" className="form-control" type="file" placeholder="image" required /> <br />
                        <button className="form-control" className="btn btn-primary w-100">Add Blog</button>
                    </form>
             </div>
             </div>
         </div>
   
    )
}

export default AddBlog