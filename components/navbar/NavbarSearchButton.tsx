'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { SheetClose } from '../ui/sheet'
import { FaSearch } from 'react-icons/fa'
// import SearchOverlay from '../SearchOverlay'

const NavbarSearchButton = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <>
      <Link
        href="/"
        className="p-5 border-b hover:text-primary_yellow text-2xl"
        onClick={() => setShowSearch(true)}
      >
        <SheetClose className="flex items-center justify-center w-full">
          <span className="mr-2 text-primary_yellow">
            <FaSearch />
          </span>
          <span className="font-kaushanScript">Search</span>
        </SheetClose>
      </Link>
    </>
  )
}

export default NavbarSearchButton