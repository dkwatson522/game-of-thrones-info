import React from 'react';
import ironThrone from '../../image/iron-throne.svg'

const Header = () => {
  return (
    <header className='flex justify-center my-10'>
      <img
        src={ironThrone}
        alt='Iron Throne'
        className='w-20 h-20'
      />
    </header>
  );
}


export default Header;
