package com.test.neon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.test.neon.models.Question;
@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
	List<Question> findByTopicAndSubTopic(String topic,String subTopic);
	List<Question> findByTopic(String topic);
	
}
