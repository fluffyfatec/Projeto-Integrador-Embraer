package com.embraer.backend.jwt;

import com.embraer.backend.security.UserDetailsServiceImpl;
import com.embraer.backend.user.entity.User;
import com.embraer.backend.user.repositories.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Component
public class JwtTokenUtil {
    static SecretKey key = JwtTokenUtil.secretKeyForHS512();

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public JwtTokenUtil(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String generateToken(String principal) {
        User user = userRepository.findByUserUsername(principal);
        Map<String, Object> claims = new HashMap<>();

        return "Bearer " + Jwts.builder()
                .setClaims(claims)
                .setSubject(user.getUserUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    public static String getUsernameFromToken(String token) {
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
    }

    public static boolean validateToken(String token, UserDetails userDetails) {
        try {
            final String username = getUsernameFromToken(token);
            return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
        } catch (Exception e) {
            return false;
        }
    }

    private static boolean isTokenExpired(String token) {
        final Date expiration = getExpirationDateFromToken(token);
        return expiration.before(new Date());
    }

    private static Date getExpirationDateFromToken(String token) {
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getExpiration();
    }

    public static SecretKey secretKeyForHS512() {
        return Keys.secretKeyFor(SignatureAlgorithm.HS512);
    }

    public User getUserDetailsService(String username) {
        User userDetails;
        try {
            userDetails = userRepository.findByUserUsername(username);
        } catch (UsernameNotFoundException e) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return userDetails;
    }

    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }

}
