package com.david.favoritequote.Service;

import com.david.favoritequote.Dao.QuoteDao;
import com.david.favoritequote.Entity.Quote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class QuoteServiceImpl implements QuoteService{

    @Autowired
    private QuoteDao quoteDao;
    @Override
    public List<Quote> getAllQuote() {
        return this.quoteDao.findAll();
    }

    @Override
    public Quote getQuoteByID(int quoteID) {
        return null;
    }

    @Override
    public Quote addQuote(Quote quote) {
        return null;
    }

    @Override
    public ResponseEntity<Quote> updateQuote(int quoteID, Quote quote) {
        return null;
    }

    @Override
    public String deleteQuote(int quoteID) {
        return null;
    }
}
