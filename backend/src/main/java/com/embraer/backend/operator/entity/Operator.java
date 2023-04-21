package com.embraer.backend.operator.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter

@Entity
@Table(name = "OPERATOR")
public class Operator {

    @Id
    @Column(name="OPERATOR_ID")
    private Long operatorId;

    @Column(name="OPERATOR_TYPE")
    private String operatorType;

}