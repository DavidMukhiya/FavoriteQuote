package com.david.favoritequote.Entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "categories")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer categoryID;
    @Column(name = "title")
    private String categoryTitle;
    @Column(name = "description")
    private String categoryDescription;
}
