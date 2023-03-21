package com.embraer.backend.serviceBulletin.entity;

import java.sql.Timestamp;

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

@Entity
@Table(name="SERVICE_BULLETIN")
public class ServiceBulletin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="SB_ID")
	private Long serviceBulletinId;
	
	@Column(name="SB_NAME", nullable = false)
	private String serviceBulletinName;
	
	@Column(name="SB_DTREGISTER", updatable = false)
	private Timestamp serviceBulletinDtRegister;
	
	@Column(name="SB_STATUSSERVICE", nullable = false)
	private String serviceBulletinStatus;
	
	@Column(name="SB_PARSERVICE")
	private String serviceBulletinPart;
	
	@JoinColumn(name="CHASSI_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Chassis chassiId;
	
	
}
