package com.embraer.backend.security;

import com.embraer.backend.permission.entity.Permission;
import com.embraer.backend.user.entity.User;
import com.embraer.backend.user.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUserUsername(), user.getUserPassword(),
                getAuthorities(user.getPermissionId()));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Permission permission) {
        return Collections.singletonList(new SimpleGrantedAuthority(permission.getPermissionName()));
    }

}