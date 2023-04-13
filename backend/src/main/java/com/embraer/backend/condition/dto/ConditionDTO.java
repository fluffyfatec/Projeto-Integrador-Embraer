package com.embraer.backend.condition.dto;


import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConditionDTO {

    private Long conditionId;
    private String item;
    private String formulaDesc;
    private Long chassis;
    private String sb1;
    private String sb1_part;
    private String sb2;
    private String sb2_part;
    private String sb3;
    private String sb3_part;

}
