import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import User_Navbar from './User_Dashobar_SharedJsx/User_Navbar'

function User_Dashaboard({ children }) {
  return (
    <div className="max-w-[1596px] mx-auto">
      <div className="flex h-screen">
        {/* Sidebar (fixed width, won't scroll) */}
        <aside className="w-20 h-full border-r bg-white flex-shrink-0  z-40">
          <Sidebar />
        </aside>

        {/* Content (fills remaining space, scrolls vertically) */}
        <section className="flex-1 h-full overflow-y-auto bg-[#F2F2F2]">
          <div className="sticky top-0 z-20 bg-[#F2F2F2] border-b">
            <User_Navbar />
          </div>

          <main className="p-4">
            {children}
          </main>
        </section>

      </div>
    </div>
  )
}

export default User_Dashaboard
