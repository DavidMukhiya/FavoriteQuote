package com.david.favoritequote.Dao;

import com.david.favoritequote.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDao extends JpaRepository<Category,Integer> {

}
