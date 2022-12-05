package com.david.favoritequote.Service;

import com.david.favoritequote.Entity.Quote;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface QuoteService {


    List<Quote> getAllQuote();

    Quote getQuoteByID(int quoteID);

    ResponseEntity<Quote> addQuote(Quote quote);

    ResponseEntity<Quote> updateQuote(int quoteID, Quote quote);

    String deleteQuote(int quoteID);
}
