import React, {
  useCallback,
  useState,
  useContext,
  useMemo,
  createContext,
} from "react"

import parseProducts from "../utils/parseProducts"
import mockProducts from "../data/products"
import { CATEGORY_CHIP_LIST_ID } from "../constants/elementId"

const suppliers = parseProducts(mockProducts)

const MenuDataContext = createContext({})

export const useMenuData = () => {
  const context = useContext(MenuDataContext)

  return context
}

export const MenuDataProvider = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeCategoryId, setActiveCategoryId] = useState("")

  const currentCategories = useMemo(
    () => Array.from(Array.from(suppliers.values())[activeTabIndex].categories),
    [activeTabIndex]
  )

  const handleTabChange = useCallback((tabIdx) => {
    setActiveCategoryId("")
    document.getElementById(CATEGORY_CHIP_LIST_ID).scrollTo({ left: 0 })
    setActiveTabIndex(tabIdx)
  }, [])

  const value = useMemo(
    () => ({
      activeTabIndex,
      handleTabChange,
      activeCategoryId,
      setActiveCategoryId,
      currentCategories,
    }),
    [activeTabIndex, handleTabChange, activeCategoryId, currentCategories]
  )

  return (
    <MenuDataContext.Provider value={value}>
      {children}
    </MenuDataContext.Provider>
  )
}
