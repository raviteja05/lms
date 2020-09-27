package com.test.neon.models;


public enum QuestionType {
	MCQ(1),
	LONGTEXT(2),
	TEXT(3),
	MULTI_SELECT(4),
	MATCH_THE_ANSWERS(5),
	DRAG_AND_DROP_BLANK(6),
	DRAG_AND_DROP_MATCH(7);
	
	private int code;
	
	QuestionType(int code) {
		this.code=code;
		
	}

	public int getCode() {
		return code;
	}

	
	

}
