

import {
   Typography, 
   AppBar, 
   Card, 
   CardActions, 
   CardContent, 
   CardMedia, 
   CssBaseline, 
   Grid, 
   Toolbar, 
   Container ,
   Button,
   

} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style';


const cards =[1,2,3,4,5,6,,7,8,9,10]


function App() {
  
  const classes = useStyles()
  

  return (
  <>
  <CssBaseline/>
  <AppBar position="relative" >
    <Toolbar>
      <PhotoCamera  className={classes.icon}/>
      <Typography variant="h6">Photo Album</Typography>
    </Toolbar>
  </AppBar>
  <main>
    <div className={classes.container}>
      <Container maxWidth="sm">
           <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Photo Album
           </Typography>
           <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Hello every one i w am just trying to make this sentence as long as possible so that i can watch it
           </Typography>
           <div className={classes.button}>
             <Grid  container spacing={2} justify="center">
                <Grid item >
                     <Button variant="contained" color="primary" >
                        See my photos
                     </Button>
                </Grid>
                <Grid item >
                     <Button variant="outlined" color="primary" >
                        Secondary Action
                     </Button>
                </Grid>
             </Grid>
           </div>
      </Container>
    </div>
    <Container className={classes.cardGrid} maxWidth="md" >
        <Grid container spacing="4">
          {
            cards.map((card) =>(
              <Grid item key={card} xs={12} sm={6} md={4} >
              <Card className={classes.card}>
                <CardMedia 
                className={classes.classMedia} 
                image="https://source.unsplash.com/random" 
                title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    This is media card. You can use this describe the content
                  </Typography> 
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
                </Card>
            </Grid>
            ))
          }
        
        </Grid>
    </Container>
  </main>
  <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        Something here to give a footer a purpose
      </Typography>
  </footer>
  </>
  );
}

export default App;
