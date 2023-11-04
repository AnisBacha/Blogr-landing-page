import Products from './Products';
import Company from './Company';
import Connect from './Connect';

const NavMenu = ({isLiOpen, setIsLiOpen, windowWidth}) => {
    const rotateIcon = `
        .arrow-true{
            transform: rotate(180deg);
        }
    `
    return (
        <section className='header__navbar'>
            <section className='header__list'>
                <div onClick={() => setIsLiOpen({...isLiOpen, products: !isLiOpen.products})}>
                    <ul>
                        <li>Product</li>
                    </ul>
                    
                    {windowWidth < 1024 ? (
                        <img 
                            src={require('./images/icon-arrow-dark.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.products}`}
                        />
                    ) : (
                        <img 
                            src={require('./images/icon-arrow-light.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.products}`}
                        />
                    )}
                </div>
                {isLiOpen.products && (
                    <>
                        <style>{rotateIcon}</style>
                        <Products />
                    </>
                    
                )}
                <div onClick={() => setIsLiOpen({...isLiOpen, company: !isLiOpen.company})}>
                    <ul>
                        <li>Company</li>
                    </ul>
                    {windowWidth < 1024 ? (
                        <img 
                            src={require('./images/icon-arrow-dark.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.company}`}
                        />
                    ) : (
                        <img 
                            src={require('./images/icon-arrow-light.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.company}`}
                        />
                    )}
                </div>
                {isLiOpen.company && (
                    <>
                        <style>{rotateIcon}</style>
                        <Company />
                    </>
                    
                )}
                <div onClick={() => setIsLiOpen({...isLiOpen, connect: !isLiOpen.connect})}>
                    <ul>
                        <li>Connect</li>
                    </ul>
                    {windowWidth < 1024 ? (
                        <img 
                            src={require('./images/icon-arrow-dark.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.connect}`}
                        />
                    ) : (
                        <img 
                            src={require('./images/icon-arrow-light.svg').default} 
                            alt='arrow' 
                            className={`arrow-${isLiOpen.connect}`}
                        />
                    )}
                </div>
                {isLiOpen.connect && (
                    <>
                        <style>{rotateIcon}</style>
                        <Connect />
                    </>
                )}
            </section>
            {windowWidth < 1024 && (
                <hr></hr>
            )}
            
            <button className='login'>Login</button>
            <button className='sign-up'>Sign Up</button>
        </section>
    )
}

export default NavMenu
