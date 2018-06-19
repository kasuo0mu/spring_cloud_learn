package cloud.simple.service.dao;

import cloud.simple.service.model.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;


public interface UserDao {

	List<User> findAll();
	List<User> getUserList(@Param("currentPage")int currentPage, @Param("pageSize") int pageSize);
}
