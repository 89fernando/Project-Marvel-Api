import React , {useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import api from './components/services/api';
import CharacterTable from './components/CharacterTable';
import marvelLogo from './Images/marvelLogo.png';

const theme = createTheme();

const hash =  "bd0722d5750b6362d5ba0212ca36726b"

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  

  useEffect(()=>{
    const fetch = async()=>{
      if(query==='') {
        api
        .get('/characters')
        .then(response => {
          console.log("response.data", response.data);
          setItems(response.data.data.results)
          console.log("não foi digitado algo")
          setLoading(false)
        })
        .catch(err => console.log(err))
      }else{
        console.log("caiu no foi digitado algo")

        const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
          console.log("result.data.data.results", result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
      }
    }
    fetch()
  },[query])


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar  position="relative" >
        <Toolbar className='navBar'>
          <img src={marvelLogo} alt='aranha' style={{width: "100px"}}/>
          <div style={{position: "relative", width: "100%"}}>
          <Typography ClassName='title' variant="h6" color="inherit" style={{textTransform: "uppercase", textAlign: "center", fontWeight:"900", fontSize:"35px"}}>
            MARVEL WORLD
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    <main className='body'>

      <Search search={(q)=>setQuery(q)}></Search>

      <CharacterTable items={items} isLoading={isLoading} />

    </main>
    {/* Footer */}
    <Box sx={{ bgcolor: 'background.paper'}} className="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Fernando Soares
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Projeto elaborado para desenvolver os conhecimentos em react e consumo de api.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/89fernando/">
        Linkedin do Fernando
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </Box>
    {/* End footer */}
  </ThemeProvider>
  );
}

export default App;
