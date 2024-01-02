const shopByCategory = [
  {
    categoryTitle: "Category 1",
    dropDownIcon: "true",
    subCategory: [
      { categoryTitle: "Subtitle 1" },
      { categoryTitle: "Subtitle 2" },
      { categoryTitle: "Subtitle 3" },
    ],
  },
  {
    categoryTitle: "Category 2",
  },
  {
    categoryTitle: "Category 3",
    dropDownIcon: "true",
    subCategory: [
      { categoryTitle: "Subtitle 3.1" },
      { categoryTitle: "Subtitle 3.2" },
      { categoryTitle: "Subtitle 3.3" },
    ],
  },
  {
    categoryTitle: "Category 4",
  },
  {
    categoryTitle: "Category 5",
  },
];
const shopByColor = [
  { categoryTitle: "Color 1", color: "#262626" },
  { categoryTitle: "Color 2", color: "#FF8686" },
  { categoryTitle: "Color 3", color: "#7ED321" },
  { categoryTitle: "Color 4", color: "#B6B6B6" },
  { categoryTitle: "Color 5", color: "#15CBA5" },
];
const shopByBrand = [
  { categoryTitle: "Brand 1" },
  { categoryTitle: "Brand 2" },
  { categoryTitle: "Brand 3" },
  { categoryTitle: "Brand 4" },
  { categoryTitle: "Brand 5" },
];
const shopByPrice = [
  { categoryTitle: "$0.00-$9.99" },
  { categoryTitle: "$10.00-$19.99" },
  { categoryTitle: "$20.00-$29.99" },
  { categoryTitle: "$30.00-$39.99" },
  { categoryTitle: "$40.00-$59.99" },
];

export { shopByCategory, shopByColor, shopByBrand, shopByPrice };
