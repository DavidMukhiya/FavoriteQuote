package com.david.favoritequote.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

//id, quote, author, category
@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "tbl_quote")
public class Quote {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String quote;
    private String author;
    private String category;


}
