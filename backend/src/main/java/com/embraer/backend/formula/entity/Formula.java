package com.embraer.backend.formula.entity;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name="FORMULA")
public class Formula {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "formula_seq_generator")
	@SequenceGenerator(name="formula_seq_generator", sequenceName = "FORMULA_ID_SEQ", allocationSize = 1)
	@Column(name = "FORMULA_ID")
	private Long formulaId;

	@Column(name = "FORMULA_DESC")
	private String formulaDescription;

}
