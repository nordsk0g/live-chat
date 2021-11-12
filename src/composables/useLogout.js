import { ref } from "vue"
import { useRouter } from "vue-router"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const logout = async () => {
  error.value = null

  try {
    await projectAuth.signOut()

  } catch (err) {
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout