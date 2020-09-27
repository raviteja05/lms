package com.test.neon.controllers;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.test.neon.models.Question;
import com.test.neon.services.QuestionService;

@Controller
public class QuestionController {
	@Resource
	private QuestionService questionService;

	@RequestMapping(path = "/create-question", method = RequestMethod.POST)
	public ResponseEntity<Question> createQuestion(@RequestBody Question question) {
		questionService.createQuestion(question);
		return new ResponseEntity<Question>(HttpStatus.CREATED);

	}

	@RequestMapping(path = "/import-questions", method = RequestMethod.POST)
	public ResponseEntity<Question> importQuestions(@RequestBody List<Question> questions) {

		for (Question question : questions)
			questionService.createQuestion(question);
		return new ResponseEntity<Question>(HttpStatus.CREATED);

	}
}
