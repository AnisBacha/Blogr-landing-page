const SiteInfo = () => {
    return (
        <article className="main__info">
                <h2 className='main__h2 main__designed-h2'>Designed for the future</h2>
            <section className='main__wrapper'>
                <img src={require('./images/illustration-editor-mobile.svg').default} alt='editor-illustration' className='editor-illustration'/>
                <div>
                    <section>
                        <h2 className='main__h2'>Introducing an extensible editor</h2>
                        <p className='main__p'>Blogr features on exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown, Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>    
                    </section>
                    <section>
                        <h2 className='main__h2'>Robust content management</h2>
                        <p className='main__p'>Flexible content management enables users to easily more through posts. Increase the usability of your blog by adding customized categories. sections, format, or flow. With this functionality, you're in full control.</p>
                    </section>
                </div>
            </section>
                
        </article>
    )
}

export default SiteInfo
