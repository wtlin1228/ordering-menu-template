import React from "react"
import styled from "styled-components"

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"

import { useMenuData } from "./MenuDataProvider"

const DeliveryRuleWrapper = styled.div`
  margin: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
`

export default function DeliveryRule() {
  const { currentDeliveryRule } = useMenuData()

  return (
    <DeliveryRuleWrapper>
      <List component="nav" aria-label="delivery rule">
        <ListItem>
          <ListItemIcon>
            <LocalShippingIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={currentDeliveryRule.deliveryInNDays}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MonetizationOnIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={currentDeliveryRule.deliveryFee}
            primaryTypographyProps={{ variant: "body2" }}
          />
        </ListItem>
      </List>
    </DeliveryRuleWrapper>
  )
}
