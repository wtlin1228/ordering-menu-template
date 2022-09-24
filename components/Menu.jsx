import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {
  useScrollTrigger,
  useTheme,
  List,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core"
import TabPanel from "./TabPanel"

import Category from "./Category"
import Product from "./Product"
import parseProducts from "../utils/parseProducts"
import mockProducts from "../data/products"
import { useMenuData } from "./MenuDataProvider"
import CategoryChipList from "./CategoryChipList"
import { useCategoryInView } from "./CategoryInViewProvider"
import Announcement from "./Announcement"
import DeliveryRule from "./DeliveryRule"

const suppliers = parseProducts(mockProducts)

const StickyNavigationBar = styled.div`
  background-color: white;
  z-index: 10;
  height: 100px;
  position: sticky;
  top: ${({ $isAppBarVisible }) => ($isAppBarVisible ? 0 : "56px")};
  will-change: top;
  transition: top 0.15s;
  transition-delay: ${({ $isAppBarVisible }) =>
    $isAppBarVisible ? 0 : "0.2s"};
  transition-timing-function: ${({ $isAppBarVisible, $muiTheme }) =>
    $isAppBarVisible
      ? $muiTheme.transitions.easing.sharp
      : $muiTheme.transitions.easing.easeIn};
`

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  }
}

export default function Menu() {
  const theme = useTheme()
  const isAppBarVisible = useScrollTrigger()
  const { activeTabIndex, handleTabChange } = useMenuData()

  const handleChange = (event, newValue) => {
    handleTabChange(newValue)
    scrollTo(0, 0)
  }

  const [reset, forceRerender] = useState({})
  const { registerForceRerenderFn } = useCategoryInView()
  useEffect(() => {
    registerForceRerenderFn(() => forceRerender({}))
  }, [registerForceRerenderFn, forceRerender])

  return (
    <>
      {activeTabIndex === 0 ? (
        <Announcement
          title="公告"
          announcement="為提升各店家肉品及物料採購商品之效率，此公告將明列各品項物料現階段採購時程，以期各店能準時採購且準時收到貨品。 為提升各店家肉品及物料採購商品之效率，此公告將明列各品項物料現階段採購時程，以期各店能準時採購且準時收到貨品。"
          defaultExpanded={false}
        />
      ) : (
        <Box>
          <DeliveryRule />
        </Box>
      )}
      <StickyNavigationBar $isAppBarVisible={isAppBarVisible} $muiTheme={theme}>
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
        <CategoryChipList />
      </StickyNavigationBar>

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
