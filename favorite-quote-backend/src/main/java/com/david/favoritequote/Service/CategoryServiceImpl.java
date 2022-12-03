package com.david.favoritequote.Service;

import com.david.favoritequote.Entity.Category;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class CategoryServiceImpl implements CategoryService {
    @Override
    public List<Category> getAllCategory() {
        return null;
    }

    @Override
    public Category getCategoryByID(int categoryID) {
        return null;
    }

    @Override
    public Category addCategory(Category category) {
        return null;
    }

    @Override
    public ResponseEntity<Category> updateCategory(int categoryID, Category category) {
        return null;
    }

    @Override
    public String deleteCategory(int categoryID) {
        return null;
    }
}
