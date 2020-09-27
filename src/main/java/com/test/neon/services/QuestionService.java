package com.test.neon.services;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.test.neon.models.Question;
import com.test.neon.repository.QuestionRepository;

@Service
public class QuestionService {
	@Resource 
	private QuestionRepository questionRepository;
	public boolean createQuestion(Question question) {
		
		return questionRepository.save(question)!=null;
		
	}
	public List<Question> findByTopicAndSubTopic(String topic,String subTopic){
		return questionRepository.findByTopicAndSubTopic(topic, subTopic);
	}
	public List<Question> findByTopic(String topic){
		return questionRepository.findByTopic(topic);
	}

}
