// Importa los componentes necesarios
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import SplineScene from "@/components/spline.jsx"; // Asumiendo que tu componente se llama Spline y está en el directorio components

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        

      <FadeIn className="max-w-7xl mx-auto flex flex-wrap justify-between">
  <div className="w-6/12 flex-grow-0 flex-shrink-0">
    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
      Hi, i'm a UX/ UI Developer
    </h1>
    <p className="mt-6 text-xl text-neutral-600">
      We are a group of developer working at the intersection of design
      and technology. It is a really busy intersection though — a lot of
      our staff have been involved in hit and runs.
    </p>
  </div>
  <div className="w-6/12 flex-grow-0 flex-shrink-0">
    <SplineScene />
  </div>
</FadeIn>


      </Container>

      <Clients />

      <Services />
      
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <ContactSection />
    </main>
  );
}
