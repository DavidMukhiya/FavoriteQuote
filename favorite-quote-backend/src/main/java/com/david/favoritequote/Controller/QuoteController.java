package com.david.favoritequote.Controller;

import com.david.favoritequote.Dao.CategoryDao;
import com.david.favoritequote.Entity.Category;
import com.david.favoritequote.Entity.Quote;
import com.david.favoritequote.Service.CategoryService;
import com.david.favoritequote.Service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/quotes")
public class QuoteController {


    @Autowired
    private QuoteService quoteService;

    //GET - Getting list of  Quote
    @GetMapping
    public List<Quote> getAllQuote(){
        return this.quoteService.getAllQuote();
    }

    //GET - Getting quote by id
    @GetMapping("{quoteID}")
    public Quote getQuoteByID(@PathVariable Integer quoteID){
        return this.quoteService.getQuoteByID(quoteID);
    }

    //POST-Create Quote
    @PostMapping("/category/{categoryID}/quotes")
    public ResponseEntity<Quote> addQuotes(@RequestBody Quote quote, @PathVariable int CategoryID){
        return this.quoteService.addQuote(quote, CategoryID);
    }

    //PUT - Update Quote
    @PutMapping("{quoteID}")
    public ResponseEntity<Quote> updateQuote(@PathVariable Integer quoteID, @RequestBody Quote quote) {
        return this.quoteService.updateQuote(quoteID, quote);
    }

    //DELETE - Delete Quote
    @DeleteMapping("/{quoteID}")
    public String deleteQuoteByID(@PathVariable String quoteID){
        return this.quoteService.deleteQuote(Integer.parseInt(quoteID));
    }
}
