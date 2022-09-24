import { useState, useEffect, useRef } from "react"
import useDimensions from "react-use-dimensions"

export default function useCollapsibleTextManager({
  defaultExpanded,
  lineClamp,
}) {
  const [isTextCollapsible, setShouldShowCollapseButton] = useState(false)
  const [isTextExpanded, setIsTextExpanded] = useState(defaultExpanded)
  const [lineClampCSSProperty, setLineClampCSSProperty] = useState(
    defaultExpanded ? "initial" : String(lineClamp)
  )

  const textRef = useRef(null)
  const [textMeasureRef, { height: measuredTextLineHeight }] = useDimensions({
    liveMeasure: false,
  })

  const toggleCollapse = () => {
    setIsTextExpanded(!isTextExpanded)

    // since line-clamp animation only work on chrome,
    // this is a javascript workaround for expand and collapse animation
    if (isTextExpanded) {
      setTimeout(() => {
        setLineClampCSSProperty(String(lineClamp))
      }, 250)
    } else {
      setLineClampCSSProperty("initial")
    }
  }

  useEffect(() => {
    setShouldShowCollapseButton(
      textRef.current &&
        textRef.current.scrollHeight >
          Math.round(measuredTextLineHeight * lineClamp)
    )
  }, [measuredTextLineHeight, lineClamp])

  return {
    isTextCollapsible,
    isTextExpanded,
    setIsTextExpanded,
    toggleCollapse,
    lineClampCSSProperty,
    textMeasureRef,
    textRef,
    measuredTextLineHeight,
  }
}
