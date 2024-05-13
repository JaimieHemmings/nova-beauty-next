import Link from 'next/link'
import Image from 'next/image'
import Nails from '../assets/images/panels/category_0009_nails.avif'
import Massage from '../assets/images/panels/category_0002_massage.avif'
import Microdermabrasion from '../assets/images/panels/category_0001_spray_tan.avif'
import Waxing from '../assets/images/panels/category_0000_waxing.avif'
import Facials from '../assets/images/panels/category_0007_facials.avif'
import Lashes from '../assets/images/panels/category_0008_eyes.avif'
import Hair from '../assets/images/panels/category_0006_hair.avif'
import Brows from '../assets/images/panels/category_0003_makeup.avif'

const Panels = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <Link href="/services">
                        <Image src={Nails} alt="" width={400} height={400} />
                        <h2>Nails</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Massage} alt="" width={400} height={400} />
                        <h2>Massage</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Microdermabrasion} alt="" width={400} height={400} />
                        <h2>Microdermabrasion</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Waxing} alt="" width={400} height={400} />
                        <h2>Waxing</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Facials} alt="" width={400} height={400} />
                        <h2>Facials</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Lashes} alt="" width={400} height={400} />
                        <h2>Lashes</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Hair} alt="" width={400} height={400} />
                        <h2>Hair</h2>
                    </Link>
                    <Link href="/services">
                        <Image src={Brows} alt="" width={400} height={400} />
                        <h2>Brows</h2>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Panels