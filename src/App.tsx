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

const BASE_URL = "https://mofaggolhoshen.github.io";
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

function App() {
  useHead({
    title: "Mofaggol Hoshen – Full-Stack & .NET Developer | React, React Native, Tailwind",
    description:
      "Full-Stack Developer with 7+ years of experience in C#/.NET, React, React Native, and Tailwind CSS. Building enterprise, cloud-native, and cross-platform mobile applications. Available for freelance & full-time roles.",
    keywords:
      "C#, .NET, ASP.NET Core, Azure, React, React Native, Tailwind CSS, full-stack developer, portfolio, enterprise software, microservices, cloud-native, CQRS, mobile development, cross-platform",
    canonical: BASE_URL,
    author: "Mofaggol Hoshen",
    ogTitle: "Mofaggol Hoshen – Full-Stack Developer | React, React Native & .NET",
    ogDescription:
      "Full-Stack Developer specialising in C#/.NET, React, React Native, and Tailwind CSS. Explore my projects, skills, and experience.",
    ogImage: OG_IMAGE,
    ogUrl: BASE_URL,
    twitterCard: "summary_large_image",
    twitterCreator: "@mofaggolhoshen", // Update with actual Twitter handle
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${BASE_URL}/#person`,
          name: "Mofaggol Hoshen",
          url: BASE_URL,
          image: OG_IMAGE,
          jobTitle: "Full-Stack Developer",
          knowsAbout: ["C#", ".NET", "ASP.NET Core", "React", "React Native", "Tailwind CSS", "Azure", "Microservices", "CQRS"],
          email: "contact@example.com", // Update with actual email
          sameAs: [
            "https://github.com/MofaggolHoshen",
            "https://linkedin.com/in/mofaggol-hoshen",
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${BASE_URL}/#website`,
          url: BASE_URL,
          name: "Mofaggol Hoshen Portfolio",
          description:
            "Full-Stack Developer Portfolio – React, React Native, .NET & Tailwind CSS",
          creator: {
            "@id": `${BASE_URL}/#person`,
          },
        },
        {
          "@type": "WebPage",
          "@id": `${BASE_URL}/#webpage`,
          url: BASE_URL,
          name: "Home",
          isPartOf: {
            "@id": `${BASE_URL}/#website`,
          },
          aboutPage: {
            "@id": `${BASE_URL}/#about`,
          },
        },
      ],
    },
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
