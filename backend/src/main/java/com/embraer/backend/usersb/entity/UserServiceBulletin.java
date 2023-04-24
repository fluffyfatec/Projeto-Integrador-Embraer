package com.embraer.backend.usersb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="USER_SB")
public class UserServiceBulletin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="USER_SB_ID")
	private Long userServiceBulletinId;
	
	@JoinColumn(name="USER_ID_EDIT")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userIdRegister;
	
	@JoinColumn(name="SB_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private ServiceBulletin ServiceBulletinId;
	
}
