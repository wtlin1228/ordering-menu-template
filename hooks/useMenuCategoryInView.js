import { useRef, useEffect } from "react"
import { useAppBarStatus } from "../components/AppBarStatusProvider"
import { APP_BAR_HEIGHT } from "../constants/elementHeight"

const DEFAULT_MARGIN = 144

const getRootMargin = (shouldShowAppBar) => {
  if (shouldShowAppBar) {
    return `-${DEFAULT_MARGIN + APP_BAR_HEIGHT}px 0px ${
      -window.innerHeight + DEFAULT_MARGIN + APP_BAR_HEIGHT + 1
    }px 0px`
  }
  return `-${DEFAULT_MARGIN}px 0px ${
    -window.innerHeight + DEFAULT_MARGIN + 1
  }px 0px`
}

export default function useMenuCategoryInView({ callback = () => {}, reset }) {
  const ref = useRef(null)

  const { shouldShowAppBar } = useAppBarStatus()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      },
      {
        rootMargin: getRootMargin(shouldShowAppBar),
        threshold: 0,
      }
    )

    const target = ref.current
    if (target) {
      observer.observe(target)
    }
    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [callback, reset, shouldShowAppBar])

  return ref
}
