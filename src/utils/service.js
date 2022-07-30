import { apiEndPoint } from "../constants";

const ServiceApi = {
  getCategoryDataApi: categoryName =>
    fetch(apiEndPoint.categortyApi.replace("{categoryId}", categoryName))
      .then(response => response.json())
      .catch(error => ({ error })),
  getProductDataApi: productId =>
    fetch(apiEndPoint.productApi.replace("{productId}", productId))
      .then(response => response.json())
      .catch(error => ({ error })),
};

export default ServiceApi;
