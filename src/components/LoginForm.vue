<template>
  <form @submit.prevent="handleSubmit">
    <input type="email"
    required
    name="email"
    id="email"
    placeholder="Email"
    v-model="email"
    onfocus="this.placeholder=''"
    onblur="this.placeholder='Email'"
    >
    <input type="password"
    required
    name="password"
    id="password"
    placeholder="Password"
    v-model="password"
    onfocus="this.placeholder=''"
    onblur="this.placeholder='Password'"
    >
    <div class="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
  setup(context) {
    const email = ref(null)
    const password = ref(null)

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }

    return { email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>