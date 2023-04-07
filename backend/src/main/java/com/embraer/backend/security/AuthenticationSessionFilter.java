package com.embraer.backend.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.session.SessionRegistry;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

public class AuthenticationSessionFilter implements Filter {

    private final SessionRegistry sessionRegistry;

    public AuthenticationSessionFilter(SessionRegistry sessionRegistry) {
        this.sessionRegistry = sessionRegistry;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Obtém o objeto Authentication da SecurityContextHolder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // Armazena o objeto Authentication na sessão do usuário
        if (authentication != null) {
            HttpSession session = httpRequest.getSession();
            session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());
            sessionRegistry.registerNewSession(session.getId(), authentication.getPrincipal());
        }

        chain.doFilter(httpRequest, httpResponse);
    }

}
