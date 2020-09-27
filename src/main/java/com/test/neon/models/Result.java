package com.test.neon.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import org.hibernate.annotations.GenericGenerator;
@Entity
public class Result {
	
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;
	@Column
	private String testId;
	
	@OneToMany(mappedBy = "result")
	private List<RecordedAnswer> recordedAnswers; 
	@Column
	private int totalScore;
	@Column
	private int obtainedScore;
	@Column
	private float percentage;
	public int getTotalScore() {
		return totalScore;
	}
	public void setTotalScore(int totalScore) {
		this.totalScore = totalScore;
	}
	public int getObtainedScore() {
		return obtainedScore;
	}
	public void setObtainedScore(int obtainedScore) {
		this.obtainedScore = obtainedScore;
	}
	public float getPercentage() {
		return percentage;
	}
	public void setPercentage(float percentage) {
		this.percentage = percentage;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<RecordedAnswer> getRecordedAnswers() {
		return recordedAnswers;
	}
	public void setRecordedAnswers(List<RecordedAnswer> recordedAnswers) {
		this.recordedAnswers = recordedAnswers;
	}
	public String getTestId() {
		return testId;
	}
	public void setTestId(String testId) {
		this.testId = testId;
	}
	
	
	
	
	
	

}
