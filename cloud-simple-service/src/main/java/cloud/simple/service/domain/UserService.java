package cloud.simple.service.domain;


import cloud.simple.service.dao.UserDao;
import cloud.simple.service.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;



@Service
@Transactional
public class UserService {

	
	@Autowired
	private UserDao userMapper;
	
	public List<User> searchAll(){
		List<User> list = userMapper.findAll();
		return list;
	}

	public List<User> getUserList(int currentPage, int pageSize){
		List<User> list = userMapper.getUserList(currentPage, pageSize);
		return list;
	}
}
