package cloud.simple.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
public class StartController {
	public static void main(String[] args) throws Exception {
		SpringApplication.run(StartController.class, args);
	}

}
