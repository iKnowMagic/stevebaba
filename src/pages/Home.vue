<template>
  <div>
    <Header />
    <Intro />

    <main>
      <About />
      <Books />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Books from '@/components/Books'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    About,
    Books,
    Footer,
    Contact
  }
}
</script>
