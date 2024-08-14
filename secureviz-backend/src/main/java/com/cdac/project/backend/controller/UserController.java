package com.cdac.project.backend.controller;

import com.cdac.project.backend.model.User;
import com.cdac.project.backend.model.UserDashBoard;
import com.cdac.project.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/signup")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        Optional<User> updatedUser = userService.updateUser(id, userDetails);
        return updatedUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean deleted = userService.deleteUser(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginIn(@RequestBody User user) {
        if (userService.loginIn(user)) {
            return ResponseEntity.ok(user);
        }
        return new ResponseEntity<>(user, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/dashboard")
    public ResponseEntity<UserDashBoard> viewDashboard(@RequestBody UserDashBoard userDashBoard) {
        if(userService.viewDashboard(userDashBoard)){
            return ResponseEntity.ok(userDashBoard);
        }
        return ResponseEntity.badRequest().build();
    }
}

