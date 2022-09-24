import { Subject } from "rxjs"

import {
  useRef,
  useCallback,
  useContext,
  useMemo,
  createContext,
  useEffect,
} from "react"

const CategoryInViewContext = createContext({})

export const useCategoryInView = () => {
  const context = useContext(CategoryInViewContext)

  return context
}

export const CategoryInViewProvider = ({ children }) => {
  const forceRerenderFnRef = useRef(() => {})
  const isInBottomRef = useRef(false)
  const subjectRef = useRef(new Subject())

  const handleCategoryInView = useCallback(
    (categoryId, isInBottom = false) => {
      if (!isInBottomRef.current) {
        subjectRef.current.next(categoryId)
      }

      if (isInBottom) {
        isInBottomRef.current = true
      }
    },
    [subjectRef]
  )

  const handleLeaveBottom = useCallback(() => {
    isInBottomRef.current = false
  }, [])

  const registerForceRerenderFn = useCallback((fn) => {
    forceRerenderFnRef.current = fn
  }, [])

  const executeForceRerenderFn = useCallback(() => {
    forceRerenderFnRef.current()
  }, [])

  const value = useMemo(
    () => ({
      handleCategoryInView,
      handleLeaveBottom,
      registerForceRerenderFn,
      executeForceRerenderFn,
      topCategory$: subjectRef.current,
    }),
    [
      handleCategoryInView,
      handleLeaveBottom,
      registerForceRerenderFn,
      executeForceRerenderFn,
      subjectRef,
    ]
  )

  return (
    <CategoryInViewContext.Provider value={value}>
      {children}
    </CategoryInViewContext.Provider>
  )
}
