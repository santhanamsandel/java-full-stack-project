package com.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

	@Configuration//it will behave as configuration component and it will notify to the spring container 
	@EnableWebSecurity//it will notify to the spring container that there is websecurity 
	public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {
		
		@Autowired
		private UserDetailsService userDetailsService;// Default spring security interface
		
		@Bean
		AuthenticationProvider authenticationProvider()
		{
			DaoAuthenticationProvider provider =new DaoAuthenticationProvider();
			provider.setUserDetailsService(userDetailsService);
			provider.setPasswordEncoder(new BCryptPasswordEncoder());
			return provider;
			
		}
		@Override
		protected void configure(HttpSecurity http) throws Exception {
		    http
		        .cors().and()
		        .csrf().disable()
		        .authorizeRequests()
		        .anyRequest().permitAll(); // Allow all requests without authentication or authorization
		}
		
		/*@Override
		protected void configure(HttpSecurity http) throws Exception
		{
			System.out.println("aunthenting");
		http
		.cors()
		.and()
		.csrf().disable().authorizeRequests().antMatchers("/").permitAll()
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		//.anyRequest().authenticated();
		.antMatchers("/user/**")//URL--->
		.hasAnyAuthority("USER") //ROLE---->
		
		
		.antMatchers("/admin/**")//URL
		.hasAnyAuthority("ADMIN")//ROLE
		.anyRequest()
		.authenticated()
		.and()
		//.formLogin();
	.httpBasic();
		//formLogin()
		}*/
	}