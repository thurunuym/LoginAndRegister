package com.example.sportsCenterLogin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sportsCenterLogin.model.User;
import com.example.sportsCenterLogin.service.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from React app
@RequestMapping("api/users")
public class UserController {

    @Autowired
     private UserService userService;
  
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(){
       
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
       
    
    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        User RegisteredUser = userService.RegisterUser(user);
        return ResponseEntity.ok(RegisteredUser);
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user)
    {
        User authenticatedUser = userService.authenticateUser(user.getEmail(), user.getPassword());

        if (authenticatedUser!=null){
            return ResponseEntity.ok("Login succesfull");
        }
        return ResponseEntity.status(401).body("Invalid credentials");

    }
  

}
    


