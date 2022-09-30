import React from "react"
import PropTypes from "prop-types"
import { styled } from "@material-ui/core/styles"

import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Slide,
  IconButton,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { useAppBarStatus } from "./AppBarStatusProvider"

function HideOnScroll({ children }) {
  const { shouldShowAppBar } = useAppBarStatus()

  return (
    <Slide appear={false} direction="down" in={shouldShowAppBar}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

function HideAppBar({ children }) {
  return (
    <>
      <HideOnScroll>{children}</HideOnScroll>
      <Toolbar />
    </>
  )
}

const StyledAppBar = styled(MuiAppBar)({
  backgroundColor: "white",
  color: "#454F5B",
  boxShadow: "none",
})

const StyledMenuIconButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(2),
}))

const ShopTitle = styled(Typography)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
})

export default function AppBar() {
  return (
    <HideAppBar>
      <StyledAppBar>
        <Toolbar>
          <StyledMenuIconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </StyledMenuIconButton>
          <ShopTitle variant="h6">門市訂貨賣場</ShopTitle>
        </Toolbar>
      </StyledAppBar>
    </HideAppBar>
  )
}
