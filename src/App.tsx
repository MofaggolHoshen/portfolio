import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Testimonials } from './components/sections/Testimonials'
import { BlogPreview } from './components/sections/BlogPreview'
import { Contact } from './components/sections/Contact'

function App() {
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
  )
}

export default App
