package com.embraer.backend.chassis.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.UpdateTimestamp;

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
	private String chassiId;
	
	@Column(name="CHASSI_DTREGISTER")
	@UpdateTimestamp
	private Timestamp chassiDtRegister;
	
	@Column(name="CHASSI_STATUS")
	@NotNull
	private Character chassiStatus;

	@JoinColumn(name="USER_ID_REGISTER")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userRegister;

}
