import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SingleBook = ({book}) => {
    return (
        <Card sx={{ maxWidth: 345 }} sx={{ boxShadow: 0 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={book.thumbnailUrl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {book.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {book.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default SingleBook;