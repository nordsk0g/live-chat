<template>
  <form>
    <textarea
      placeholder="Type a message..."
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Type a message...'"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { timestamp } from '../firebase/config'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'

export default {
  setup() {
    const { user } = getUser()
    const { addDoc, error } = useCollection('message')
    
    const message = ref(null)

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp()
      }

      await addDoc(chat)
      
      if (!error.value) {
        message.value = null
      }
    }

    return { message, handleSubmit, error }
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