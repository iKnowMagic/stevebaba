<template>
  <div>
    <Header />
    <Intro />
    <main>
      <About />
      <Books />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Books from '@/components/Books'

export default {
  name: 'home',
  components: {
    Header,
    Intro,
    About,
    Books
  }
}
</script>
