import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-600">&copy; {new Date().getFullYear()} Product Componets. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
