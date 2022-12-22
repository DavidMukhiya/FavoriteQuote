package com.david.favoritequote.Service;

import com.david.favoritequote.Dao.CategoryDao;
import com.david.favoritequote.Entity.Category;
import com.david.favoritequote.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryDao categoryDao;

    @Override
    public List<Category> getAllCategory() {
        return this.categoryDao.findAll();
    }

    @Override
    public Category getCategoryByID(int categoryID) {
        return this.categoryDao.findById(categoryID).orElseThrow(()-> new ResourceNotFoundException("Quote Category","Category ID", categoryID));
    }

    @Override
    public ResponseEntity<Category> addCategory(Category category) {
        Category newCategory = this.categoryDao.save(category);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Category> updateCategory(int categoryID, Category category) {
        Category updateCategory = this.categoryDao.findById(categoryID).orElseThrow(()-> new ResourceNotFoundException("Quote Category", "Category ID", categoryID));
        updateCategory.setCategoryTitle(category.getCategoryTitle());
        updateCategory.setCategoryID(category.getCategoryID());
        updateCategory.setCategoryDescription(category.getCategoryDescription());
        this.categoryDao.save(updateCategory);
        return new ResponseEntity<>(updateCategory, HttpStatus.OK);
    }

    @Override
    public String deleteCategory(int categoryID) {
        Category deleteCategory = this.categoryDao.findById(categoryID).orElseThrow(()-> new ResourceNotFoundException("Quote Category", "Category ID", categoryID));
        this.categoryDao.deleteById(categoryID);
        return "Category Quote with Category ID: "+categoryID+" is deleted";
    }
}
