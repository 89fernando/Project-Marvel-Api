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

  const favorite = (item)=>{
    // getting the previous element and adding the new favorite item
    var previousData = JSON.parse(localStorage.getItem('favorites'))
    previousData.push(item)
    localStorage.setItem('favorites',JSON.stringify(previousData))
  }


    return isLoading ? <h1>Loading</h1> :
    <div className="gridCard">
      <Container lg={{ py: 8 }} maxWidth="lg"> 
        {/* End hero unit */}
        <Grid container spacing={4}>
          {items.map(item=>{
            return <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                className='card'
                sx={{ height: '510px', display: 'flex', flexDirection: 'column'}}
              >
                  {(item.thumbnail.path) !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"          
                  ?
                  <CardMedia
                    className='cardMedia'
                    component="img"
                      sx={{
                        // 16:9
                        height: '250px'
                      }}

                    image={item.thumbnail.path + "." + item.thumbnail.extension }
                    alt="random"
                  />
                  : <img src={download} alt={"heroes"} style={{height: '250px'}}/>
                    }
                  <div className="divButton">
                    <button className="button" type="button" onClick={()=>favorite(item)}>Favorite</button>
                  </div>
                  <CardContent sx={{ flexGrow: 1 }} style={{}}>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"center"}}>
                      {item.name}
                    </Typography>
                    <Typography style={{textAlign:"justify", fontSize:"15px", textOverflow:"ellipsis"}}>
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
