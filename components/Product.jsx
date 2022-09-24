import React from "react"
import styled from "styled-components"

import { ListItem, Box, Typography, Badge } from "@material-ui/core"

const ProductName = styled(Typography).attrs({ variant: "body1" })`
  &&& {
    color: #454f5b;
  }
`

const ProductDescription = styled(Typography).attrs({ variant: "body2" })`
  &&& {
    color: #8b929a;
  }
`

const ProductSalePrice = styled(Typography).attrs({
  variant: "body2",
  color: "primary",
})``

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`

export default function Product({ product, productInCart = 0 }) {
  return (
    <ListItem>
      <Box display="flex" width="100%">
        <Box flexGrow={1}>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductSalePrice>
            {/* TODO: add wrap salePrice with thousand separator */}
            NT${product.salePrice}
          </ProductSalePrice>
        </Box>
        {/* TODO: get product in cart number from API */}
        <Badge badgeContent={productInCart} color="primary">
          <Box width={64} height={64}>
            <ProductImage alt={product.name} src={product.imageUrl} />
          </Box>
        </Badge>
      </Box>
    </ListItem>
  )
}
