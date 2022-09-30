import { useRef, useEffect } from "react"
import { useCategoryInView } from "../components/CategoryInViewProvider"
import { useMenuData } from "../components/MenuDataProvider"

export default function useFooterInView() {
  const { handleCategoryInView, handleLeaveBottom, executeForceRerenderFn } =
    useCategoryInView()

  const { currentCategories } = useMenuData()
  const lastCategoryId = currentCategories[currentCategories.length - 1][0]

  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.99) {
          handleCategoryInView(
            /* categoryId */ lastCategoryId,
            /* isInBottom */ true
          )
        } else {
          handleLeaveBottom()
          executeForceRerenderFn()
        }
      },
      {
        // Set threshold to 0.99 because footer's height might be
        // float, not integer.
        threshold: 0.99,
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
  }, [
    handleCategoryInView,
    handleLeaveBottom,
    executeForceRerenderFn,
    lastCategoryId,
  ])

  return ref
}
