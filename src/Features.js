const Features = () => {
    return (
        <article className="main__features">
            <img src={require('./images/illustration-laptop-mobile.svg').default} alt='laptop' className='laptop-illustration'/>
            <div>
                <section>
                    <h2 className='main__h2'>Free, open, simple </h2>
                    <p className='main__p'>Blogr is a free and open source application backed by a large community of helpful developers, it supports features such as code syntax highliting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </section>
                <section>
                    <h2 className='main__h2'>Powerful tooling</h2>
                    <p className='main__p'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </section>
            </div>
        </article>
    )
}

export default Features
