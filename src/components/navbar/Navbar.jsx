import React from 'react';
import logo from '../../assests/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12 h-20 bg-white'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" className='h-20 mt-8'/>
                <p className="font-clash font-semibold text-2xl">Poké <span className="text-color-base">book</span></p>
            </div>
            <div className="flex bg-white h-12 w-96 rounded-full border-2 justify-items-center items-center ">
                <SearchIcon style={{color: "#DFDFDF"}} className="fill-white h-8 w-8 ml-4" />
                <input type="text" placeholder="Enter pokemon name" className="font-general h-full rounded-full outline-none pl-2 font-general font-normal text-lg" />
            </div>
            <div className='h-12 w-12 border-gray1 border-2 rounded-full grid justify-items-center items-center'>
                <div className='h-10 w-10 bg-color-base rounded-full'></div>
            </div>
        </div>
    );
}

export default Navbar;
