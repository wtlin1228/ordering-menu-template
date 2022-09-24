import React from "react"
import styled, { css } from "styled-components"
import useCollapsibleTextManager from "./useCollapsibleTextManager"

const CollapsibleTextWrapper = styled.div`
  max-height: ${(props) => props.$lineHeight * props.$lineClamp}px;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
  ${(props) =>
    props.$expanded &&
    css`
      max-height: 100rem;
      transition: max-height 0.3s cubic-bezier(0.9, 0, 0.8, 0.2);
    `}
`

export default function useRenderCollapsibleText({
  defaultExpanded,
  lineClamp,
  renderText,
}) {
  const {
    textRef,
    textMeasureRef,
    toggleCollapse,
    isTextCollapsible,
    isTextExpanded,
    lineClampCSSProperty,
    measuredTextLineHeight,
  } = useCollapsibleTextManager({ defaultExpanded, lineClamp })

  const collapsibleTextStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    lineClamp: lineClampCSSProperty,
    WebkitLineClamp: lineClampCSSProperty,
  }

  const hiddenCollapsibleTextStyle = {
    ...collapsibleTextStyle,
    visibility: "hidden",
    position: "absolute",
  }

  const renderCollapsibleText = ({ text, wrapperStyle }) => (
    <CollapsibleTextWrapper
      $expanded={isTextExpanded}
      $lineHeight={measuredTextLineHeight}
      $lineClamp={lineClamp}
      style={wrapperStyle}
    >
      {renderText({
        ref: textRef,
        text,
        style: collapsibleTextStyle,
      })}
      {renderText({
        ref: textMeasureRef,
        text: "measure",
        style: hiddenCollapsibleTextStyle,
      })}
    </CollapsibleTextWrapper>
  )

  return {
    renderCollapsibleText,
    collapsibleTextManager: {
      isTextCollapsible,
      toggleCollapse,
      isTextExpanded,
    },
  }
}
