package com.embraer.backend.notificationsSb.entity;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.user.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter

@Entity
@Table(name="REGISTER_EDIT_SB_USER")
public class NotificationsSb {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notification_seq_generator")
    @SequenceGenerator(name="notification_seq_generator", sequenceName = "REGISTER_EDIT_SB_USER_SEQ", allocationSize = 1)
    @Column(name="ID")
    private Long id;

    @JoinColumn(name="USER_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @JoinColumn(name="CHASSIS_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Chassis chassis;

    @JoinColumn(name="SB_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private ServiceBulletin sb;

    @Column(name="OPERATION")
    private String operation;

    @Column(name="SB_STATUS_CHANGE")
    private String statusChange;

    @Column(name="DATE_REGISTER")
    private Timestamp Dtregister;

    @JoinColumn(name="ITEM_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Item itemId;

    @Column(name="BOOLEAN_ADMIN")
    private Integer booleanAdmin;

    @Column(name="OWNER_NAME")
    private String owner;

    @Column(name="ITEM_STATUS")
    private String itemStatus;


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

    public Long getSbLong() {
        return sb.getServiceBulletinId();
    }

    public void setSbLong(Long sb) {
        ServiceBulletin newSb = new ServiceBulletin();
        newSb.setServiceBulletinId(sb);
        this.sb = newSb;
    }

    public Long getItemIdLong() {
        return itemId.getItemId();
    }

    public void setItemIdLong(Long item) {
        Item newItem = new Item();
        newItem.setItemId(item);
        this.itemId = newItem;
    }


}
