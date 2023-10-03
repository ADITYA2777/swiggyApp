

export function filterData(SearchText, restaruant) {
  const filterData = restaruant.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}