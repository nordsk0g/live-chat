<template>
  <div class="message" v-for="doc in documents" :key="doc.id">
    <div class="user">{{ doc.name }}</div>
    <p>{{ doc.message }}</p>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
export default {
  setup() {
    const { documents, error } = getCollection('message')

    return { documents, error }
  }
}
</script>

<style>
  .message {
    margin: 1em;
  }
  .message p {
    font-size: 0.9em;
    margin: 0;
  }
  .user {
    font-size: 1.25em;
    font-weight: bold;
    color: #3ABD9C
  }
</style>