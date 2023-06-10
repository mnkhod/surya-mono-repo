import { Icon } from '@iconify/react'
import React from 'react'

export default function Footer() {
  return (
      <footer className="footer footer-center gap-8 p-10 border-1 border-t-2 text-primary-content">
        <div className="flex flex-col gap-3">
          <span className="font-bold text-4xl">Surya</span>
          <p className="font-bold text-xs">Our mission is to provide high-quality, affordable English lessons to students of all ages and levels.</p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-5">
            <Icon className="w-auto h-7" icon="cib:facebook" />
            <Icon className="w-auto h-7" icon="cib:youtube" />
            <Icon className="w-auto h-7" icon="cib:instagram" />
          </div>
        </div>
      </footer>
  )
}
