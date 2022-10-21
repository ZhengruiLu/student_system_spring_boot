package com.zhengrui.studentsystem.repository;
//this package is for JPA impletation

import com.zhengrui.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

//intro
//database repository is a mechanism for encapsulating storage, retrieval, and search behavior which emulates a collection of objects

//create a database
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
