package com.example.sportsCenterLogin.service;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.sportsCenterLogin.model.User;
import com.example.sportsCenterLogin.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
   // @Autowired
    //private BCryptPasswordEncoder passwordEncoder;


    public User RegisterUser(User user) {
        
        return userRepository.save(user);
    }

    public List<User> getAllUsers(){
		return userRepository.findAll();
	}


    public User authenticateUser(String email, String password) {
        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
        return user;
    }
        return null;
    }
}
