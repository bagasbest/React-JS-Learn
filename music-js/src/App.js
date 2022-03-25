import './App.css';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Grid from './components/Grid';
import NavBar from './components/NavBar';

import SecurityIcon from '@material-ui/icons/Security'
import { makeStyles } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles()
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <NavBar />
       <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<img src="https://media.istockphoto.com/photos/studio-shot-of-young-african-american-woman-with-headphones-picture-id1295441500?b=1&k=20&m=1295441500&s=170667a&w=0&h=gMwXCO17VYWRGZv3ljh6-v0tNQuUAqUBWun4iTf_e-U=" alt="Girl in a jacket" width="125" height="125"></img>}  title="Just The Way You Are" btnTitle="Select" />
          <Grid icon={<SecurityIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Get Out" btnTitle="Select"/>
          <Grid icon={<img src="https://media.istockphoto.com/photos/studio-shot-of-young-african-american-woman-with-headphones-picture-id1295441500?b=1&k=20&m=1295441500&s=170667a&w=0&h=gMwXCO17VYWRGZv3ljh6-v0tNQuUAqUBWun4iTf_e-U=" alt="Girl in a jacket" width="125" height="125"></img>}  title="You" btnTitle="Select"/>
        </div>
    
      </ThemeProvider>
    </div>
  );
}

export default App;
