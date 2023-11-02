import NavMenu from './NavMenu';
const DesktopNavBar = ({isLiOpen, setIsLiOpen, windowWidth}) => {
    return (
        <section className='header__top-bar'>
            <img src={require('./images/logo.svg').default} alt='logo' className='header__logo' />
            <NavMenu windowWidth={windowWidth} isLiOpen={isLiOpen} setIsLiOpen={setIsLiOpen}/>
        </section>
    )
}

export default DesktopNavBar
