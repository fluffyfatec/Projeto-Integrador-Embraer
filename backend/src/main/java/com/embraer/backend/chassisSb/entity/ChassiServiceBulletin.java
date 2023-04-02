package com.embraer.backend.chassisSb.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import javax.validation.constraints.NotNull;


import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter


@Entity
@Table(name="SB_CHASSI")
public class ChassiServiceBulletin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="SB_CHASSI_ID")
	private Long sbChassiId;
	

	@Column(name="SB_STATUSSERVICE")
	@NotNull
	private String serviceBulletinStatus;
	

	@JoinColumn(name="SB_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private ServiceBulletin serviceBulletinId;
	
	@JoinColumn(name="CHASSI_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Chassis chassiId;
	

}

