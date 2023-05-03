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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pilot_seq_generator")
    @SequenceGenerator(name="pilot_seq_generator", sequenceName = "CHASSIS_USER_PILOT_SEQ", allocationSize = 1)
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


    public Long getOwnerLong() {
        return owner.getId();
    }

    public void setOwnerLong(Long owner) {
        ChassisUserOwner newChassisUserOwner = new ChassisUserOwner();
        newChassisUserOwner.setId(owner);
        this.owner = newChassisUserOwner;
    }

    public Long getPilotLong() {
        return pilot.getUserId();
    }

    public void setPilotLong(Long pilot) {
        User newUser = new User();
        newUser.setUserId(pilot);
        this.pilot = newUser;
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
