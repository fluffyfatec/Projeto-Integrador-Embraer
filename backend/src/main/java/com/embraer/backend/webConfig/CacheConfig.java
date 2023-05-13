package com.embraer.backend.webConfig;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.CaffeineSpec;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCache;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Configuration
@EnableCaching
@org.springframework.cache.annotation.CacheConfig
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(caffeineCacheBuilder());
        cacheManager.setCacheNames(Arrays.asList("FiveConditionsListApplicable",
                "FiveConditionsListIncorporated", "FiveConditionsListNotApplicable",
                "FourConditionsApplicable", "FourConditionsIncorporated", "FourConditionsNotApplicable",
                "ThreeConditionsApplicable", "ThreeConditionsIncorporated", "ThreeConditionsNotApplicable",
                "TwoConditionsApplicable", "TwoConditionsIncorporated", "TwoConditionNotApplicable",
                "findSbStatusBySbId", "findItemNameItemId", "findSbNameByServiceBulletinId",
                "Formula3Incorporated", "Formula3NotApplicable", "Formula3Applicable",
                "Formula4NotApplicable", "Formula4Applicable", "Formula4Incorporated",
                "Formula7NotApplicable", "Formula7Applicable", "Formula7Incorporated",
                "Formula22NotApplicable", "Formula22Applicable", "Formula22Incorporated",
                "Formula90NotApplicable", "Formula90Applicable", "Formula90Incorporated",
                "Formula92NotApplicable", "Formula92Applicable", "Formula92Incorporated",
                "Formula5NotApplicable", "Formula5Applicable", "Formula5Incorporated",
                "Formula82NotApplicable", "Formula82Applicable", "Formula82Incorporated",
                "Formula84NotApplicable", "Formula84Applicable", "Formula84Incorporated",
                "Formula86Applicable", "Formula86NotApplicable", "Formula86Incorporated",
                "Formula88NotApplicable", "Formula88Applicable", "Formula88Incorporated",
                "Formula94NotApplicable", "Formula94Applicable", "Formula94Incorporated",
                "Formula96NotApplicable", "Formula96Applicable", "Formula96Incorporated",
                "Formula98NotApplicable", "Formula98Applicable", "Formula98Incorporated",
                "Formula100NotApplicable", "Formula100Applicable", "Formula100Incorporated",
                "checkIfItemIsActive"));
        return cacheManager;
    }

    private Caffeine<Object, Object> caffeineCacheBuilder() {
        return Caffeine.newBuilder()
                .initialCapacity(99999)
                .maximumSize(999999999)
                .expireAfterAccess(10, TimeUnit.SECONDS)
                .weakKeys()
                .recordStats();
    }

}
