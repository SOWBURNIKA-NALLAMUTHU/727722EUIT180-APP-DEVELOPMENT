package com.example.petsback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.petsback.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
}