import { useState, useEffect } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';


const Header = () => {
    const [isLiOpen, setIsLiOpen] = useState({
        products: false,
        company: false,
        connect: false
    })
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className="header">
            {windowWidth < 1024 ? (
                <MobileNavBar isLiOpen={isLiOpen} setIsLiOpen={setIsLiOpen} windowWidth={windowWidth}/>
            ) : (
                <DesktopNavBar isLiOpen={isLiOpen} setIsLiOpen={setIsLiOpen} windowWidth={windowWidth}/>
            )}
            <h1 className='header__h1'>A modern publishing platform</h1>
            <p className='header__p'>Grow your audience and build your online brand</p>
            <section className='header__buttons'>
                <button className='header__btn-start'>Start for Free</button>
                <button className='header__btn-learn'>Learn More</button>
            </section>
        </header>
    )
}

export default Header
