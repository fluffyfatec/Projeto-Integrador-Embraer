package com.embraer.backend.login;

import com.embraer.backend.jwt.AuthenticationResponse;
import com.embraer.backend.jwt.JwtRequest;
import com.embraer.backend.jwt.JwtResponse;
import com.embraer.backend.jwt.JwtTokenUtil;
import com.embraer.backend.security.CustomAuthenticationProvider;
import com.embraer.backend.security.UserDetailsServiceImpl;
import com.embraer.backend.user.dto.UserLoginDto;
import com.embraer.backend.user.entity.User;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.UserAuthenticatedController;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@RestController
@RequestMapping
public class LoginController {

    @Autowired
    private CustomAuthenticationProvider authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserSession userSession;

        @CrossOrigin
        @PostMapping("/login-user")
        public ResponseEntity<?> login(@RequestBody UserLoginDto userLoginDto) {
            try {
                authenticationManager.authenticate(userLoginDto);

            } catch (Exception e) {

                System.err.println("Invalid username or password");

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }

            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            System.err.println("Authentication: " + authentication);

            // Armazenando o userAuthenticationDto
            String authoritiesString = authentication.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.joining(", "));

            userSession.updateUserAuthentication(authentication.getPrincipal().toString(), authoritiesString);

            // Criando o token do Jwt
            JwtTokenUtil jwtTokenUtil = new JwtTokenUtil(userRepository);
            String token = jwtTokenUtil.generateToken(userLoginDto.getUsername());

            System.err.println("User " + userLoginDto.getUsername() + " log in");

            return ResponseEntity.ok(new AuthenticationResponse(token));
        }
    }