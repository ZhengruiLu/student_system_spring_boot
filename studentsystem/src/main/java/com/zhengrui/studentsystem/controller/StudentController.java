package com.zhengrui.studentsystem.controller;

import com.zhengrui.studentsystem.model.Student;
import com.zhengrui.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//intro
// the controller class is responsible for processing incoming REST API requests,
// preparing a model, and returning the view to be rendered as a response


//@RestController extends the capabilities of both the @Controller and @ResponseBody annotations
//allow a class to be recognized as a Spring-managed component and to allow handling of HTTP requests using REST API.
@RestController

@RequestMapping("/student") //for mapping

//intro
//for connection: let frontend input data access to localhost POST
//controller is for mapping all the methods we will be implementing

@CrossOrigin
public class StudentController {
    @Autowired //automatically inject dependencies of the specified type into the current bean
    //the StudentRepository bean is injected as a dependency of StudentController
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
}
