<template>
  <form @submit.prevent="handleSubmit">
    <input type="text"
    required
    name="displayName"
    id="displayName"
    placeholder="Display Name"
    v-model="displayName"
    onfocus="this.placeholder=''"
    onblur="this.placeholder='Display Name'"
    >
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
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignUp from  '../composables/useSignUp'

export default {
  setup(props, context) {
    const { error, signup } = useSignUp()
    
    const displayName = ref(null)
    const email = ref(null)
    const password = ref(null)

    const handleSubmit = async () => {
      await signup(displayName.value, email.value, password.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return { displayName, email, password, handleSubmit, error }
  }
}
</script>

<style>

</style>