package com.embraer.backend.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.permission.entity.Permission;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="USER")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="USER_ID")
	private Long userId;
	
	@Column(name="USER_USERNAME")
	private String username;
	
	@Column(name="USER_PASSWORD")
	private String password;
	
	@Column(name = "STATUS")
	private Character status;
	
	@JoinColumn(name="PERMISSION_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Permission permission;
	
}
