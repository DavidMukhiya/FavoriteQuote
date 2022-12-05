package com.david.favoritequote.Service;

import com.david.favoritequote.Dao.QuoteDao;
import com.david.favoritequote.Entity.Quote;
import com.david.favoritequote.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteServiceImpl implements QuoteService{
    @Autowired
    private QuoteDao quoteDao;

    @Override
    public List<Quote> getAllQuote() {
        return this.quoteDao.findAll();
    }

    @Override
    public Quote getQuoteByID(int quoteID) {
        Quote quote = this.quoteDao.findById(quoteID).orElseThrow(()->new ResourceNotFoundException("Quote", "ID", quoteID));
        return quote;
    }

    @Override
    public ResponseEntity<Quote> addQuote(Quote quote) {
        Quote newQuote = this.quoteDao.save(quote);
        return new ResponseEntity<>(newQuote, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Quote> updateQuote(int quoteID, Quote quote) {
        Quote updateQuote = this.quoteDao.findById(quoteID).orElseThrow(()-> new ResourceNotFoundException("Quote", "ID", quoteID));
        updateQuote.setQuote(quote.getQuote());
        updateQuote.setAuthor(quote.getAuthor());
        updateQuote.setCategory(quote.getCategory());
        this.quoteDao.save(updateQuote);
        return ResponseEntity.ok(updateQuote);
    }

    @Override
    public String deleteQuote(int quoteID) {
        Quote deleteQuote = this.quoteDao.findById(quoteID).orElseThrow(()-> new ResourceNotFoundException("Quote", "ID", quoteID));
        this.quoteDao.deleteById(quoteID);
        return "Quote with ID: "+quoteID+" is deleted";
    }
}
