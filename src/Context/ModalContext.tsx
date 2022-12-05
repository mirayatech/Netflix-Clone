import type { Dispatch, SetStateAction } from 'react'

import React from 'react'
import { useContext, createContext, useState } from 'react'

type ModalContextType = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  setIsOpen: () => undefined,
})

export const ModalContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isisOpenOpen, setIsisOpenOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{ isOpen: isisOpenOpen, setIsOpen: setIsisOpenOpen }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  return useContext(ModalContext)
}
