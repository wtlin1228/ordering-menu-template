import { useEffect, useRef } from "react"

import { useCategoryAnchor } from "../components/CategoryAnchorProvider"

export default function useAnchorRegister(anchorId) {
  const ref = useRef(null)
  const { registerCategoryAnchor, unregisterCategoryAnchor } =
    useCategoryAnchor()

  useEffect(() => {
    if (ref.current) {
      registerCategoryAnchor(anchorId, ref.current)
    }
    return () => unregisterCategoryAnchor(anchorId)
  }, [anchorId, registerCategoryAnchor, unregisterCategoryAnchor])

  return { ref }
}
