import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        background: "rgba(0, 0, 0, 0.5)",
        margin: "20px",
    },
    media: {
        height: 400,
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#fff",
    },
    desc: {
        fontFamily: 'Nunito',
        fontWeight: "bold",
        color: "#ddd",
    }
});

export default function ImageCard({ place, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? {timeout: 1000 } :{})}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={place.imageUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {place.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                            {place.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Collapse>
    );
}