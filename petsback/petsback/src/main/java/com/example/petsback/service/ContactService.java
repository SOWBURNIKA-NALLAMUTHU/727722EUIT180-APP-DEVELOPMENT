package com.example.petsback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.petsback.model.Contact;

@Service
public class ContactService {

    @Autowired
    private com.example.petsback.repository.ContactRepository contactRepository;

    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }
}
