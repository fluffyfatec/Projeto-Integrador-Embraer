package com.embraer.backend.formula.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="FORMULA")
public class Formula {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="FORMULA_ID")
	private Long formulaId;

	@Column(name="FORMULA_DESC")
	private String formulaDescription;
	
}
