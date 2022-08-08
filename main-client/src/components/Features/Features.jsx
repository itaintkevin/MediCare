import React from 'react';
import './Features.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import app from './app.avif';
import chat from './chat.png';
import doctor from './doctor.jpg';
import healthy from './healthy.avif';
import history from './history.jpg';

const Features = () => {
    return(
        <div className="Features">
            <Container maxWidth="lg">
                    <Typography variant="h2" align='center'>The only app you need to stay healthy.</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={8} md={8}>
                            <Card sx={{ maxWidth: 645 }} margin="0">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={app}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Stay Connected
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Stay connected with your Doctor from the comfort of your Home.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                        <Card sx={{ maxWidth: 645 }}>
                                <CardMedia
                                    component="img"
                                    height="350"
                                    image={healthy}
                                    alt="stay healthy"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Every Detail Covered
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Get your Prescription, Diet, Health Recommendations all in one Platform.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={4}>
                        <Card sx={{ maxWidth: 645 }}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={history}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Keep Track
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    View your Medical History Any Time.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                        <Card sx={{ maxWidth: 645 }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={chat}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Chat 24/7
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Feel free to Chat with your Doctor anytime.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>
        </div>
    );
};

export default Features;