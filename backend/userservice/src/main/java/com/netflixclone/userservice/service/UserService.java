package com.netflixclone.userservice.service;

import com.netflixclone.userservice.model.User;
import com.netflixclone.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
//    @Autowired
//    private UserRepository userRepository;
//
//    // Get all users
//    public List<User> getAllUsers() {
//        return userRepository.findAll();
//    }
//
//    // Get a user by ID
//    public Optional<User> getUserById(Long id) {
//        return userRepository.findById(id);
//    }
//
//    // Create a new user
//    public User createUser(User user) {
//        return userRepository.save(user);
//    }
//
//    // Update a user
//    public Optional<User> updateUser(Long id, User userDetails) {
//        return userRepository.findById(id).map(user -> {
//            user.setUsername(userDetails.getUsername());
//            user.setEmail(userDetails.getEmail());
//            user.setPassword(userDetails.getPassword()); // Password should be hashed!
//            return userRepository.save(user);
//        });
//    }
//
//    // Delete a user
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
}
