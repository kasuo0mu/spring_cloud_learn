package cloud.simple.service.web;

import cloud.simple.service.domain.UserService;
import cloud.simple.service.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	@RequestMapping(value="/user",method=RequestMethod.GET)
	public List<User> readUserInfo(){
		List<User> ls=userService.searchAll();		
		return ls;
	}

	@RequestMapping(value="/userList",method=RequestMethod.GET)
	public List<User> getUserList(int currentPage, int pageSize){
		currentPage = pageSize * (currentPage - 1);
		List<User> ls=userService.getUserList(currentPage, pageSize);
		return ls;
	}


}
