package com.david.favoritequote.Dao;

import com.david.favoritequote.Entity.Category;
import com.david.favoritequote.Entity.Quote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuoteDao extends JpaRepository<Quote, Integer> {
    List<Quote> findByCategory(Category category);
}
