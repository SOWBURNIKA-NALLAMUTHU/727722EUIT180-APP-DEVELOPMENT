package com.example.petsback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petsback.model.User;
import com.example.petsback.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}