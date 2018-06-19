/*
 * Copyright 2012-2020 the original author or authors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * @author lzhoumail@126.com/zhouli
 * Git http://git.oschina.net/zhou666/spring-cloud-7simple
 */

package cloud.simple.web;

import cloud.simple.model.User;
import cloud.simple.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
public class UserController {

    @Autowired
    UserService userService;

//	@Autowired
//	FeignUserService feignUserService;

    @RequestMapping(value = "/dataTables")
    @ResponseBody
    public Object readUserInfo() {
        List<User> users = userService.readUserInfo();
        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("aaData", users);
        return resultMap;
//        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/easyUi")
    @ResponseBody
    public Object getUserList(HttpServletRequest request) {
        int currentPage = Integer.parseInt(request.getParameter("page"));
        // 获取前台每页显示条数
        int pageSize = Integer.parseInt(request.getParameter("rows"));
        List<User> users = userService.getUserList(currentPage, pageSize);
        Map<String, Object> map=new HashMap<String,Object>();
        int total = userService.readUserInfo().size();
        map.put("total", total);
        map.put("rows", users);
        return map;
//        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @RequestMapping(value = "/show")
    public ModelAndView showUserInfo() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("home");
        return modelAndView;
    }

}
