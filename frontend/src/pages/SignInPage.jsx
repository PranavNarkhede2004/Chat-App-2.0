import React from 'react'
import { useAuthStore } from '../store/useAuthStore.js'

function SignInPage() {
    const authUser= useAuthStore();
  return (
    <div>SignInPage</div>
  )
}

export default SignInPage