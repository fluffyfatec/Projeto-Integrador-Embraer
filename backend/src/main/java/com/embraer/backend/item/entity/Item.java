package com.embraer.backend.item.entity;

import java.sql.Timestamp;

import javax.persistence.*;

import com.embraer.backend.permission.entity.Permission;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="ITEMS")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "item_seq_generator")
	@SequenceGenerator(name="item_seq_generator", sequenceName = "ITEM_ID_SEQ",  allocationSize = 1)
	@Column(name="ITEM_ID")
	private Long itemId;
	
	@Column(name="ITEM_NAME")
	private String itemName;
	
	@Column(name="ITEM_DTREGISTER")
	private Timestamp itemDtregister;
	
}
