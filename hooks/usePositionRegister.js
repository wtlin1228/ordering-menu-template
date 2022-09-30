import { useEffect, useRef } from "react"
import { useCategoryChipPosition } from "../components/CategoryChipPositionProvider"

export default function usePositionRegister(anchorId) {
  const ref = useRef(null)

  const { registerCategoryChipPosition, unregisterCategoryChipPosition } =
    useCategoryChipPosition()

  useEffect(() => {
    if (ref.current) {
      registerCategoryChipPosition(anchorId, ref.current.offsetLeft)
    }
    return () => unregisterCategoryChipPosition(anchorId)
  }, [anchorId, registerCategoryChipPosition, unregisterCategoryChipPosition])

  return ref
}
