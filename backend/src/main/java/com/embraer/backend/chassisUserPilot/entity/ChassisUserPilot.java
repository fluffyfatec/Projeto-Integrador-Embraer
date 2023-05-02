package com.embraer.backend.chassisUserPilot.entity;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassisUserOwner.entity.ChassisUserOwner;
import com.embraer.backend.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter

@Entity
@Table(name = "CHASSIS_USER_PILOT")
public class ChassisUserPilot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHASSIS_USER_PILOT_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "OWNER_ID")
    private ChassisUserOwner owner;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PILOT_ID")
    private User pilot;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CHASSI_ID")
    private Chassis chassis;

}
