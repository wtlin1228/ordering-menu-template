import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Chip, useTheme } from "@material-ui/core"

import usePositionRegister from "../hooks/usePositionRegister"
import { useVerticalScrollTo } from "../hooks/useVerticalScrollTo"
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

export default function CategoryChip({
  isActive,
  category,
  onAutoScrollingStart,
  onAutoScrollingEnd,
  handleChipsBoxScrollTo,
  setActiveCategoryId,
}) {
  const theme = useTheme()
  const { getCategoryAnchor } = useCategoryAnchor()
  const verticalScrollTo = useVerticalScrollTo()
  const ref = usePositionRegister(category.uuid)

  const handleMenuScrollTo = (categoryId) => {
    const anchor = getCategoryAnchor(categoryId)
    if (anchor) {
      const { top } = anchor.getBoundingClientRect()
      verticalScrollTo(top)
    }
  }

  const handleClickAsync = async () => {
    onAutoScrollingStart()
    setActiveCategoryId(category.uuid)
    handleMenuScrollTo(category.uuid)
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
