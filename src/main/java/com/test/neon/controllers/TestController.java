package com.test.neon.controllers;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.JsonNode;
import com.test.neon.models.Result;
import com.test.neon.models.Test;
import com.test.neon.services.TestService;

@Controller
public class TestController {
	@Resource
	private TestService testService;
	@RequestMapping(path = "/create-test",method=RequestMethod.POST)
	public ResponseEntity<Test> createTest(@RequestBody Test test){
		testService.createTestByTopic(test);
		return new ResponseEntity<Test>(HttpStatus.CREATED);		
	}
	@RequestMapping(path="/get-test",method=RequestMethod.GET)
	public ResponseEntity<Test> getTestById(@RequestParam("id") String id){
		
		return new ResponseEntity<Test>(testService.getTest(id), HttpStatus.OK);
	}
	@RequestMapping(path="/get-result",method=RequestMethod.POST)
	public ResponseEntity<Result> getResult(@RequestBody Result result){
		testService.saveResult(result);
		
		return new ResponseEntity<Result>(result,HttpStatus.OK);
	}

}
