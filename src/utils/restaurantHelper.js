export const getTopRestaurants = (restaurantList) => {
  return restaurantList.filter((res) => res.info.avgRating >= 4);
};
