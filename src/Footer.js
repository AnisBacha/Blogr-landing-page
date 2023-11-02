const Footer = () => {
    return (
        <footer className="footer">
            <img src={require('./images/logo.svg').default} alt='logo' className='footer__logo'/>
            <section className='footer__products'>
                <h2 className='footer__h2'>Product</h2>
                <ul className='footer__list'>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                </ul>
            </section>
            <section className='footer__company'>
                <h2 className='footer__h2'>Company</h2>
                <ul className='footer__list'>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </section>
            <section className='footer__connect'>
                <h2 className='footer__h2'>Connect</h2>
                <ul className='footer__list'>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                </ul>
            </section>
            
        </footer>
    )
}

export default Footer
