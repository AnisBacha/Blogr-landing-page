import { useState } from 'react';
import NavMenu from './NavMenu';

const MobileNavBar = ({isLiOpen, setIsLiOpen, windowWidth}) => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <section className='header__top-bar'>
                <img src={require('./images/logo.svg').default} alt='logo' className='header__logo' />
                {openMenu ? (
                    <img 
                        src={require('./images/icon-close.svg').default} 
                        alt='menu-icon' 
                        className='header__menu-icon'
                        onClick={() => setOpenMenu(false)}
                    />  
                ) : (
                    <img 
                        src={require('./images/icon-hamburger.svg').default} 
                        alt='menu-icon' 
                        className='header__menu-icon'
                        onClick={() => setOpenMenu(true)}
                    />
                )}
            </section>
            {openMenu && (
                <NavMenu 
                    isLiOpen={isLiOpen} 
                    setIsLiOpen={setIsLiOpen}
                    windowWidth={windowWidth}
                />
            )}
        </>
    )
}

export default MobileNavBar
