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
]

// const data = [
//   {
//     uuid: "461e77a9-8051-43ea-9938-74950b60670d",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "462100cb-da37-4b5f-b39a-87e8e0cb498e",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總部",
//       displayName: "總部",
//       uuid: "b21c89bd-e725-4181-bc53-b75bc1be04a3",
//     },
//     category: {
//       name: "商品類別 aaaaaaa",
//       uuid: "a790e050-86c8-480b-a748-4294af8e7843",
//     },
//   },
//   {
//     uuid: "21981f51-e52d-46b7-b5ad-7bfb0507c5e5",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-4",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "1b6bf520-6be0-4658-bdee-6d7e09e6595d",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總部",
//       displayName: "總部",
//       uuid: "b21c89bd-e725-4181-bc53-b75bc1be04a3",
//     },
//     category: {
//       name: "商品類別 aaaaaaa",
//       uuid: "a790e050-86c8-480b-a748-4294af8e7843",
//     },
//   },
//   {
//     uuid: "2b3804ee-6b14-49f1-83a7-2e796e8d9f27",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-3",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "76538260-4be8-418c-acc5-dfafb81f823d",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總部",
//       displayName: "總部",
//       uuid: "b21c89bd-e725-4181-bc53-b75bc1be04a3",
//     },
//     category: {
//       name: "商品類別 aaaaaaa",
//       uuid: "a790e050-86c8-480b-a748-4294af8e7843",
//     },
//   },
//   {
//     uuid: "07b7d3a2-3dfa-4e54-a12f-f800793c3003",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-2",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "029aae0d-b50a-4309-a536-f7f89770b73c",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總部",
//       displayName: "總部",
//       uuid: "b21c89bd-e725-4181-bc53-b75bc1be04a3",
//     },
//     category: {
//       name: "商品類別 aaaaaaa",
//       uuid: "a790e050-86c8-480b-a748-4294af8e7843",
//     },
//   },
//   {
//     uuid: "b5a0e567-69c1-495b-bfeb-1df1a2bceb54",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "4f222f12-ca3c-46d0-a2c5-5fa1b3226921",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 bbbbbbb",
//       uuid: "1eba4b66-8915-478c-9a0a-ebf06c045c5d",
//     },
//   },
//   {
//     uuid: "3a88f581-880c-4d13-87bb-f6119924f5f9",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-4",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "8e7e74f3-5dea-4426-b8bd-cc8d19848fb4",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 bbbbbbb",
//       uuid: "1eba4b66-8915-478c-9a0a-ebf06c045c5d",
//     },
//   },
//   {
//     uuid: "b49d9130-681f-49d8-bfc2-785db0663c57",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-3",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "dcf3b8fa-a8ea-4f60-8883-fe16346071e1",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 bbbbbbb",
//       uuid: "1eba4b66-8915-478c-9a0a-ebf06c045c5d",
//     },
//   },
//   {
//     uuid: "833d33ad-f24a-4720-a844-d4969a4a7cad",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-2",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "c573117f-4b63-4123-aa22-f2b8d825682b",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 bbbbbbb",
//       uuid: "1eba4b66-8915-478c-9a0a-ebf06c045c5d",
//     },
//   },
//   {
//     uuid: "29aeab05-4fe7-4d15-b99e-a2f8ac28d879",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "a5f16951-9b7a-4a9b-873c-b866d9ee584b",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "937f13b7-4f1a-4471-9271-7ad92e8c01a0",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-6",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "2ef5fa2d-828d-47f0-b348-0e793713de67",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "7105e3b3-dd5a-449a-b966-d7df4e5b6660",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-5",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "e1b87de8-7c3e-4a77-9e14-8e9f1af1ad23",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "26a6f889-4df6-473c-8816-876324427910",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-4",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "e432e12c-3b11-4ded-a1f7-31cab2bd9ee1",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "68afacc3-23f3-429c-a638-a6f0960d5865",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-3",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "75260efd-b381-4a6a-bfa5-b68568468576",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "ee75ff9c-3c28-4c40-9653-740d9423782c",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-2",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "55bae111-cb68-48db-995e-6648f0ada52c",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
//   {
//     uuid: "e6a15cf9-c34b-4c4c-abd5-99614c693d1b",
//     imageUrl:
//       "https://ichef-images.s3.ap-northeast-1.amazonaws.com/default-product-image.svg",
//     name: "123-複製-1-複製-1-複製-1",
//     description: "product description",
//     importPrice: "123",
//     salePrice: "123",
//     itemInShops: [
//       {
//         status: "FOR_SELL",
//         uuid: "6748bd02-3fa1-43ba-8ece-4047cbe18ef9",
//         shop: {
//           uuid: "a2cab584-037b-4565-846f-ee24ae6bf470",
//         },
//       },
//     ],
//     minOrderQuantity: 1,
//     orderIncrementalQuantity: 1,
//     refrigeration: "REFRIGERATOR",
//     sku: "",
//     stockQuantity: 0,
//     stockThresholdQuantity: 0,
//     unitDescription: "123",
//     taxType: "TX",
//     supplier: {
//       name: "總你老部",
//       displayName: "",
//       uuid: "71b15d51-7eb6-4d42-8117-8fc689bcd4e9",
//     },
//     category: {
//       name: "商品類別 ccccccc",
//       uuid: "14f30f03-9476-47dc-8ead-9f6c31ee8adb",
//     },
//   },
// ]

export default data
