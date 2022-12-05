package com.david.favoritequote.Controller;

import com.david.favoritequote.Entity.Quote;
import com.david.favoritequote.Service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {


    @Autowired
    private QuoteService quoteService;

    //GET - Getting list of  Quote
    @GetMapping("/")
    public List<Quote> getAllQuote(){
        return this.quoteService.getAllQuote();
    }

    //GET - Getting quote by id
    @GetMapping("/{quoteID}")
    public Quote getQuoteByID(@PathVariable String quoteID){
        return this.quoteService.getQuoteByID(Integer.parseInt(quoteID));
    }

    //POST-Create Quote
    @PostMapping("/")
    public ResponseEntity<Quote> addQuote(@RequestBody Quote quote){
        return this.quoteService.addQuote(quote);
    }

    //PUT - Update Quote
    @PutMapping("/{quoteID}")
    public ResponseEntity<Quote> updateQuote(@PathVariable Integer quoteID, @RequestBody Quote quote) {
        return this.quoteService.updateQuote(quoteID, quote);
    }

    //DELETE - Delete Quote
    @DeleteMapping("/{quoteID}")
    public String deleteQuoteByID(@PathVariable String quoteID){
        return this.quoteService.deleteQuote(Integer.parseInt(quoteID));
    }
}
