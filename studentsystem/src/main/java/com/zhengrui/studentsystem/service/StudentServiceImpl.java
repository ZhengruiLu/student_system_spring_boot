package com.zhengrui.studentsystem.service;

import com.zhengrui.studentsystem.model.Student;
import com.zhengrui.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//intro
//a class file that includes the @Service annotation and allows developers to add business functionalities

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired //automatically inject dependencies of the specified type into the current bean
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
}
