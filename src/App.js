import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import MovieList from "./Components/MovieList/MovieList";
import NavBar from "./Components/NavBar/NavBar";
import AddMovie from "./Components/AddMovie/AddMovie";
import React, {useState} from 'react'

function App() {
  let movies = [
    {
      id:Math.random(),
      title: " CRUELLA",
      description: " Estella est résolue à se faire un nom dans le milieu de la mode. Elle se lie d'amitié avec deux jeunes vauriens qui apprécient ses compétences d'arnaqueuse et mène avec eux une existence criminelle ",
      posterURL: "https://media.senscritique.com/media/000019863906/source_big/Cruella.jpg",
      rating: 5
    },

    {
      id:Math.random(),
      title: " BRIDGERTON",
      description: " La saison raconte l'histoire de demoiselle de l'aristocratie londonienne qui, au début du XIXe siècle, fait son entrée dans le monde. La saison est ouverte afin de présenter les jeunes filles à marier aux hommes. ",
      posterURL: "https://fr.web.img2.acsta.net/pictures/20/11/02/17/06/0435875.jpg",
      rating: 5
    },

    {
      id:Math.random(),
      title: " MARY POPPINS RETURNS" , 
      description: " Michael vit avec ses trois enfants et leur gouvernante Ellen. Comme sa mère avant elle, Jane Banks se bat pour les droits des ouvriers. Lorsque la famille subit une perte tragique, Mary Poppins réapparaît magiquement. ",
      posterURL: "https://th.bing.com/th/id/OIP.4tQ8zny01gX9sXjQ-23WAQHaLH?pid=ImgDet&rs=1",
      rating: 2
    },
    {
      id:Math.random(),
      title: " FROZEN",  
      description: "Elsa et Anna sont les deux princesses du royaume d'Arendelle. Elsa, l'aînée peut contrôler la neige et la glace. Toutefois, son pouvoir n'est connu que de sa famille car Elsa serait immédiatement considérée comme une sorcière. ",
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/poster_frozen-min_07dad4d1.jpeg?region=0%2C0%2C1500%2C2091",
      rating: 4
    },
    {
      id:Math.random(),
      title: " PEAKY BLINDERS",  
      description: "La série narre l'histoire d'une famille de criminels de la communauté des Travellers. Surnommés les « Peaky Blinders », ils ont la mainmise sur Birmingham et ses environs dans l'entre-deux-guerres. ",
      posterURL: "https://fr.web.img2.acsta.net/pictures/18/03/14/14/20/1756999.jpg",
      rating: 4
    },

    {
      id:Math.random(),
      title: " UNDER THE DOME",
      description: " un dôme invisible apparaît et englobe toute la ville. Les habitants de Chester's Mill sont pris au piège, ils ne peuvent plus sortir de la ville, et personne ne peut y entrer. ",
      posterURL: "https://fr.web.img4.acsta.net/pictures/210/098/21009847_20130603124538326.jpg",
      rating: 2
    },

    {
      id:Math.random(),
      title: " RIVERDALE" , 
      description: "Riverdale cache de sombres secrets. Alors qu'une nouvelle année scolaire débute, le jeune Archie Andrews et ses amis voient leur quotidien bouleversé par la mort mystérieuse de Jason Blossom, un de leurs camarades de lycée. ",
      posterURL: "https://fr.web.img6.acsta.net/pictures/18/10/02/11/22/2710220.jpg",
      rating: 4
    },
    {
      id:Math.random(),
      title: " LOCKE AND KEY",  
      description: "  As the Locke children explore the different keys and their unique powers, a mysterious demon awakens and will stop at nothing to steal them. Locke and Key is a coming-of-age mystery about love, loss, and the unshakable bonds that define family. ",
      posterURL: "https://deadentertainment.com/uploads/netflix-locke-and-key-series-premiere-date-details-joe-hill-01-fvb2z903s4.jpg",
      rating: 3
    }
  ];

  const [moviesData, setMoviesData] = useState(movies)
  const [searchInput, setSearchInput] = useState(" ")
  const [rateInput, setRateInput] = useState(0)

  const getSearchInput= (input)=>{
    setSearchInput(input);
}
  const getRateInput= (input)=>{
    setRateInput(input);
  }

  const getNewMovie = (newMovie) => {
    setMoviesData([...moviesData, newMovie]);
  };
  

  return(
    <div className= "App"> 
      <NavBar 
        getSearchInput ={getSearchInput}
        getRateInput ={getRateInput}
        />
        <div className="addMovie">
        <AddMovie getNewMovie = {getNewMovie} />
        </div>
      <MovieList 
        moviesData={movies} 
        searchInput ={searchInput}
        rateInput={rateInput}
      />
    </div>
  );
    
}

export default App;