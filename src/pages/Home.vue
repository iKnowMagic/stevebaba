<template>
  <div>
    <Header />
    <Intro />
    <main>
      <About />
      <Books />
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

export default {
  name: 'home',
  components: {
    Header,
    Intro,
    About,
    Books,
    Footer
  }
}
</script>
