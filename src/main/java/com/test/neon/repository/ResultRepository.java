package com.test.neon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.test.neon.models.Result;
@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {

}
