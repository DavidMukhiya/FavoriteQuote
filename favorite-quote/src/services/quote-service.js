import axios from "axios";

const QUOTE_BASE_REST_API_URL = "http://localhost:9090/api/quotes/";

class QuoteService {
  getAllQuotes() {
    return axios.get(QUOTE_BASE_REST_API_URL);
  }

  // addQuote(quote){
  //     return axios.post(QUOTE_BASE_REST_API_URL, quote)
  // }

  addQuote(quote) {
    console.log(quote);
    return axios.post(
      `${QUOTE_BASE_REST_API_URL}category/${quote.categoryID}/`,
      quote
    );
  }

  getQuoteByID(quoteID) {
    return axios.get(`${QUOTE_BASE_REST_API_URL}`, quoteID);
  }

  updateQuote(quoteID, quote) {
    return axios.put(QUOTE_BASE_REST_API_URL + quoteID, quote);
  }

  deleteQuote(quoteID) {
    return axios.delete(QUOTE_BASE_REST_API_URL + quoteID);
  }
}

export default new QuoteService();
