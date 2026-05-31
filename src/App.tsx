import { useHead } from "./hooks/useHead";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Testimonials } from "./components/sections/Testimonials";
import { BlogPreview } from "./components/sections/BlogPreview";
import { Contact } from "./components/sections/Contact";

function App() {
  useHead({
    title: "Mofaggol Hoshen – Senior C#/.NET Developer",
    description:
      "Senior C#/.NET Developer with 7+ years building enterprise and cloud-native applications. ASP.NET Core, Azure, microservices, CQRS, and more.",
    canonical: window.location.href,
    ogTitle: "Mofaggol Hoshen – Senior C#/.NET Developer",
    ogDescription: "Senior C#/.NET Developer with 7+ years building enterprise and cloud-native applications.",
    ogUrl: window.location.href,
    twitterCard: "summary_large_image",
  });

  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </Layout>
  );
}

export default App;
