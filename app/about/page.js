import Swiper from "@/components/Swiper"
import FaceIMG from '../../assets/images/face-line.png'
import Testimonials from "@/components/Testimonials"

const AboutPage = () => {
  return (
    <>
    <Swiper />
    <div>
        <section className="about-us" style={{ backgroundImage: `url(${FaceIMG.src})`}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>VISUAL INTEGRITY,<br />
                        SIMPLE FORMS AND<br />
                        STRIVING FOR<br />
                        HARMONY</h2>
                    </div>
                    <div className="col">
                        <p>I'm Rhiannah! your dedicated guide to holistic rejuvenation and beauty enhancement. With a passion for nurturing wellness and enhancing natural beauty. I bring a unique blend of expertise and care to every session. As a certified massage therapist, I crafts personalized experiences that melt away tension and restore balance, leaving you feeling revitalized from head to toe.</p>

                        <p>But my talents extend beyond the massage table. With precision and skill, I offer a variety of exquisite nail services that elevate your manicure to a work of art. Whether you crave vibrant colors or timeless elegance, my attention to detail ensures stunning results that last. And for those seeking captivating lashes that command attention I deliver lush, flutter-worthy lashes that enhance your allure effortlessly.</p>

                        <p>Join me as your trusted partner on your journey to holistic beauty, you'll discover a sanctuary where relaxation, rejuvenation, and transformation converge. From blissful massages to flawless nail art and captivating lashes, mys dedication to your well-being ensures an experience that transcends the ordinary and leaves you feeling radiant inside and out.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Testimonials />
    </>
  )
}

export default AboutPage
