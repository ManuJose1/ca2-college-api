import { useState } from 'react';
import axios from '../config/api';
//import { useNavigate } from 'react-router-dom';

const DeleteBtn = (resource, id, deleteCallback) => {

    //const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState('');

    const onDelete = () => {
        console.log('deleted');
        setIsLoading(true); 
        let token = localStorage.getItem('token');

        axios.delete(`${resource}/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
             .then(response=>{
                console.log(response.data)
                deleteCallback(id);
                //navigate('/')
             })
             .catch(err=>{
                console.log(err.response.data)
             })
    };

    return(
        <button
        onClick={onDelete}>{(isLoading)?"Deleting...":"Delete"}</button>
    );
};

export default DeleteBtn;