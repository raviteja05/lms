package com.test.neon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.neon.models.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User getUserById(String userId);

}
