package com.cdac.project.backend.service;



import com.cdac.project.backend.model.User;
import com.cdac.project.backend.model.UserDashBoard;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User createUser(User user);
    Optional<User> updateUser(Long id, User userDetails);
    boolean deleteUser(Long id);
    Boolean loginIn(User user);
    Boolean viewDashboard(UserDashBoard userDashBoard);
}
