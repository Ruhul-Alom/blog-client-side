import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="bg-secondary" style={{height:'100vh'}}>
            <h2 className="text-center text-white">Manage Blog </h2>
            <Link to="/home"><h5 className="fas fa-home">Home</h5></Link><br/>
            <Link to="/allBlog"><h5 className="fas fa-border-all">All Blog List</h5></Link><br/>
            <Link to="/addBlog"><h5 className="fas fa-plus-square">Add Blog </h5></Link>
        </div>
    );
};

export default SideBar;