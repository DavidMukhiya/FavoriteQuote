package com.david.favoritequote.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

//id, quote, author, category
@Entity
@NoArgsConstructor
@Getter
@Setter
public class Quote {
    private int id;
    private String quote;
    private String author;
    private String category;


}
