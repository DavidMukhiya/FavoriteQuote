import axios from 'axios'

const QUOTE_BASE_REST_API_URL = 'http://localhost:9090/api/quotes/';

class QuoteService{
    getAllQuotes(){
        return axios.get(QUOTE_BASE_REST_API_URL)
    }
}

export default new QuoteService();