package com.example.petsback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.petsback.model.Contact;
import com.example.petsback.service.ContactService;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}
