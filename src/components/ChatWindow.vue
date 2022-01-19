<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div class="message-block" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="name">{{ doc.name }}</span>
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onUpdated, ref } from '@vue/runtime-core'
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

export default {
  setup() {
    const { documents, error } = getCollection('message')
    const messages = ref(null)

    // auto-scroll to bottom
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    // format date and time
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          const time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time}
        })
      } 
    })

    
    return { documents, error, formattedDocuments, messages }
  }
}
</script>

<style>
  .chat-window {
    padding: 1.85em 1.25em;
    background: #356C83;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
  .message-block {
    margin: 1.125em 0;
  }
  .name {
    font-size: 1em;
    font-weight: bold;
    color: #66EBBA
  }
  .created-at {
    color: #A2ACBD;
    font-size: 0.75em;
    margin-left: 0.25em;
  }
  .message {
    display: block;
    font-size: 0.85em;
    margin: 0.25em 0;
  }
</style>