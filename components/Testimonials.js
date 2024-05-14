'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {

    const responsive = {
        all: {
          breakpoint: { max: 4000, min: 769 },
          items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    }

    return (
        <section className="testimonials">
            <div className="container">
                <div className="row">
                    <h2>Testimonials</h2>
                    <p>Don't take my word for it, thousands of people already trust me!</p>
                </div>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                transitionDuration={500}
                itemClass="carousel-item-testimonials"
                removeArrowOnDeviceType={["all", "mobile"]}
            >
                
                <div>
                    <h3>Jo</h3>
                    <p>The quality of the service was amazing</p>
                </div>
                <div>
                    <h3>Jaimie</h3>
                    <p>Brilliant service, great attention to detail and made me feel really comfortable the whole time</p>
                </div>
                <div>
                    <h3>Maxine</h3>
                    <p>I look forward to having my nails done every month because of you!</p>
                </div>
                <div>
                    <h3>Jodie</h3>
                    <p>I loved the whole experience and came away feeling amazing</p>
                </div>
                <div>
                    <h3>Danni</h3>
                    <p>I keep on coming back because I just can't find the same quality of service and professionalism anywhere else!</p>
                </div>
                <div>
                    <h3>Dylan</h3>
                    <p>Really friendly service, made me feel so comfortable!</p>
                </div>
            </Carousel>
        </section>
    )
}

export default Testimonials