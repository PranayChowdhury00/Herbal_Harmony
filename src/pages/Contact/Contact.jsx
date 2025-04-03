import FirstSection from "../FirstSection/FirstSection";
import Banner from "./Banner/Banner";
import ContactSection from "./ContactSection/ContactSection";
import FAQ from "./FAQ/FAQ";



const Contact = () => {
    return (
        <div>
           <Banner></Banner>
           <ContactSection></ContactSection>
           <FAQ></FAQ>
           <FirstSection></FirstSection>
        </div>
    );
};

export default Contact;