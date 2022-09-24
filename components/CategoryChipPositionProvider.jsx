import { createContext, useContext, useRef, useMemo, useCallback } from "react"

const CategoryChipPositionContext = createContext({})

export const useCategoryChipPosition = () => {
  const context = useContext(CategoryChipPositionContext)

  return context
}

export const CategoryChipPositionProvider = ({ children }) => {
  const anchorRegistry = useRef({})

  const registerCategoryChipPosition = useCallback((anchorId, positionX) => {
    anchorRegistry.current[anchorId] = positionX
  }, [])

  const unregisterCategoryChipPosition = useCallback((anchorId) => {
    anchorRegistry.current[anchorId] = undefined
  }, [])

  const getCategoryChipPosition = useCallback((anchorId) => {
    const positionX = anchorRegistry.current[anchorId]

    if (!positionX) {
      return null
    }

    return positionX
  }, [])

  const value = useMemo(
    () => ({
      registerCategoryChipPosition,
      unregisterCategoryChipPosition,
      getCategoryChipPosition,
    }),
    [
      registerCategoryChipPosition,
      unregisterCategoryChipPosition,
      getCategoryChipPosition,
    ]
  )

  return (
    <CategoryChipPositionContext.Provider value={value}>
      {children}
    </CategoryChipPositionContext.Provider>
  )
}
