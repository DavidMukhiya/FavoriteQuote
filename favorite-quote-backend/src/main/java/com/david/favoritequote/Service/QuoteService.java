package com.david.favoritequote.Service;

import com.david.favoritequote.Entity.Quote;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface QuoteService {


    List<Quote> getAllQuote();

    Quote getQuoteByID(int quoteID);

    ResponseEntity<Quote> addQuote(Quote quote, Integer categoryID);

    ResponseEntity<Quote> updateQuote(int quoteID, Quote quote);

    String deleteQuote(int quoteID);

    //get all post by category
    List<Quote> getQuoteByCategory(Integer categoryID);

    List<Quote> searchQuote(String keyword);
}
