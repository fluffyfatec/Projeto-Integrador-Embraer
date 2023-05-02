package com.embraer.backend.chassisUserOwner.entity;

import com.embraer.backend.chassis.entity.Chassis;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHASSIS_USER_OWNER_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CHASSI_ID")
    private Chassis chassis;

}