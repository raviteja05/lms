package com.test.neon.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

public class MultipleChoiceQuestion {
	@OneToMany
	private List<Option> options = new ArrayList<>();

	public List<Option> getOptions() {
		return options;
	}

	public void setOptions(List<Option> options) {
		this.options = options;
	}
	
	
	

}
