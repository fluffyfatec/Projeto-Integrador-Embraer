package com.embraer.backend.userAuthenticated;

import com.embraer.backend.jwt.JwtTokenUtil;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping
public class UserAuthenticatedController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserSession userSession;

    @CrossOrigin
    @GetMapping("/user-authenticated")
    public ResponseEntity<?> getUserAuthentication() {

        UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

        return ResponseEntity.ok(userAuthenticationDto);
    }



}
