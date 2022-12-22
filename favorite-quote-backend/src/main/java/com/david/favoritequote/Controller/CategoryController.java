package com.david.favoritequote.Controller;

import com.david.favoritequote.Entity.Category;
import com.david.favoritequote.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //GET - Getting list of  Category
    @GetMapping
    public List<Category> getAllCategory(){
        return this.categoryService.getAllCategory();
    }

    //GET - Getting category by id
    @GetMapping("{categoryID}")
    public Category getCategoryByID(@PathVariable Integer categoryID){
        return this.categoryService.getCategoryByID(categoryID);
    }

    //POST-Create Category
    @PostMapping
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        return this.categoryService.addCategory(category);
    }

    //PUT - Update Category
    @PutMapping("{categoryID}")
    public ResponseEntity<Category> updateCategory(@PathVariable Integer categoryID, @RequestBody Category category) {
        return this.categoryService.updateCategory(categoryID, category);
    }

    //DELETE - Delete Category
    @DeleteMapping("/{categoryID}")
    public String deleteCategoryByID(@PathVariable String categoryID){
        return this.categoryService.deleteCategory(Integer.parseInt(categoryID));
    }
}
