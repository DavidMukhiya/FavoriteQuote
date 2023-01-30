import axios from "axios";

const QUOTE_CATEGORIES_BASE_REST_API_URL =
  "http://localhost:9090/api/categories/";

class CategoryService {
  getAllCategory() {
    return axios.get(QUOTE_CATEGORIES_BASE_REST_API_URL);
  }

  addCategory() {
    //return axios.post(QUOTE_CATEGORIES_BASE_REST_API_URL + "/category" + categoryID , quote)
  }
}

export default new CategoryService();
