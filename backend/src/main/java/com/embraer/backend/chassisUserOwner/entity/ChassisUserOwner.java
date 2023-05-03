package com.embraer.backend.chassisUserOwner.entity;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter

@Entity
@Table(name = "CHASSIS_USER_OWNER")
public class ChassisUserOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "owner_seq_generator")
    @SequenceGenerator(name="owner_seq_generator", sequenceName = "CHASSIS_USER_OWNER_SEQ", allocationSize = 1)
    @Column(name = "CHASSIS_USER_OWNER_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CHASSI_ID")
    private Chassis chassis;

    public Long getUserLong() {
        return user.getUserId();
    }

    public void setUserLong(Long user) {
        User newUser = new User();
        newUser.setUserId(user);
        this.user = newUser;
    }

    public Long getChassisLong() {
        return chassis.getChassiId();
    }

    public void setChassisLong(Long chassis) {
        Chassis newChassis = new Chassis();
        newChassis.setChassiId(chassis);
        this.chassis = newChassis;
    }

}