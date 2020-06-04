export const fetchIndicators = () => {
  return $.ajax({
    method: "GET",
    url: "/api/indicators",
  });
};
