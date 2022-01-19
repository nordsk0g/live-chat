<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login to chatroom</h2>
      <LoginForm @login="enterChat" />
      <p>Not a member? <span @click="handleShowLogin">Sign up</span> now!</p>
    </div>
    <div v-else>
      <h2>Sign up to the chatroom</h2>
      <SignUpForm @signup="enterChat" />
      <p>Already a member? <span @click="handleShowLogin">Log in</span></p>
    </div>
  </div>
</template>

<script>
  import SignUpForm from "../components/SignUpForm.vue";
  import LoginForm from "../components/LoginForm.vue";
  import { ref } from '@vue/reactivity';
  import { useRouter } from 'vue-router'

export default {
  components: { SignUpForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }

    const handleShowLogin = () => {
      showLogin.value = !showLogin.value
    }

    return { showLogin, handleShowLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 1.25em 0;
  }
  /* Form Styles */
  .welcome form {
    width: 300px;
    margin: 1.25em auto 0;
  }
  .welcome label {
    display: block;
    margin: 1.25em 0 0.625em;
  }
  .welcome input {
    width: 100%;
    padding: 0.625em;
    border-radius: 0.5em;
    border: 0.0625em solid #eee;
    outline: none;
    color: #A2ACBD;
    margin: 0.625em auto;
  }

  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 0.05em;
    cursor: pointer;
  }
  .welcome span:hover {
    color: #00C6BA;
  }

  .welcome button {
    margin: 1.25em auto;
  }
</style>