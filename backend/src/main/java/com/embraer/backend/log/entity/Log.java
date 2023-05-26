package com.embraer.backend.log.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter

@Entity
@Table(name="LOG_AUDITABLE")
public class Log {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "log_seq_generator")
    @SequenceGenerator(name="log_seq_generator", sequenceName = "LOG_ID_SEQ", allocationSize = 1)
    @Column(name="LOG_ID")
    private Long logId;

    @Column(name="USER_USERNAME")
    private String username;

    @Column(name="USER_USERROLE")
    private String role;

    @Column(name="DATE_REGISTER")
    private Timestamp Dtregister;

    @Column(name="OPERATION")
    private String operation;

    @Column(name="OLD_REGISTER")
    private String oldRegister;

    @Column(name="NEW_REGISTER")
    private String newRegister;

    @Column(name="BOOLEAN_ADMIN")
    private Integer booleanAdmin;

    @Column(name="CHASSIS_ID")
    private Long chassis;

}
