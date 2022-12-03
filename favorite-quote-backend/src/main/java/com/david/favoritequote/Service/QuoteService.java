package com.david.favoritequote.Service;

import com.david.favoritequote.Dao.QuoteDao;
import com.david.favoritequote.Entity.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuoteService {


    List<Quote> getAllQuote();

    Quote getQuoteByID(int quoteID);

    Quote addQuote(Quote quote);

    ResponseEntity<Quote> updateQuote(int quoteID, Quote quote);

    String deleteQuote(int quoteID);
}
