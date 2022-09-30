import { v4 as uuidv4 } from "uuid"

const generateCategory = ({ name }) => ({
  uuid: uuidv4(),
  name,
})

const generateSupplier = ({ name }) => ({
  uuid: uuidv4(),
  name,
  displayName: name,
})

const generateProduct = ({
  name = "default product name",
  description = "default product description",
  imageUrl = "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
  salePrice = "1280",
  supplier,
  category,
}) => ({
  uuid: uuidv4(),
  name,
  imageUrl,
  description,
  salePrice,
  supplier,
  category,
})

const category1 = generateCategory({ name: "category 1" })
const category2 = generateCategory({ name: "category 2" })
const category3 = generateCategory({ name: "category 3" })
const category4 = generateCategory({ name: "category 4" })
const category5 = generateCategory({ name: "category 5" })
const category6 = generateCategory({ name: "category 6" })

const supplier1 = generateSupplier({ name: "supplier 1" })
const supplier2 = generateSupplier({ name: "supplier 2" })
const supplier3 = generateSupplier({ name: "supplier 3" })
const supplier4 = generateSupplier({ name: "supplier 4" })
const supplier5 = generateSupplier({ name: "supplier 5" })

const data = [
  generateProduct({ category: category1, supplier: supplier1 }),
  generateProduct({ category: category1, supplier: supplier2 }),
  generateProduct({ category: category1, supplier: supplier3 }),
  generateProduct({ category: category1, supplier: supplier4 }),
  generateProduct({ category: category1, supplier: supplier5 }),
  generateProduct({ category: category1, supplier: supplier1 }),
  generateProduct({ category: category2, supplier: supplier2 }),
  generateProduct({ category: category2, supplier: supplier3 }),
  generateProduct({ category: category2, supplier: supplier4 }),
  generateProduct({ category: category2, supplier: supplier5 }),
  generateProduct({ category: category2, supplier: supplier1 }),
  generateProduct({ category: category2, supplier: supplier2 }),
  generateProduct({ category: category3, supplier: supplier3 }),
  generateProduct({ category: category3, supplier: supplier4 }),
  generateProduct({ category: category3, supplier: supplier5 }),
  generateProduct({ category: category3, supplier: supplier1 }),
  generateProduct({ category: category3, supplier: supplier2 }),
  generateProduct({ category: category3, supplier: supplier3 }),
  generateProduct({ category: category4, supplier: supplier4 }),
  generateProduct({ category: category4, supplier: supplier5 }),
  generateProduct({ category: category4, supplier: supplier1 }),
  generateProduct({ category: category4, supplier: supplier2 }),
  generateProduct({ category: category4, supplier: supplier3 }),
  generateProduct({ category: category4, supplier: supplier4 }),
  generateProduct({ category: category4, supplier: supplier5 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier1 }),
  generateProduct({ category: category6, supplier: supplier1 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
  generateProduct({ category: category5, supplier: supplier2 }),
  generateProduct({ category: category6, supplier: supplier2 }),
]

export default data
