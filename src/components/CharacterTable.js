import React from 'react';
// import CharacterItem from './CharacterItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import download from '../Images/download.png';

const CharacterTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <div className="gridCard">
      <Container lg={{ py: 8 }} maxWidth="lg"> 
        {/* End hero unit */}
        <Grid container spacing={4}>
          {items.map(item=>{
            return <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                className='card'
                sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
              >
                {(item.thumbnail.path) !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"          
                ?
                <CardMedia
                  component="img"
                    sx={{
                      // 16:9
                      height: '300px'
                    }}

                  image={item.thumbnail.path + "." + item.thumbnail.extension }
                  alt="random"
                />
                : <img src={download} alt={"spider-man"} style={{height: '300px'}}/>
                  }
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                    {item.name}
                  </Typography>
                  <Typography style={{textAlign:"justify"}}>
                    {(item.description.length) > 1 
                      ? item.description
                      : <div style={{textAlign:"center", marginTop: "35px"}}>Não possui descrição.</div>}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          })}
        </Grid>
      </Container>
  </div>
}

export default CharacterTable
