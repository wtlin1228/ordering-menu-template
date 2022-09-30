import React from "react"
import { Box } from "@material-ui/core"
import useFooterInView from "../hooks/useFooterInView"

export default function Footer() {
  const ref = useFooterInView()

  return (
    <Box ref={ref} py={3} px={2} bgcolor="#F5F5F5">
      Created by Leo Lin who lives and works in Taiwan being a frontend
      engineer.
    </Box>
  )
}
