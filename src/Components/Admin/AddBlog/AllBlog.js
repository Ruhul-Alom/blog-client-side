import React, { useEffect, useState } from 'react';
import SideBar from '../../SideBar/SideBar';
import AllBlogInfoTable from './AllBlogInfoTable';



const AllBlog = () => {

    const [allBlog, setallBlog] = useState([]);

    useEffect(() => {
        fetch('https://fierce-taiga-05314.herokuapp.com/blogContent')
        .then(res => res.json())
        .then(data => setallBlog(data))
        
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Blog Title</th>
                                <th>Posted Date</th>
                                <th>Blog content</th>
                                <th>Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBlog.map(reg => <AllBlogInfoTable reg={reg}></AllBlogInfoTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBlog ;