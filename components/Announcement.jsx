import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Typography } from "@material-ui/core"
import GavelIcon from "@material-ui/icons/Gavel"

import useRenderCollapsibleText from "../hooks/useRenderCollapsibleText"
import CollapseButton from "./CollapseButton"

const makeHandlerWontCalledWhenSelectingText = (handler) => (event) => {
  const isTextSelected = window.getSelection().toString()
  if (!isTextSelected) {
    handler(event)
  }
}

const MIN_LINE_CLAMP = 3

const AnnouncementWrapper = styled.div`
  margin: 12px 16px;
  padding: 16px;
  background-color: #fff6e9;
  border-radius: 8px;
`

const Header = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 5px;
`

const TitleSection = styled.div`
  display: flex;
  color: #dd8705;
  gap: 5px;
`

const AnnouncementSection = styled.div`
  margin-right: 32px;
  color: #8b929a;
`

export default function Announcement({
  announcement,
  title,
  defaultExpanded,
  ...otherProps
}) {
  const renderText = ({ ref, text, style }) => (
    <Typography ref={ref} style={style} variant="body2">
      {text}
    </Typography>
  )

  const {
    collapsibleTextManager: {
      toggleCollapse,
      isTextCollapsible,
      isTextExpanded: isAnnouncementExpanded,
    },
    renderCollapsibleText,
  } = useRenderCollapsibleText({
    defaultExpanded,
    lineClamp: MIN_LINE_CLAMP,
    renderText,
  })

  const handleCollapseButtonClick = (event) => {
    toggleCollapse()
    // prevent trigger handler twice when click on button
    event.stopPropagation()
  }

  return (
    <AnnouncementWrapper
      onClick={
        isTextCollapsible
          ? makeHandlerWontCalledWhenSelectingText(handleCollapseButtonClick)
          : undefined
      }
      {...otherProps}
    >
      <Header>
        <TitleSection>
          <GavelIcon fontSize="small" />
          <Typography variant="subtitle2">{title}</Typography>
        </TitleSection>
        {isTextCollapsible && (
          <CollapseButton
            collapsed={!isAnnouncementExpanded}
            color="primary"
            hasPadding={false}
            onClick={handleCollapseButtonClick}
          />
        )}
      </Header>
      <AnnouncementSection>
        {renderCollapsibleText({ text: announcement })}
      </AnnouncementSection>
    </AnnouncementWrapper>
  )
}

Announcement.propTypes = {
  announcement: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  defaultExpanded: PropTypes.bool,
}

Announcement.defaultProps = {
  defaultExpanded: false,
}
