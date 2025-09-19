import React, { useEffect } from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import { Loader } from 'lucide-react'
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log(authUser)

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> :<Navigate to="/signin" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/signin" element={!authUser ? <SignInPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={authUser ? <SettingsPage/> :<Navigate to="/signin" />}/>
        <Route path="/profile" element={authUser ? <ProfilePage/> :<Navigate to="/signin" />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
