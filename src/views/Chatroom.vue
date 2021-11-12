<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import getUser from '../composables/getUser'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push('/')
      }
    })
  }
}
</script>

<style>
  nav {
    padding: 1.25em;
    /* border-bottom: 1px solid #eee; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav p {
    margin: 0.125em auto;
    font-size: 1em;
    color: #eee;
  }

  nav p.email {
    font-size: 0.875em;
    color: #999;
  }
</style>