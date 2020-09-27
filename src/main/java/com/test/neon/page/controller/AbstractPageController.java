package com.test.neon.page.controller;

import javax.websocket.server.PathParam;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AbstractPageController {
	
	@RequestMapping(path = "/{pageId}")
	public String getPage(@PathVariable(name = "pageId",required = false) String pageId ) {
		return pageId;
		
	}
	@RequestMapping(path = "/admin/{pageId}")
	public String getAdminPage(@PathVariable(name = "pageId",required = false) String pageId ) {
		return "/admin/"+pageId;
		
	}

}
