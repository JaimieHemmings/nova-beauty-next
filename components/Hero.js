

const Hero = ({title, p1, p2, p3}) => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h2>{title}</h2>
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                </div>
            </section>
        </>
    )
}

export default Hero