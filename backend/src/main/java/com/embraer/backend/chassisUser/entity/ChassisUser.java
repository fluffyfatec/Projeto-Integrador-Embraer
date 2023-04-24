package com.embraer.backend.chassisUser.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "CHASSIS_USER")
public class ChassisUser {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "CHASSI_USER_ID")
	private Long chassiUserId;

	@JoinColumn(name = "CHASSI_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Chassis chassiId;

	@JoinColumn(name = "USER_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userId;
}
