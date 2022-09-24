const createSupplier = (supplier) => ({
  supplier,
  categories: new Map(),
})

const createCategory = (category) => ({
  category,
  products: [],
})

const parseProducts = (products) =>
  products.reduce(
    (acc, curr) => {
      const { category, supplier } = curr

      if (!acc.get("all").categories.has(category.uuid)) {
        acc.get("all").categories.set(category.uuid, createCategory(category))
      }
      acc.get("all").categories.get(category.uuid).products.push(curr)

      if (!acc.has(supplier.uuid)) {
        acc.set(supplier.uuid, createSupplier(supplier))
      }
      if (!acc.get(supplier.uuid).categories.has(category.uuid)) {
        acc
          .get(supplier.uuid)
          .categories.set(category.uuid, createCategory(category))
      }
      acc.get(supplier.uuid).categories.get(category.uuid).products.push(curr)

      return acc
    },
    new Map([
      [
        "all",
        createSupplier({
          uuid: "this-is-a-fake-uuid-for-all-suppliers",
          name: "全部",
        }),
      ],
    ])
  )

export default parseProducts
