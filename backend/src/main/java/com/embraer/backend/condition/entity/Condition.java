package com.embraer.backend.condition.entity;

import javax.persistence.*;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "CONDITION_ITEM")
public class Condition {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "condition_seq_generator")
	@SequenceGenerator(name="condition_seq_generator", sequenceName = "CONDITION_SEQ", allocationSize = 1)
	@Column(name = "condition_id")
	private Long conditionId;

	@ManyToOne
	@JoinColumn(name = "item_id", referencedColumnName = "item_id")
	private Item itemId;

	@ManyToOne
	@JoinColumn(name = "formula_id", referencedColumnName = "formula_id")
	private Formula formulaId;

	@ManyToOne
	@JoinColumn(name= "chassis_bigger_then", referencedColumnName = "chassi_id")
	private Chassis chassisBiggerThenId;

	@ManyToOne
	@JoinColumn(name = "sb1_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb1Id;

	@ManyToOne
	@JoinColumn(name = "sb2_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb2Id;

	@ManyToOne
	@JoinColumn(name = "sb3_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb3Id;


	public Long getItemIdLong() {
		return itemId.getItemId();
	}

	public void setItemIdLong(Long itemId) {
		Item item = new Item();
		item.setItemId(itemId);
		this.itemId = item;
	}

	public Long getFormulaIdLong() {
		return formulaId.getFormulaId();
	}

	public void setFormulaIdLong(Long formulaId) {
		Formula formula = new Formula();
		formula.setFormulaId(formulaId);
		this.formulaId = formula;
	}

	public Long getChassisBiggerThenIdLong() {
		return chassisBiggerThenId.getChassiId();
	}

	public void setChassisBiggerThenIdLong(Long chassisBiggerThenId) {
		Chassis chassis = new Chassis();
		chassis.setChassiId(chassisBiggerThenId);
		this.chassisBiggerThenId = chassis;
	}

	public Long getSb1IdLong() {
		return sb1Id.getServiceBulletinId();
	}

	public void setSb1IdLong(Long sb1Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb1Id);
		this.sb1Id = serviceBulletin;
	}

	public Long getSb2IdLong() {
		return sb2Id.getServiceBulletinId();
	}

	public void setSb2IdLong(Long sb2Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb2Id);
		this.sb2Id = serviceBulletin;
	}

	public Long getSb3IdLong() {
		return sb3Id.getServiceBulletinId();
	}

	public void setSb3IdLong(Long sb3Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb3Id);
		this.sb3Id = serviceBulletin;
	}



}