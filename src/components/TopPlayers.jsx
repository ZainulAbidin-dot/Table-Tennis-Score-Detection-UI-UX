import React from "react";
import "./LatestVideos.css";
import styles from "../styles";
import { players } from "../constants";
const TopPlayers = () => {
  return (
    <section className="bg-primary  ">
      <div className={`${styles.flexCenter} ${styles.padding} flex-col`}>
        <h2
          className={`${styles.flexCenter} ${styles.padding} font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-gradient`}
        >
          Top 10 Scorers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center  ">
        {players.map((player) => (
          <section key={player.id} className="p-[10px]">
            <div className="card">
              <div className="card__content">
                <div className="card__front">
                  <div className="card__title">{player.name}</div>
                  <div className="card__subtitle">{player.nationality}</div>
                </div>

                <div className="card__back ">
                  <img src={player.link} className="h-[70%] absolute flex-1" />
                  <p className="card__body">Ranking: {player.ranking}</p>
                  <p className="card__body">Points: {player.points}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default TopPlayers;

// <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
// <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
//   <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
//     <div className="absolute backface-hidden border-2 w-full h-full">
//       <img src={bill} className="w-full h-full" />
//     </div>

//     <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
//       <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
//         <h1 className="text-3xl font-semibold">The King's Man</h1>
//         <p className="my-2">9.0 Rating</p>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           Facilis itaque assumenda saepe animi maxime libero non quasi,
//           odit natus veritatis enim culpa nam inventore doloribus quidem
//           temporibus amet velit accusamus.
//         </p>
//         <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
//           Watch Now
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
// </section>
