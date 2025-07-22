'use client'

import { Theme, useThemeStore } from '@/store/useThemeStore';
import { useEffect, useState } from 'react'
import { MdBrightness4, MdBrightness7 } from 'react-icons/md'

export default function ThemeToggle() {

  const { theme, setTheme } = useThemeStore();
  const [ mounted, setMounted ] = useState(false)
  const [ isDark, setIsDark ] = useState(false)

  useEffect(() => {

    setMounted(true)

    const saved = localStorage.getItem('theme')

    if (saved === 'DARK') {
      setTheme('DARK')
      setIsDark(true)
    }

    if (saved === 'LIGHT') {
      setTheme('LIGHT')
      setIsDark(false)
    }

  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'LIGHT' : 'DARK'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-3 py-2 rounded-full transition-all duration-300
        ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}
      `}
    >
      {isDark ? <MdBrightness7 className='text-xl justify-self-center' /> : <MdBrightness4 className='text-xl justify-self-center' />}
    </button>
  )
}
