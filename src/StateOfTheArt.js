const StateOfTheArt = () => {
    return (
        <article className="main__illustration">
            <img src={require('./images/illustration-phones.svg').default} alt='phones'/>
            <section className='main__state-of-art'>
                <h2>State of the Art Infrastructure</h2>
                <p>With reliablity and speed in mind, worldwide data centers provide teh backbone for ultra-fast connectivity. This ensures your site will load instantly no matter where your readers are, keeping your site competitive.</p>
            </section>
        </article>
    )
}

export default StateOfTheArt
