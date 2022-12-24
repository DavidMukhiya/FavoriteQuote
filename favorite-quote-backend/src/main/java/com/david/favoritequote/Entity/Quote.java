package com.david.favoritequote.Entity;

import javax.persistence.*;

@Entity
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String quote;
    private String author;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;



    public Quote() {
    }

    public Quote(int id, String quote, String author, Category category) {
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.category = category;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}