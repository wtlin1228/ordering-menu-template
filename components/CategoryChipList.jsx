import React, { useRef, useCallback, useEffect } from "react"
import styled from "styled-components"
import animateScrollTo from "animated-scroll-to"
import CategoryChip from "./CategoryChip"
import { useCategoryChipPosition } from "./CategoryChipPositionProvider"
import { useMenuData } from "./MenuDataProvider"
import { useCategoryInView } from "./CategoryInViewProvider"
import { CATEGORY_CHIP_LIST_ID } from "../constants/elementId"

const ChipsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  overflow: -moz-scrollbars-none; /* Firefox */
`

export default function CategoryChipList() {
  const chipsScrollBoxRef = useRef(null)
  const { currentCategories, activeCategoryId, setActiveCategoryId } =
    useMenuData("")

  const isAutoScrollingRef = useRef(false)
  const handleAutoScrollingStart = useCallback(() => {
    isAutoScrollingRef.current = true
  }, [])
  const handleAutoScrollingEnd = useCallback(() => {
    isAutoScrollingRef.current = false
  }, [])

  const { getCategoryChipPosition } = useCategoryChipPosition()
  const handleChipsBoxScrollTo = useCallback(
    (categoryId) => {
      const positionX = getCategoryChipPosition(categoryId)
      if (positionX && chipsScrollBoxRef.current) {
        // minus padding-left of category chip list to avoid shifting
        animateScrollTo([positionX - 16, null], {
          elementToScroll: chipsScrollBoxRef.current,
        })
      }
    },
    [getCategoryChipPosition]
  )

  const { topCategory$ } = useCategoryInView()

  // subscribe to topCategory$ and activate corresponding category chip
  useEffect(() => {
    const subscription = topCategory$.subscribe((categoryId) => {
      if (isAutoScrollingRef.current) {
        return
      }
      setActiveCategoryId(categoryId)
    })
    return () => subscription.unsubscribe()
  }, [setActiveCategoryId, topCategory$])

  // subscribe to topCategory$ and scroll to corresponding category chip horizontally
  useEffect(() => {
    const subscription = topCategory$.subscribe((categoryId) => {
      if (isAutoScrollingRef.current) {
        return
      }

      handleChipsBoxScrollTo(categoryId)
    })
    return () => subscription.unsubscribe()
  }, [topCategory$, handleChipsBoxScrollTo])

  return (
    <ChipsContainer id={CATEGORY_CHIP_LIST_ID} ref={chipsScrollBoxRef}>
      {currentCategories.map(([categoryId, { category }]) => (
        <CategoryChip
          key={categoryId}
          category={category}
          isActive={categoryId === activeCategoryId}
          onAutoScrollingStart={handleAutoScrollingStart}
          onAutoScrollingEnd={handleAutoScrollingEnd}
          handleChipsBoxScrollTo={handleChipsBoxScrollTo}
          setActiveCategoryId={setActiveCategoryId}
        />
      ))}
    </ChipsContainer>
  )
}
