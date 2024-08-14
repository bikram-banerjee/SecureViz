package com.cdac.project.backend.service;


import com.cdac.project.backend.exception.ResourceNotFoundException;
import com.cdac.project.backend.model.User;
import com.cdac.project.backend.model.UserDashBoard;
import com.cdac.project.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> updateUser(Long id, User userDetails) {
            User user1 = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Admin Does not exists with id: " + id));
            user1.setUemail(userDetails.getUemail());
            user1.setUemail(userDetails.getUpass());

            User updatedUser = userRepository.save(user1);
            return Optional.of(updatedUser);
    }

    @Override
    public boolean deleteUser(Long id) {
        return userRepository.findById(id).map(user -> {
            userRepository.delete(user);
            return true;
        }).orElse(false);
    }

    @Override
    public Boolean loginIn(User user) {
        User user1 = userRepository.findByEmail(user.getUemail());
        if(user1 != null && user.getUpass().equals(user1.getUpass())){
            return true;
        }
        return false;
    }
    @Override
    public Boolean viewDashboard(UserDashBoard userDashBoard){
        if(userDashBoard.getIsLoggedIn()){
            return true;
        }
        return false;
    }
}
