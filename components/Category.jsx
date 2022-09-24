import React from "react"
import styled from "styled-components"

import { ListSubheader } from "@material-ui/core"
import useAnchorRegister from "../hooks/useAnchorRegister"
import { useCategoryInView } from "./CategoryInViewProvider"
import useMenuCategoryInView from "../hooks/useMenuCategoryInView"

const CategoryName = styled(ListSubheader).attrs({
  disableSticky: true,
})`
  &&& {
    color: #454f5b;
  }
`

export default function Category({ children, category, reset }) {
  const { ref: anchorRef } = useAnchorRegister(category.uuid)

  const { handleCategoryInView } = useCategoryInView()

  const { ref } = useMenuCategoryInView({
    callback: () => {
      handleCategoryInView(category.uuid)
    },
    reset,
  })

  return (
    <div ref={ref}>
      <CategoryName ref={anchorRef}>{category.name}</CategoryName>
      {children}
    </div>
  )
}
