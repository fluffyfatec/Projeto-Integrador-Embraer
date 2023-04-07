package com.embraer.backend.webConfig;

import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.WebApplicationContext;

@Service
public class UserSession {

    private UserAuthenticationDto userAuthenticationDto;

    public UserAuthenticationDto getUserAuthentication() {
        return userAuthenticationDto;
    }

    public void updateUserAuthentication(String username, String role) {
        userAuthenticationDto = new UserAuthenticationDto();
        userAuthenticationDto.setUsername(username);
        userAuthenticationDto.setRole(role);
    }

}
