import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { useTheme, List, Tabs, Tab, Box } from "@material-ui/core"

import parseProducts from "../utils/parseProducts"
import mockProducts from "../data/products"
import {
  APP_BAR_HEIGHT,
  TABS_HEIGHT,
  CATEGORY_HEIGHT,
} from "../constants/elementHeight"
import { useVerticalScrollTo } from "../hooks/useVerticalScrollTo"

import { useMenuData } from "./MenuDataProvider"
import { useCategoryInView } from "./CategoryInViewProvider"
import { useAppBarStatus } from "./AppBarStatusProvider"
import TabPanel from "./TabPanel"
import Category from "./Category"
import Product from "./Product"
import CategoryChipList from "./CategoryChipList"
import Announcement from "./Announcement"
import DeliveryRule from "./DeliveryRule"

const suppliers = parseProducts(mockProducts)

const StickyDiv = styled.div`
  background-color: white;
  position: sticky;
  z-index: 10;
  will-change: top;
  transition: top 0.15s;
  transition-delay: ${({ $isAppBarVisible }) =>
    $isAppBarVisible ? "0.2s" : 0};
  transition-timing-function: ${({ $isAppBarVisible, $muiTheme }) =>
    $isAppBarVisible
      ? $muiTheme.transitions.easing.easeIn
      : $muiTheme.transitions.easing.sharp};
`

const StickyTabs = styled(StickyDiv)`
  height: 48px;
  top: ${({ $isAppBarVisible }) => ($isAppBarVisible ? APP_BAR_HEIGHT : 0)}px;
`

const StickyCategoryChipList = styled(StickyDiv)`
  height: 60px;
  top: ${({ $isAppBarVisible }) =>
    $isAppBarVisible ? APP_BAR_HEIGHT + TABS_HEIGHT : TABS_HEIGHT}px;
`

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}

export default function Menu() {
  const theme = useTheme()

  const { activeTabIndex, handleTabChange } = useMenuData()
  const { shouldShowAppBar } = useAppBarStatus()
  const verticalScrollTo = useVerticalScrollTo()

  const deliveryRuleRef = useRef()
  const menuBodyRef = useRef()
  const shouldScrollAfterTabSwitchedRef = useRef(false)

  const handleChange = (_event, newValue) => {
    const { bottom } = deliveryRuleRef.current.getBoundingClientRect()
    shouldScrollAfterTabSwitchedRef.current = shouldShowAppBar
      ? bottom < CATEGORY_HEIGHT + APP_BAR_HEIGHT
      : bottom < CATEGORY_HEIGHT
    handleTabChange(newValue)
  }

  useEffect(() => {
    const callback = (mutationList) => {
      if (
        mutationList.length > 0 &&
        menuBodyRef.current &&
        shouldScrollAfterTabSwitchedRef.current
      ) {
        const { bottom } = menuBodyRef.current.getBoundingClientRect()
        verticalScrollTo(bottom)
      }
    }
    const observer = new MutationObserver(callback)

    const el = deliveryRuleRef.current
    if (el) {
      observer.observe(el, {
        attributes: true,
        childList: false,
        subtree: false,
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [shouldShowAppBar, verticalScrollTo])

  const [reset, forceRerender] = useState({})
  const { registerForceRerenderFn } = useCategoryInView()
  useEffect(() => {
    registerForceRerenderFn(() => forceRerender({}))
  }, [registerForceRerenderFn, forceRerender])

  return (
    <>
      <Announcement
        title="公告"
        announcement="為提升各店家肉品及物料採購商品之效率，此公告將明列各品項物料現階段採購時程，以期各店能準時採購且準時收到貨品。 為提升各店家肉品及物料採購商品之效率，此公告將明列各品項物料現階段採購時程，以期各店能準時採購且準時收到貨品。"
        defaultExpanded={false}
      />

      <StickyTabs $isAppBarVisible={shouldShowAppBar} $muiTheme={theme}>
        <Tabs
          value={activeTabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs for suppliers"
        >
          {Array.from(suppliers).map(([supplierUuid, { supplier }]) => (
            <Tab
              key={supplierUuid}
              label={supplier.name}
              {...a11yProps(supplier.name)}
            />
          ))}
        </Tabs>
      </StickyTabs>

      <Box ref={deliveryRuleRef} data-tabidx={activeTabIndex}>
        <DeliveryRule />
      </Box>

      <StickyCategoryChipList
        $isAppBarVisible={shouldShowAppBar}
        $muiTheme={theme}
      >
        <CategoryChipList />
      </StickyCategoryChipList>

      <span ref={menuBodyRef} />

      <Box my={1}>
        <List>
          {Array.from(suppliers).map(
            ([supplierUuid, { categories }], index) => (
              <TabPanel key={supplierUuid} value={activeTabIndex} index={index}>
                {Array.from(categories).map(
                  ([categoryId, { category, products }]) => (
                    <Category
                      key={categoryId}
                      category={category}
                      reset={reset}
                    >
                      {products.map((product) => (
                        <Product key={product.uuid} product={product} />
                      ))}
                    </Category>
                  )
                )}
              </TabPanel>
            )
          )}
        </List>
      </Box>
    </>
  )
}
