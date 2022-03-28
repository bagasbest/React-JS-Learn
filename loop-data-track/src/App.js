import logo from './logo.svg';
import './App.css';
import data from './data'

function App() {
  return (
    <div className="App">
        <h1>Track List Of Song</h1>

      <div className="container">
          {data.map(trackList => {
          return(
            <div className="users">
              <h1>{trackList.album.name}</h1>
              <img src={trackList.album.images[0].url} alt="pic" width={350}/>
              <h3>Release Date: {trackList.album.release_date}</h3>
              <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href=trackList.album.external_urls.spotify
                    }}
              >See On Sportify</button>
            </div>
            
          )
          })}
      </div>

    </div>
  );
}

export default App;
