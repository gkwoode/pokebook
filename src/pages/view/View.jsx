import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import List from '../../components/list/List';

const View = () => {
    return (
        <div class="bg-[url('/src/assests/images/background.png')] h-screen bg-opacity-10 grid gap-y-16">
            <Navbar />
            <List />
        </div>
    );
}

export default View;
