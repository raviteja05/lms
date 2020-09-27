package com.test.neon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.neon.models.Test;

@Repository
public interface TestRepository extends JpaRepository<Test, Long> {
	Test findById(String id);
}
