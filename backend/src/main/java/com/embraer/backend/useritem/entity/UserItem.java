package com.embraer.backend.useritem.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.embraer.backend.item.entity.Item;
import com.embraer.backend.user.entity.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="USER_ITEM")
public class UserItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="USER_ITEM_ID")
	private Long userItemId;
	
	@JoinColumn(name="USER_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private User userId;
	
	@JoinColumn(name="ITEM_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Item itemId;

}
