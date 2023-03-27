package com.embraer.backend.condition.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="CONDITION_SBITEM")
public class Condition {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="CONDITION_ID")
	private Long conditionId;


	@JoinColumn(name="FORMULA_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Formula formulaId;
	
	@Column(name="CONDITION_VAR")
	private String conditionVar;
	

	@JoinColumn(name="SB_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private ServiceBulletin serviceBulletinId;
	
	@JoinColumn(name="ITEM_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Item itemId;

}
