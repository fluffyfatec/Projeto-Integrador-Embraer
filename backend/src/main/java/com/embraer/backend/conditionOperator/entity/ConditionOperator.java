package com.embraer.backend.conditionOperator.entity;

import javax.persistence.*;

import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.operator.entity.Operator;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

@Entity
@Table(name = "CONDITION_ITEM_OPERATOR")
public class ConditionOperator {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "condition_operator_seq_generator")
    @SequenceGenerator(name="condition_operator_seq_generator", sequenceName = "CONDITION_ITEM_OP_ID_SEQ", allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "condition_id", referencedColumnName = "condition_id")
    private Condition condition;

    @ManyToOne
    @JoinColumn(name = "operator_condit_1", referencedColumnName = "operator_id")
    private Operator operator1;

    @ManyToOne
    @JoinColumn(name = "operator_condit_2", referencedColumnName = "operator_id")
    private Operator operator2;

    @ManyToOne
    @JoinColumn(name = "operator_condit_3", referencedColumnName = "operator_id")
    private Operator operator3;

    @ManyToOne
    @JoinColumn(name = "operator_condit_4", referencedColumnName = "operator_id")
    private Operator operator4;

    @ManyToOne
    @JoinColumn(name = "operator_condit_5", referencedColumnName = "operator_id")
    private Operator operator5;

    public Long getConditionLong() {
        return condition.getConditionId();
    }

    public void setConditionLong(Long condition) {
        Condition condition1 = new Condition();
        condition1.setConditionId(condition);
        this.condition = condition1;
    }

    public Long getOperator1Long() {
        return operator1.getOperatorId();
    }

    public void setOperator1Long(Long operatorId) {
        Operator operator = new Operator();
        operator.setOperatorId(operatorId);
        this.operator1 = operator;
    }

    public Long getOperator2Long() {
        return operator2.getOperatorId();
    }

    public void setOperator2Long(Long operatorId) {
        Operator operator = new Operator();
        operator.setOperatorId(operatorId);
        this.operator2 = operator;
    }

    public Long getOperator3Long() {
        return operator3.getOperatorId();
    }

    public void setOperator3Long(Long operatorId) {
        Operator operator = new Operator();
        operator.setOperatorId(operatorId);
        this.operator3 = operator;
    }

    public Long getOperator4Long() {
        return operator4.getOperatorId();
    }

    public void setOperator4Long(Long operatorId) {
        Operator operator = new Operator();
        operator.setOperatorId(operatorId);
        this.operator4 = operator;
    }

    public Long getOperator5Long() {
        return operator5.getOperatorId();
    }

    public void setOperator5Long(Long operatorId) {
        Operator operator = new Operator();
        operator.setOperatorId(operatorId);
        this.operator5 = operator;
    }


}

