package com.david.favoritequote.Service;

import com.david.favoritequote.Entity.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CategoryService {
    List<Category> getAllCategory();

    Category getCategoryByID(int categoryID);

    ResponseEntity<Category> addCategory(Category category);

    ResponseEntity<Category> updateCategory(int categoryID, Category category);

    String deleteCategory(int categoryID);
}
