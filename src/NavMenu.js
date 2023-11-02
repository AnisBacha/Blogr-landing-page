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
            <ul>
                <div onClick={() => setIsLiOpen({...isLiOpen, products: !isLiOpen.products})}>
                    <li>Product</li>
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
                    <li>Company</li>
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
                {isLiOpen.company && (
                    <>
                        <style>{rotateIcon}</style>
                        <Company />
                    </>
                    
                )}
                <div onClick={() => setIsLiOpen({...isLiOpen, connect: !isLiOpen.connect})}>
                    <li>Connect</li>
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
                {isLiOpen.connect && (
                    <>
                        <style>{rotateIcon}</style>
                        <Connect />
                    </>
                )}
            </ul>
            {windowWidth < 1024 && (
                <hr></hr>
            )}
            
            <button className='login'>Login</button>
            <button className='sign-up'>Sign Up</button>
        </section>
    )
}

export default NavMenu
