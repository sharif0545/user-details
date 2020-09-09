import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const PersonDetails = (props) => {
    const {key} = useParams();
     
   const [posts, setPosts] = useState({});
    const [images, setImages] = useState({});

    useEffect(() => {
           // posts
           fetch(`https://jsonplaceholder.typicode.com/posts/${key}`)
           .then(res => res.json())
           .then(data => {
               setPosts(data);
               console.log(data);
             })

       // images
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setImages(data.results[0])
        })
        
    }, [key])

// material ui
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
  const classes = useStyles();
    
    return (
    <div style={{margin: '50px 100px'}}>
        <Card className={classes.root}>
           <CardActionArea>
                <CardMedia style={{borderRadius:'50%', width:'40%', padding:'20px', margin:'20px'}}
                        className={classes.media}
                        image={images.picture?.large}
                        title="Person Image"
                        />
                
                <CardContent>
               
                        <Typography gutterBottom variant="h5" component="h2">
                        <strong> Name :</strong> {images.name?.first}
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                           <strong>  Gender :</strong> {images.gender} 
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <strong>  Post ID :</strong>  {posts.id}
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <strong>  Email :</strong>  {images.email} 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <strong>  Post Title :</strong>  {posts.title} 
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                        <strong>  Comments :</strong>  {posts.body} 
                        </Typography>
                
                </CardContent>
           </CardActionArea>
        </Card>
    </div>
    );
};

export default PersonDetails;
