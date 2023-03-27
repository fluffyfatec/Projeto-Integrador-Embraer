package com.embraer.backend.item.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.embraer.backend.permission.entity.Permission;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="ITEM")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="ITEM_ID")
	private Long itemId;
	
	@Column(name="ITEM_NAME")
	private String itemName;
	
	@Column(name="ITEM_DTREGISTER")
	private Timestamp itemDtregister;
	
}
