import { Box } from "@material-ui/core"
import React from "react"
import useFooterInView from "../hooks/useFooterInView"

export default function Footer() {
  const { ref } = useFooterInView()

  return (
    <Box ref={ref} height="100px">
      Footer
    </Box>
  )
}
