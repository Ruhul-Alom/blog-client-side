import React from 'react';
import { useHistory } from 'react-router';

const AllBlogInfoTable = (props) => {

    const allblog = props.reg;
   
    const { _id, title, description,date } =allblog;
    var des = description.substr(1, 80);
    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://fierce-taiga-05314.herokuapp.com/deleteBlog/${_id}`, {method:'DELETE'})
        .then(res => res.json())
        .then(data => {
            alert('Deleted successfully');
            history.replace('/');
        })
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{date}</td>
            <td>{des}</td>
            <td><i onClick={handleDelete} className="fas fa-trash-alt"></i></td>
            
        </tr>
    );
};

export default AllBlogInfoTable;