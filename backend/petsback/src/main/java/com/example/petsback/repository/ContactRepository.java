package com.example.petsback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.petsback.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
