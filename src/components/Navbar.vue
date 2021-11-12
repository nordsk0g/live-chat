<template>
  <nav v-if="user">
    <div>
      <p>Hey there, {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, logout } = useLogout()
    const { user } = getUser()
    const router = useRouter()

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        // router.push({ name: 'Welcome' })
        console.log('user logged out')
      }
    }

    return { handleLogout, error, user }
  }
}
</script>

<style>

</style>