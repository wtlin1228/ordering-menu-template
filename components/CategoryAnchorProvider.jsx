import { createContext, useContext, useRef, useMemo, useCallback } from "react"

const CategoryAnchorContext = createContext({})

export const useCategoryAnchor = () => {
  const context = useContext(CategoryAnchorContext)

  return context
}

export const CategoryAnchorProvider = ({ children }) => {
  const anchorRegistry = useRef({})

  const registerCategoryAnchor = useCallback((anchorId, ref) => {
    anchorRegistry.current[anchorId] = ref
  }, [])

  const unregisterCategoryAnchor = useCallback((anchorId) => {
    anchorRegistry.current[anchorId] = undefined
  }, [])

  const getCategoryAnchor = useCallback((anchorId) => {
    const anchor = anchorRegistry.current[anchorId]

    if (!anchor) {
      return null
    }

    return anchor
  }, [])

  const value = useMemo(
    () => ({
      registerCategoryAnchor,
      unregisterCategoryAnchor,
      getCategoryAnchor,
    }),
    [registerCategoryAnchor, unregisterCategoryAnchor, getCategoryAnchor]
  )

  return (
    <CategoryAnchorContext.Provider value={value}>
      {children}
    </CategoryAnchorContext.Provider>
  )
}
