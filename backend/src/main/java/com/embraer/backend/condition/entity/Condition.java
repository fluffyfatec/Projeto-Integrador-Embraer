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

	@ManyToOne
	@JoinColumn(name = "sb4_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb4Id;

	@ManyToOne
	@JoinColumn(name = "sb5_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb5Id;

	@ManyToOne
	@JoinColumn(name = "sb6_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb6Id;

	@ManyToOne
	@JoinColumn(name = "sb7_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb7Id;

	@ManyToOne
	@JoinColumn(name = "sb8_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb8Id;

	@ManyToOne
	@JoinColumn(name = "sb9_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb9Id;

	@ManyToOne
	@JoinColumn(name = "sb10_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb10Id;

	@ManyToOne
	@JoinColumn(name = "sb11_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb11Id;

	@ManyToOne
	@JoinColumn(name = "sb12_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb12Id;

	@ManyToOne
	@JoinColumn(name = "sb13_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb13Id;

	@ManyToOne
	@JoinColumn(name = "sb14_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb14Id;

	@ManyToOne
	@JoinColumn(name = "sb15_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb15Id;

	@ManyToOne
	@JoinColumn(name = "sb16_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb16Id;

	@ManyToOne
	@JoinColumn(name = "sb17_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb17Id;

	@ManyToOne
	@JoinColumn(name = "sb18_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb18Id;

	@ManyToOne
	@JoinColumn(name = "sb19_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb19Id;

	@ManyToOne
	@JoinColumn(name = "sb20_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb20Id;

	@ManyToOne
	@JoinColumn(name = "sb21_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb21Id;

	@ManyToOne
	@JoinColumn(name = "sb22_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb22Id;

	@ManyToOne
	@JoinColumn(name = "sb23_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb23Id;

	@ManyToOne
	@JoinColumn(name = "sb24_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb24Id;

	@ManyToOne
	@JoinColumn(name = "sb25_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb25Id;

	@ManyToOne
	@JoinColumn(name = "sb26_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb26Id;

	@ManyToOne
	@JoinColumn(name = "sb27_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb27Id;

	@ManyToOne
	@JoinColumn(name = "sb28_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb28Id;

	@ManyToOne
	@JoinColumn(name = "sb29_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb29Id;

	@ManyToOne
	@JoinColumn(name = "sb30_id", referencedColumnName = "sb_id")
	private ServiceBulletin sb30Id;


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

	public Long getSb4IdLong() {
		return sb4Id.getServiceBulletinId();
	}

	public void setSb4IdLong(Long sb4Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb4Id);
		this.sb4Id = serviceBulletin;
	}

	public Long getSb5IdLong() {
		return sb5Id.getServiceBulletinId();
	}

	public void setSb5IdLong(Long sb5Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb5Id);
		this.sb5Id = serviceBulletin;
	}

	public Long getSb6IdLong() {
		return sb6Id.getServiceBulletinId();
	}

	public void setSb6IdLong(Long sb6Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb6Id);
		this.sb6Id = serviceBulletin;
	}

	public Long getSb7IdLong() {
		return sb7Id.getServiceBulletinId();
	}

	public void setSb7IdLong(Long sb7Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb7Id);
		this.sb7Id = serviceBulletin;
	}

	public Long getSb8IdLong() {
		return sb8Id.getServiceBulletinId();
	}

	public void setSb8IdLong(Long sb8Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb8Id);
		this.sb8Id = serviceBulletin;
	}

	public Long getSb9IdLong() {
		return sb9Id.getServiceBulletinId();
	}

	public void setSb9IdLong(Long sb9Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb9Id);
		this.sb9Id = serviceBulletin;
	}

	public Long getSb10IdLong() {
		return sb10Id.getServiceBulletinId();
	}

	public void setSb10IdLong(Long sb10Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb10Id);
		this.sb10Id = serviceBulletin;
	}

	public Long getSb11IdLong() {
		return sb11Id.getServiceBulletinId();
	}

	public void setSb11IdLong(Long sb11Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb11Id);
		this.sb11Id = serviceBulletin;
	}

	public Long getSb12IdLong() {
		return sb12Id.getServiceBulletinId();
	}

	public void setSb12IdLong(Long sb12Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb12Id);
		this.sb12Id = serviceBulletin;
	}

	public Long getSb13IdLong() {
		return sb13Id.getServiceBulletinId();
	}

	public void setSb13IdLong(Long sb13Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb13Id);
		this.sb13Id = serviceBulletin;
	}

	public Long getSb14IdLong() {
		return sb14Id.getServiceBulletinId();
	}

	public void setSb14IdLong(Long sb14Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb14Id);
		this.sb14Id = serviceBulletin;
	}

	public Long getSb15IdLong() {
		return sb15Id.getServiceBulletinId();
	}

	public void setSb15IdLong(Long sb15Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb15Id);
		this.sb15Id = serviceBulletin;
	}

	public Long getSb16IdLong() {
		return sb16Id.getServiceBulletinId();
	}

	public void setSb16IdLong(Long sb16Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb16Id);
		this.sb16Id = serviceBulletin;
	}

	public Long getSb17IdLong() {
		return sb17Id.getServiceBulletinId();
	}

	public void setSb17IdLong(Long sb17Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb17Id);
		this.sb17Id = serviceBulletin;
	}

	public Long getSb18IdLong() {
		return sb18Id.getServiceBulletinId();
	}

	public void setSb18IdLong(Long sb18Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb18Id);
		this.sb18Id = serviceBulletin;
	}

	public Long getSb19IdLong() {
		return sb19Id.getServiceBulletinId();
	}

	public void setSb19IdLong(Long sb19Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb19Id);
		this.sb19Id = serviceBulletin;
	}

	public Long getSb20IdLong() {
		return sb20Id.getServiceBulletinId();
	}

	public void setSb20IdLong(Long sb20Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb20Id);
		this.sb20Id = serviceBulletin;
	}

	public Long getSb21IdLong() {
		return sb21Id.getServiceBulletinId();
	}

	public void setSb21IdLong(Long sb21Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb21Id);
		this.sb21Id = serviceBulletin;
	}

	public Long getSb22IdLong() {
		return sb22Id.getServiceBulletinId();
	}

	public void setSb22IdLong(Long sb22Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb22Id);
		this.sb22Id = serviceBulletin;
	}

	public Long getSb23IdLong() {
		return sb23Id.getServiceBulletinId();
	}

	public void setSb23IdLong(Long sb23Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb23Id);
		this.sb23Id = serviceBulletin;
	}

	public Long getSb24IdLong() {
		return sb24Id.getServiceBulletinId();
	}

	public void setSb24IdLong(Long sb24Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb24Id);
		this.sb24Id = serviceBulletin;
	}

	public Long getSb25IdLong() {
		return sb25Id.getServiceBulletinId();
	}

	public void setSb25IdLong(Long sb25Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb25Id);
		this.sb25Id = serviceBulletin;
	}

	public Long getSb26IdLong() {
		return sb26Id.getServiceBulletinId();
	}

	public void setSb26IdLong(Long sb26Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb26Id);
		this.sb26Id = serviceBulletin;
	}

	public Long getSb27IdLong() {
		return sb27Id.getServiceBulletinId();
	}

	public void setSb27IdLong(Long sb27Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb27Id);
		this.sb27Id = serviceBulletin;
	}

	public Long getSb28IdLong() {
		return sb28Id.getServiceBulletinId();
	}

	public void setSb28IdLong(Long sb28Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb28Id);
		this.sb28Id = serviceBulletin;
	}

	public Long getSb29IdLong() {
		return sb29Id.getServiceBulletinId();
	}

	public void setSb29IdLong(Long sb29Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb29Id);
		this.sb29Id = serviceBulletin;
	}

	public Long getSb30IdLong() {
		return sb30Id.getServiceBulletinId();
	}

	public void setSb30IdLong(Long sb30Id) {
		ServiceBulletin serviceBulletin = new ServiceBulletin();
		serviceBulletin.setServiceBulletinId(sb30Id);
		this.sb30Id = serviceBulletin;
	}

}