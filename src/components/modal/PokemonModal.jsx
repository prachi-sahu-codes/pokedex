import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Modal from "@mui/material/Modal";
import { CgPokemon } from "react-icons/cg";
import ProgressBar from "../progressBar/ProgressBar";

const PokemonModal = ({ open, handleClose, pokemonData }) => {
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Pokemon modal"
      aria-describedby="Pokemon Stats"
    >
      <div className="p-3 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[500px] bg-[#e3e3e3] rounded-md">
        <div className="flex justify-between">
          <h2 className="capitalize text-xl font-semibold pb-4">
            {pokemonData?.name} Stats
          </h2>
          <div className="cursor-pointer" onClick={handleClose}>
            <RxCross2 className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </div>
        </div>
        <hr className="mb-5 border-gray-400" />
        <div className="relative flex justify-between items-center gap-10 p-4">
          <img
            className="w-32 h-32 lg:w-40 lg:h-40 object-contain mt-4 z-10 hidden sm:block"
            src={
              pokemonData?.sprites?.other?.dream_world?.front_default ??
              pokemonData?.sprites?.other?.home?.front_default ??
              pokemonData?.sprites?.front_default
            }
          />
          <div className="absolute top-7 left-2 sm:top-10 sm:-left-9 lg:-left-6 -z-0">
            <CgPokemon className="w-60 h-60 text-gray-400 opacity-30" />
          </div>
          <ul className="flex flex-col gap-3 w-full">
            {pokemonData?.stats?.map(({ base_stat, stat }) => (
              <li className="text-gray-700">
                <ProgressBar stat={base_stat} />
                <div className="flex gap-2">
                  <p className="capitalize font-semibold">{stat?.name}:</p>
                  <p>{base_stat}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default PokemonModal;
