import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import animateScrollTo from "animated-scroll-to"

import { Chip, useTheme } from "@material-ui/core"
import usePositionRegister from "../hooks/usePositionRegister"
import { useCategoryAnchor } from "./CategoryAnchorProvider"

const StyledChip = styled(Chip)`
  &&& {
    color: ${({ $isActive, $primaryColor }) =>
      $isActive ? $primaryColor : "#A8B1BB"};
    border-color: ${({ $isActive, $primaryColor }) =>
      $isActive ? $primaryColor : "#A8B1BB"};

    :hover {
      background-color: transparent;
    }
  }
`

const APP_BAR_HEIGHT = 56
const SUPPLIER_TABS_HEIGHT = 48
const CATEGORY_CHIP_LIST_HEIGHT = 56
const SCROLL_OFFSET = SUPPLIER_TABS_HEIGHT + CATEGORY_CHIP_LIST_HEIGHT
const SCROLL_OFFSET_WITH_APP_BAR = SCROLL_OFFSET + APP_BAR_HEIGHT

export default function CategoryChip({
  isActive,
  category,
  onAutoScrollingStart,
  onAutoScrollingEnd,
  handleChipsBoxScrollTo,
  setActiveCategoryId,
}) {
  const theme = useTheme()

  const { ref } = usePositionRegister(category.uuid)

  const { getCategoryAnchor } = useCategoryAnchor()

  const handleMenuScrollTo = async (categoryId) => {
    const anchor = getCategoryAnchor(categoryId)
    const shouldScrollDown = anchor.getBoundingClientRect().top > 0
    if (anchor) {
      await animateScrollTo(anchor, {
        // +1 for not to scroll to the observer margin edge
        verticalOffset: shouldScrollDown
          ? -SCROLL_OFFSET - 1
          : -SCROLL_OFFSET_WITH_APP_BAR - 1,
      })
    }
  }

  const handleClickAsync = async () => {
    onAutoScrollingStart()
    setActiveCategoryId(category.uuid)
    await handleMenuScrollTo(category.uuid)
    handleChipsBoxScrollTo(category.uuid)
    onAutoScrollingEnd()
  }

  return (
    <StyledChip
      ref={ref}
      $isActive={isActive}
      $primaryColor={theme.palette.primary.main}
      variant="outlined"
      label={category.name}
      onClick={handleClickAsync}
    />
  )
}

CategoryChip.propTypes = {
  isActive: PropTypes.bool,
}

CategoryChip.defaultProps = {
  isActive: false,
}
