package ngdemo.service;

import ngdemo.domain.User;

public class UserService {

    public User getDefaultUser() {
        User user = new User();
        user.setFirstName("Sanjib");
        user.setLastName("Mallik");
        return user;
    }
}
