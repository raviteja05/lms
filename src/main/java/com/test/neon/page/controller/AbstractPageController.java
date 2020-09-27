package com.test.neon.page.controller;

import javax.websocket.server.PathParam;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AbstractPageController {
	
	@RequestMapping(path = "/{pageId}")
	public ModelAndView getPage(@PathVariable(name = "pageId",required = false) String pageId ) {
		ModelAndView modelAndView=new ModelAndView();
		modelAndView.addObject("pageId", pageId);
		modelAndView.setViewName("/index");
		return modelAndView;
		
	}
	@RequestMapping(path = "/admin/{pageId}")
	public ModelAndView getAdminPage(@PathVariable(name = "pageId",required = false) String pageId ) {
		ModelAndView modelAndView=new ModelAndView();
		modelAndView.addObject("pageId", pageId);
		modelAndView.setViewName("/admin/index");
		return modelAndView;
		
	}

}
