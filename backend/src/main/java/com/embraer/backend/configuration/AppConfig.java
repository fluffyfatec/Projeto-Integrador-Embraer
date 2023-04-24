package com.embraer.backend.configuration;

import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan(basePackages = "com.embraer.backend.user.repositories")
public class AppConfig {

    @Bean
    public UserAuthenticationDto userAuthenticationDto() {
        return new UserAuthenticationDto();
    }

}
