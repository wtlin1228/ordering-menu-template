import React from "react"
import PropTypes from "prop-types"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import { IconButton } from "@material-ui/core"
import styled from "styled-components"

const StyledIconButton = styled(IconButton)`
  &&& {
    padding: 0;
  }
`

export default function CollapseButton({ collapsed }) {
  return (
    <StyledIconButton>
      {collapsed ? <ExpandMore size={16} /> : <ExpandLess size={16} />}
    </StyledIconButton>
  )
}

CollapseButton.propTypes = {
  collapsed: PropTypes.bool.isRequired,
}
