<template>
  <div class="container">
    <Navbar />
    <Messages />
    <NewChatForm />
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import Messages from '../components/Messages.vue'
import getUser from '../composables/getUser'

export default {
  components: { Navbar, NewChatForm, Messages },
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