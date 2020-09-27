package com.test.neon.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.test.neon.models.Option;
import com.test.neon.models.Question;
import com.test.neon.models.RecordedAnswer;
import com.test.neon.models.Result;
import com.test.neon.models.Test;
import com.test.neon.repository.ResultRepository;
import com.test.neon.repository.TestRepository;

@Service
public class TestService {
	@Resource
	private TestRepository testRepository;
	@Resource
	private ResultRepository resultRepository;
	@Resource
	private QuestionService questionService;
	
	public Test createTestByTopic(Test test) {
		List<Question> questions=questionService.findByTopic(test.getTopic());
		List<Question> testQuestions=new ArrayList<>();
		Collections.shuffle(questions);
		testQuestions.addAll(questions.subList(0,test.getNoOfQuestions()));
		test.setQuestions(testQuestions);
		test.setDurationInMinutes(test.getDurationInMinutes());
		test.setTopic(test.getTopic());
		return testRepository.save(test);
	}
	public Test getTest(String id) {
		return testRepository.findById(id);
	}
	public List<Test> getTests() {
		return testRepository.findAll();
	}
	public Result saveResult(Result result) {
		Map<String,Question> questionMap=new HashMap<>();
		Test test=testRepository.findById(result.getTestId());
		test.getQuestions().forEach(question->questionMap.put(question.getId(), question));
		result.getRecordedAnswers().forEach(recordedAnswer->evaluateRecordedAnswer(questionMap,result,recordedAnswer));
		return resultRepository.save(result);
		
	}
	private void evaluateRecordedAnswer(Map<String, Question> questionMap, Result result,
			RecordedAnswer recordedAnswer) {
		
		Question question=questionMap.get(recordedAnswer.getQuestion().getId());
		Optional<Option> correctOption=question.getOptions().stream().filter(Option::isCorrectOption).findFirst();
		if(recordedAnswer.getOption().getId().equals(correctOption.get().getId())){
			result.setObtainedScore(result.getObtainedScore()+1);
		}
		result.setTotalScore(questionMap.size());
		result.setPercentage(((float)result.getObtainedScore()/result.getTotalScore())*100);
		
	}

}
