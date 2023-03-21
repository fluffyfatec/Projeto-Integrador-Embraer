package com.embraer.backend.chassis.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="CHASSIS")
public class Chassis {
	
	@Id
	@Column(name="CHASSI_ID")
	private Long chassiId;
	
	@Column(name="CHASSI_DTREGISTER", updatable = false)
	private Timestamp chassiDtRegister;
	
	@Column(name="CHASSI_STATUS", updatable = true, nullable = false)
	private Character chassiStatus;

	@JoinColumn(name="USER_ID_REGISTER")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userRegister;

	@JoinColumn(name="USER_ID_CHANGE")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userChange;
}
