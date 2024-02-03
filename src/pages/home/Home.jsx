import React from 'react';
import logo from '../../assests/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
// import { white } from '@mui/material/colors';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col bg-[url('/src/assests/images/background.png')] h-screen bg-opacity-10 justify-center items-center gap-24">
            <header className="flex flex-col justify-items-center items-center gap-2">
                <img src={logo} alt="" srcset="" className="w-1/4"/>
                <h1 className="font-clash font-semibold text-5xl">Poké <span className="text-color-base">book</span></h1>
                <p className="font-general font-normal text-lg text-center">
                    Largest Pokémon index with information <br/>about every Pokemon you can think of.
                </p>
            </header>
            <main className="flex flex-col w-2/5 justify-items-center items-center gap-2">
                <div className="flex bg-white w-full h-20 rounded-full border-8 border-color-base justify-between items-center">
                    <input type="text" placeholder="Enter pokemon name" className="font-general h-full rounded-full outline-none pl-8 pr-4 font-general font-normal text-lg" />
                    <div className="h-12 w-12 bg-color-base rounded-full mr-2 grid justify-items-center items-center shadow-[0px_4px_0px_rgba(0, 0, 0, 0.05)]">
                        <SearchIcon style={{color: "white"}} className="fill-white h-8 w-8" />
                    </div>
                </div>
                <Link to="/view"  className="font-general font-medium text-lg underline">View all</Link>
            </main>
        </div>
    );
}

export default Home;
