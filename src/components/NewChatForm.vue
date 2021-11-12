<template>
  <form>
    <textarea
      placeholder="Type a message..."
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Type a message...'"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'

export default {
  setup() {
    const { user } = getUser()
    const message = ref(null)

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }

      console.log(chat)
      message.value = null
    }

    return { message, handleSubmit }
  }
}
</script>

<style scoped>
  form {
    margin: 0.625em;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 0.375em;
    padding: 0.625em;
    box-sizing: border-box;
    border: 0;
    border-radius: 0.25em;
    font-family: inherit;
    outline: none;
    resize: none;
  }
  
</style>