'use client'

import { useEffect, useState } from 'react'

export default function DoorOpenSimple() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true))
    const hideTimer = setTimeout(() => setHidden(true), 4100)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(hideTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div className="absolute inset-0 z-[9999] flex w-full h-dvh overflow-hidden">
      {/* Cánh trái */}
      <img
        src="https://content.pancake.vn/1/s840x1600/fwebp/0e/6c/18/fb/44e9347bb12368a07e646ad45939e6086fc1ce3b2b39c28663352c01-w:1260-h:2400-l:1296984-t:image/png.png"
        alt="left"
        style={{
          transform: open ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 4s ease-in-out', // nhanh hơn một chút
        }}
        className="absolute top-0 left-0 h-full w-full object-cover z-40"
      />

      {/* Cánh phải */}
      <img
        src="https://content.pancake.vn/1/s840x1600/fwebp/fb/1a/3d/db/5397c85e01e68520b6e686acfb8f4b71fc813f563e456d159b222a3c-w:1260-h:2400-l:1301050-t:image/png.png"
        alt="right"
        style={{
          transform: open ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 4s ease-in-out', // khớp với bên trái
        }}
        className="absolute top-0 right-0 h-full w-full object-cover z-30"
      />
    </div>
  )
}
