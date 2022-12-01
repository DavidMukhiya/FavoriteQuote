package com.david.favoritequote.Dao;

import com.david.favoritequote.Entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteDao extends JpaRepository<Quote, Integer> {

}
