import { ref } from "vue"
import { projectFirestore } from "../firebase/config"

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)


  const collectionRef = projectFirestore.collection(collection)
  .orderBy('createdAt', 'asc')

  collectionRef.onSnapshot(snap => {
    const results = []
    snap.docs.forEach(doc => { 
      doc.data().createdAt && results.push({...doc.data(), id: doc.id }) 
    })
    documents.value = results
    error.value = null
  }, (err) => {
    console.error(err.message)
    documents.value = null
    error.value = err.message
  })
  return { documents, error }
}

export default getCollection