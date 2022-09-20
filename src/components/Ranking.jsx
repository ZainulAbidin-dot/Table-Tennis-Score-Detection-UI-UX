import React from "react";
import styles from "../styles";
import { players } from "../constants";

const Ranking = () => {
  return (
    <div className={`bg-primary text-white ${styles.section}`}>
      <div
        className={`bg-gray-gradient flex justify-around ${styles.padding} ${styles.heading4}`}
      >
        <h4>Ranking</h4>
        <h4>Name</h4>
        <h4>Country</h4>
        <h4>Points</h4>
      </div>
      <div
        className={`bg-gray-gradient flex flex-wrap flex-col justify-start gap-2 ${styles.padding} ${styles.paragraph}`}
      >
        {players.map((player) => (
          <section
            key={player.id}
            className=" flex justify-around border-b-[1px] border-indigo-500/10 pt-[2rem] pb-[2rem] w-[100%]"
          >
            <div>{player.ranking}</div>
            <div>{player.name}</div>
            <div>{player.nationality}</div>
            <div>{player.points}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
