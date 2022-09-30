import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react"

const AppBarStatusContext = createContext({})

export const useAppBarStatus = () => {
  const context = useContext(AppBarStatusContext)

  return context
}

function getTrigger(store, options = {}) {
  const { threshold = 100 } = options
  const previous = store.current

  // Get vertical scroll
  store.current = window.pageYOffset

  if (previous !== undefined) {
    if (store.current < previous) {
      return false
    }
  }

  return store.current > threshold
}

export const AppBarStatusProvider = ({ children }) => {
  const store = useRef()
  const canUpdateTrigger = useRef(true)
  const [trigger, setTrigger] = useState(() => getTrigger(store))

  const handleScroll = useCallback(() => {
    const newTrigger = getTrigger(store)
    if (canUpdateTrigger.current) {
      setTrigger(newTrigger)
    }
  }, [])

  useEffect(() => {
    handleScroll() // Re-evaluate trigger when dependencies change
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true })
    }
  }, [handleScroll])

  const lockTrigger = useCallback(() => {
    canUpdateTrigger.current = false
  }, [])

  const unlockTrigger = useCallback(() => {
    canUpdateTrigger.current = true
  }, [])

  const manualTrigger = useCallback(() => {
    unlockTrigger()
    handleScroll()
  }, [unlockTrigger, handleScroll])

  const value = useMemo(
    () => ({
      shouldShowAppBar: !trigger,
      lockTrigger,
      unlockTrigger,
      manualTrigger,
    }),
    [trigger, lockTrigger, unlockTrigger, manualTrigger]
  )

  return (
    <AppBarStatusContext.Provider value={value}>
      {children}
    </AppBarStatusContext.Provider>
  )
}
