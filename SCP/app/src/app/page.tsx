import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <section id="home">
                <Hero />
            </section>
            <section id="solutions">
                <Solutions />
            </section>
            <section id="contacts">
                <Footer />
            </section>
        </>
    );
}
