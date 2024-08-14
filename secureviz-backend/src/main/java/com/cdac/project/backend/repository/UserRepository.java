package com.cdac.project.backend.repository;

import com.cdac.project.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT o FROM User o WHERE o.uemail = ?1")
    User findByEmail(String uemail);
    // Find a user by their Username
    // Optional<User> findByUsername(String username);
}