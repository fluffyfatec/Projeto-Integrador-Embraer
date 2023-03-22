package com.embraer.backend.permission.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.NotFound;
import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="PERMISSION")
public class Permission {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="PERMISSION_ID")
	private Long permissionId;
	
	@Column(name="PERMISSION_NAME")
	@NotNull
	@Length(max = 15)
	private String permissionName;
}
