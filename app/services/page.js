import Hero from '@/components/Hero'
import Nails from '../../assets/images/panels/category_0009_nails.avif'
import Massage from '../../assets/images/panels/category_0002_massage.avif'
import Microdermabrasion from '../../assets/images/panels/category_0001_spray_tan.avif'
import Waxing from '../../assets/images/panels/category_0000_waxing.avif'
import Facials from '../../assets/images/panels/category_0007_facials.avif'
import Lashes from '../../assets/images/panels/category_0008_eyes.avif'
import Hair from '../../assets/images/panels/category_0006_hair.avif'
import Brows from '../../assets/images/panels/category_0003_makeup.avif'
import Testimonials from '@/components/Testimonials'

import ConnectDB from '@/config/database'
import Services from '@/models/Services'

const ServicesPage = async () => {
    await ConnectDB();

    // GET the services list
    const Service = await Services.find({}).lean();

    return (
        <>
            <Hero
                title={"All About You"}
                p1={"We offer a variety of treatments and therapies, Whether you want to recover from last nights antics or prepare for tonights, need to destress or just have some you time"}
                p2={"Whatever you're here for, we can help you feel more relaxed, refreshed and rejuvinated"}            
            />

            <div className="container services-list">
                <div className="row">
                    <div className="col" style={{
                        backgroundImage: `url(${Nails.src})`,
                    }}>
                        <h3>Nails</h3>
                        <p>At our sanctuary of beauty, we offer an array of treatments designed to elevate your manicure experience to new heights. Whether you're in need of infills to maintain your stunning acrylics, a flawless gel polish that lasts, or a classic manicure for a touch of elegance, we have you covered.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Nails" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Massage.src})`,
                    }}>
                        <h3>Massages</h3>
                        <p>Embark on a journey of relaxation and rejuvenation with our exquisite range of massage services tailored to soothe your body, mind, and soul. At our sanctuary of serenity, we offer a blissful escape from the stresses of daily life.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Massages" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Microdermabrasion.src})`,
                    }}>
                        <h3>Microdermabrasion</h3>
                        <p>Revitalize your skin and reveal a radiant complexion with our transformative microdermabrasion services. At our sanctuary of beauty, we offer a range of treatments designed to rejuvenate your skin and restore its natural glow.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Microdermabrasion" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Waxing.src})`,
                    }}>
                        <h3>Waxing</h3>
                        <p>Discover the secret to silky smooth skin with our premium waxing services designed to leave you feeling confident and carefree.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Waxing" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Facials.src})`,
                    }}>
                        <h3>Facials</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero hic aliquam fugit quaerat ex labore a eaque nobis maiores, id exercitationem quae. Dolore deserunt voluptas nemo autem error quibusdam ab.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Facials" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Lashes.src})`,
                    }}>
                        <h3>Lashes</h3>
                        <p>Indulge in the luxury of lush lashes that command attention and leave a lasting impression. With our expert lash services, you'll awaken your inner goddess and step into a world where beauty knows no bounds.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Lashes" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Hair.src})`,
                    }}>
                        <h3>Hair</h3>
                        <p>Transform your tresses and unleash your inner beauty with our exceptional hairdressing services tailored to your unique style and personality. At our oasis of creativity, I offer a comprehensive range of hair treatments designed to elevate your look and leave you feeling confident and fabulous.</p>
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Hair" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                    <div className="col" style={{
                        backgroundImage: `url(${Brows.src})`,
                    }}>
                        <h3>Brows</h3>
                        <p>Frame your face with confidence and redefine your beauty with our range of brow services, meticulously crafted to enhance your natural allure. I offer a bespoke brow experience that leaves you feeling empowered and flawless.</p>
                        
                        <ul>
                            { Service.map((serviceItem) => (
                                serviceItem.type === "Brows" ? (
                                    <li key={serviceItem._id}>
                                        {serviceItem.name}
                                        <span>£{serviceItem.price}</span>
                                    </li>
                                ) : ("")
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    )
}

export default ServicesPage