package com.test.neon.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Question {
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;
	@Column
	private String description;
	@Column
	private int timeInSeconds;
	@Column
	private String topic;
	@Column
	private String subTopic;
	@Enumerated
	private QuestionType questionType;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Option> options = new ArrayList<>();
//	@ManyToMany(mappedBy = "questions")
//	@JsonIgnore
//	private List<Test> tests = new ArrayList<>();

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getTimeInSeconds() {
		return timeInSeconds;
	}

	public void setTimeInSeconds(int timeInSeconds) {
		this.timeInSeconds = timeInSeconds;
	}

	public QuestionType getQuestionType() {
		return questionType;
	}

	public void setQuestionType(QuestionType questionType) {
		this.questionType = questionType;
	}
	
	public List<Option> getOptions() {
		return options;
	}

	public void setOptions(List<Option> options) {
		this.options = options;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getSubTopic() {
		return subTopic;
	}

	public void setSubTopic(String subTopic) {
		this.subTopic = subTopic;
	}

//	public List<Test> getTests() {
//		return tests;
//	}
//
//	public void setTests(List<Test> tests) {
//		this.tests = tests;
//	}
	
	
	

}
