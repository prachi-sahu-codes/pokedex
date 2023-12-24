import React, { useState } from "react";
import Pill from "../pill/Pill";
import { CgPokemon } from "react-icons/cg";
import { cardColor } from "../../utils/utils";

const PokemonCard = ({ pokemon }) => {
  const bgColor = cardColor(pokemon?.types[0]?.type.name) ?? "#14b8a6";
 
  return (
    <div
      className={`relative sm380:w-80 sm:w-full p-6 rounded-3xl m-auto shadow-md overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between">
        <div className="z-10">
          <h2 className="capitalize text-xl font-semibold text-white pb-4">
            {pokemon?.name}
          </h2>
          <ul className="flex gap-2 flex-col">
            {pokemon?.types.map(({ type, index }) => (
              <li key={index}>
                <Pill text={type?.name} />
              </li>
            ))}
          </ul>
        </div>
        <img
          className="w-32 h-32 object-contain mt-4 z-10"
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ??
            pokemon?.sprites?.other?.home?.front_default ??
            pokemon?.sprites?.front_default
          }
        />
      </div>
      <div className="absolute top-5 right-5 text-3xl -z-0 text-white text-opacity-30">
        #{pokemon?.id.toString().padStart(4, "0")}
      </div>

      <div className="absolute top-16 -right-5 -z-0">
        <CgPokemon className="w-40 h-40 text-white opacity-30" />
      </div>
    </div>
  );
};

export default PokemonCard;
