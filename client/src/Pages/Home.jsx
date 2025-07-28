import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
    <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Chào mừng đến trang chủ!</h1>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Home
