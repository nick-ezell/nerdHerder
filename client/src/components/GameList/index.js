import React, { useContext, useState } from "react";
import image from "./gamesimage.png";
import "./index.css";

import { GameContext } from "../../utils/UserState";
// import Axios from "axios";

const GameList = () => {
  const gameData = useContext(GameContext);
  const [pageState, setPageState] = useState({ currentPage: "#" });

  const [visibility, setVisibility] = useState({ game: "hide", home: "show" });
  // console.log(gameData[5]);
  // const gameInfo = JSON.stringify(gameData);
  // console.log(gameInfo);
  // console.log(apiData);

  // Axios.get(
  //   `https://cors-anywhere.herokuapp.comhttps://www.giantbomb.com/api/images/${"yo"}/?api_key=${
  //     process.env.REACT_APP_API_KEY
  //   }`
  // );

  const handleVisibility = () => {
    if (visibility.game === "show") {
      setVisibility({ game: "hide", home: "show" });
    } else {
      setVisibility({ game: "show", home: "hide" });
    }
    console.log();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleImageClick = (event) => {
    handleVisibility();
    console.log(event.target.name);
    const gameIndex = event.target.name;
    setPageState({
      ...pageState,
      currentPage: gameData.filter((game) => game.name === gameIndex),
    });
    console.log(pageState);
  };

  return (
    <div>
      <div className={visibility.game + " box"}>
        <p className="is-size-2">{pageState.currentPage[0].name}</p>
        <img
          src={pageState.currentPage[0].image}
          alt={pageState.currentPage[0].name}
          width="320"
          height="160"
        />
        <button className="is-primary is-button" onClick={handleVisibility}>
          Home
        </button>
      </div>
      <div className={visibility.home + " gameContainer"}>
        <div className="gameImg">
          <img src={image} alt="games" width="320" height="160" />
        </div>

        <div className="gameListWrapper box">
          {/* <div className="gameOfTheMonth box"></div> */}
          <div className="gameListContainer box">
            {gameData.map((i, index) => (
              // <div className={index}>
              <img
                key={index}
                className="game"
                src={i.image}
                alt="game"
                name={i.name}
                onClick={handleImageClick}
              />
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;

// class GameList extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       gameData: [],
//     };
//   }

//   componentWillMount() {
//     const sum = this.axiosCall();
//     console.log(sum);
//     this.setState({ gameData: sum });
//   }

//   axiosCall = async () => {
//     return axios
//       .get(
//         "https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json"
//       )
//       .then((res) => {
//         const data = res.data.results;
//         return data;
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   sumFunc = () => {
//     this.renderData(this.state.gameData);
//   };

//   renderData = (d) => {
//     console.log(d);
//     return d.map((d) => {
//       return (
//         <div>
//           <div>{d.aliases}</div>
//         </div>
//       );
//     });
//   };

//   render() {
//     return (
//       <div className="gameContainer">
//         <div className="gameImg">
//           <img src={image} alt="games" width="320" height="160" />
//         </div>
//         <div className="gameListWrapper box">
//           <div className="gameOfTheMonth box">
//             <br />
//             <button name="Pokémon" className="is-primary">
//               Button
//             </button>
//           </div>
//           <div className="gameListContainer box">{this.sumFunc}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default GameList;
