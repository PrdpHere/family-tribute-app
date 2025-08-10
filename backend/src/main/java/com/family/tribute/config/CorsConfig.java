package com.family.tribute.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
      .allowedOriginPatterns("*")   // or .allowedOrigins("*")
      .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
      .allowedHeaders("*")
      .allowCredentials(false)      // <-- key change
      .maxAge(3600);
  }
}
