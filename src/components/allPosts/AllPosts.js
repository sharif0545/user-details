import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const AllPosts = (props) => {
    const {id, title, body} = props;
    const resTitle = title.slice(0, 15);
    const resBody = body.slice(0, 25);
   
    return (
     
        <div style={{width:'15%', margin:'20px 50px',  float:'left', padding:'20px', border:'1px solid gray', borderRadius:'20px'}}>
            <div style={{alignItems:'center', justifyContent: 'center'}}>
              <h1 style={{color:'lightGray'}}>Post Id :  {id} </h1>
                    <p> <strong>Post Title</strong> : {resTitle} </p>
              <p><strong> Post Comments :</strong>  {resBody}</p>
            </div>
            <br/>
          <div style={{alignItems:'center', justifyContent: 'center'}}>
             <Link to={`/PersonDetails/${id}`}><Button variant="contained" color="primary">See More</Button></Link>
          </div>
        
        </div>

    
    );
};

export default AllPosts;
