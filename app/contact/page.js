import Hero from "@/components/Hero"
import ContactForm from "@/components/ContactForm"

const ContactPage = () => {
  return (
    <>
    <Hero
        title={"Contact Us"}
        p1={"If you need some more information or would like to book an appointment with me, please use the form below!"}
        p2={"I can't wait to hear from you!"}
    />
    <ContactForm />
    </>
  )
}

export default ContactPage
