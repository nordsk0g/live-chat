<template>
  <nav>
    <div>
      <p>Hey there... [displayName]</p>
      <p class="email">Currently logged in as... [email]</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
  setup() {
    const { error, logout } = useLogout()

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        console.log('user logged out')
      }
    }

    return { handleLogout, error }
  }
}
</script>

<style>

</style>