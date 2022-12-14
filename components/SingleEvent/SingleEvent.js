import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HiOutlineLocationMarker } from "react-icons/hi";
const SingleEvent = ({event}) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={event.thumbnailUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        
        <Typography gutterBottom variant="h6" color="secondary" component="div">
        <HiOutlineLocationMarker/>
         {event.place}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BOOK NOW</Button>
        <Button size="small">MORE INFO</Button>
      </CardActions>
    </Card>
  );
};

export default SingleEvent;
