package com.test.neon.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;
@Entity
public class Test {
	@Id
	@GeneratedValue(generator="system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;
	@Column
	private String name;
	@Column
	private int durationInMinutes;
	@Column
	private String topic;
	@Transient
	private int noOfQuestions;
	@ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
        name = "Test_Questions", 
        joinColumns = { @JoinColumn(name="question_id") }, 
        inverseJoinColumns = { @JoinColumn(name = "test_id") }
    )
	private List<Question> questions;
	
	@OneToMany(fetch = FetchType.LAZY)
	private List<User> users;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getDurationInMinutes() {
		return durationInMinutes;
	}
	public void setDurationInMinutes(int durationInHours) {
		this.durationInMinutes = durationInHours;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	
	public String getTopic() {
		return topic;
	}
	public void setTopic(String topic) {
		this.topic = topic;
	}
	public int getNoOfQuestions() {
		return noOfQuestions;
	}
	public void setNoOfQuestions(int noOfQuestions) {
		this.noOfQuestions = noOfQuestions;
	}
	

}
