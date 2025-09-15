"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if user has a preference saved
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  
  return (
    <>
      {/* Spacer */}
      <div style={{ height: '80px' }}></div>
      
      {/* Header con estilos inline para asegurar que funcione */}
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
          borderBottom: isDarkMode ? '2px solid #333' : '2px solid #f5f5f5',
          boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.08)',
          zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/images/logo5.png"
              alt="KU Soluciones Logo"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }}
            />
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: isDarkMode ? '#e5e5e5' : '#2c3e50' }}>
                Kü Soluciones
              </div>
              <div style={{ fontSize: '12px', color: isDarkMode ? '#999' : '#7f8c8d' }}>
                Innovación Digital
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ display: 'flex', gap: '30px' }}>
            <a href="/" style={{ color: '#E74C3C', fontWeight: '600', textDecoration: 'none' }}>
              Inicio
            </a>
            <a href="/servicios" style={{ color: isDarkMode ? '#e5e5e5' : '#2c3e50', fontWeight: '500', textDecoration: 'none' }}>
              Servicios
            </a>
            <a href="/proyectos" style={{ color: isDarkMode ? '#e5e5e5' : '#2c3e50', fontWeight: '500', textDecoration: 'none' }}>
              Proyectos
            </a>
            <a href="/nosotros" style={{ color: isDarkMode ? '#e5e5e5' : '#2c3e50', fontWeight: '500', textDecoration: 'none' }}>
              Nosotros
            </a>
            <a href="/contacto" style={{ color: isDarkMode ? '#e5e5e5' : '#2c3e50', fontWeight: '500', textDecoration: 'none' }}>
              Contacto
            </a>
          </nav>

          {/* CTA Buttons and Theme Toggle */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                border: isDarkMode ? '1px solid #444' : '1px solid #e5e5e5',
                backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <button
              onMouseEnter={() => setHoveredButton('cotizar')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '10px 24px',
                border: '2px solid #E74C3C',
                borderRadius: '8px',
                backgroundColor: hoveredButton === 'cotizar' ? '#E74C3C' : 'transparent',
                color: hoveredButton === 'cotizar' ? 'white' : '#E74C3C',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Cotizar Proyecto
            </button>
            <button
              onMouseEnter={() => setHoveredButton('agendar')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                padding: '10px 24px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: hoveredButton === 'agendar' ? '#C0392B' : '#E74C3C',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: hoveredButton === 'agendar' ? '0 6px 20px rgba(231, 76, 60, 0.4)' : '0 4px 10px rgba(231, 76, 60, 0.3)',
                transform: hoveredButton === 'agendar' ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            >
              Agendar Reunión
            </button>
          </div>
        </div>
      </header>
    </>
  )
}