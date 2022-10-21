package com.zhengrui.studentsystem.service;

import com.zhengrui.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
