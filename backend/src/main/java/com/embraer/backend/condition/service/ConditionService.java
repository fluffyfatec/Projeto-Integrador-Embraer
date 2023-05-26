package com.embraer.backend.condition.service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.condition.dto.ConditionDTO;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.conditionOperator.entity.ConditionOperator;
import com.embraer.backend.conditionOperator.repository.ConditionOperatorRepository;
import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.formula.repositories.FormulaRepository;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.log.entity.Log;
import com.embraer.backend.log.repository.LogRepository;
import com.embraer.backend.operator.entity.Operator;
import com.embraer.backend.operator.repository.OperatorRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.embraer.backend.condition.repositories.conditionRepository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Optional;

@Service
public class ConditionService {

    @Autowired
    private conditionRepository conditionRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private FormulaRepository formulaRepository;

    @Autowired
    private OperatorRepository operatorRepository;

    @Autowired
    private ConditionOperatorRepository conditionOperatorRepository;

    @Autowired
    private ServiceBulletinRepository serviceBulletinRepository;

    @Autowired
    LogRepository logRepository;

    @Autowired
    UserSession userSession;


    @Transactional
    public void saveConditionAndItem(ConditionDTO conditionDTO) {

        try {

            Item newItem = new Item();
            newItem.setItemName(conditionDTO.getItem());
            newItem.setItemDtregister(new Timestamp(System.currentTimeMillis()));
            newItem.setStatus("A");
            itemRepository.save(newItem);

            Condition newCondition = new Condition();
            newCondition.setItemIdLong(itemRepository.findItemIdByItemName(conditionDTO.getItem()));

            // If formulaId don't exist, create a new insert in Formula
            if (formulaRepository.findFormulaIdByFormulaDesc(conditionDTO.getFormulaDesc()) == null) {
                Formula newFormula = new Formula();
                newFormula.setFormulaDescription(conditionDTO.getFormulaDesc());

                formulaRepository.save(newFormula);
            }

            newCondition.setFormulaIdLong(formulaRepository.findFormulaIdByFormulaDesc(conditionDTO.getFormulaDesc()));


            if (conditionDTO.getChassis() == null) {
                Chassis chassis = null;
                newCondition.setChassisBiggerThenId(chassis);
            } else {
                newCondition.setChassisBiggerThenIdLong(conditionDTO.getChassis());
            }

            if (conditionDTO.getSb1() == null || conditionDTO.getSb1_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb1Id(serviceBulletin);
            } else {
                newCondition.setSb1IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb1(), conditionDTO.getSb1_part()));
            }
            if (conditionDTO.getSb2() == null || conditionDTO.getSb2_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb2Id(serviceBulletin);
            } else {
                newCondition.setSb2IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb2(), conditionDTO.getSb2_part()));
            }
            if (conditionDTO.getSb3() == null || conditionDTO.getSb3_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb3Id(serviceBulletin);
            } else {
                newCondition.setSb3IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb3(), conditionDTO.getSb3_part()));
            }

            if (conditionDTO.getSb4() == null || conditionDTO.getSb4_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb4Id(serviceBulletin);
            } else {
                newCondition.setSb4IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb4(), conditionDTO.getSb4_part()));
            }
            if (conditionDTO.getSb5() == null || conditionDTO.getSb5_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb5Id(serviceBulletin);
            } else {
                newCondition.setSb5IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb5(), conditionDTO.getSb5_part()));
            }
            if (conditionDTO.getSb6() == null || conditionDTO.getSb6_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb6Id(serviceBulletin);
            } else {
                newCondition.setSb6IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb6(), conditionDTO.getSb6_part()));
            }

            if (conditionDTO.getSb7() == null || conditionDTO.getSb7_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb7Id(serviceBulletin);
            } else {
                newCondition.setSb7IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb7(), conditionDTO.getSb7_part()));
            }
            if (conditionDTO.getSb8() == null || conditionDTO.getSb8_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb8Id(serviceBulletin);
            } else {
                newCondition.setSb8IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb8(), conditionDTO.getSb8_part()));
            }
            if (conditionDTO.getSb9() == null || conditionDTO.getSb9_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb9Id(serviceBulletin);
            } else {
                newCondition.setSb9IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb9(), conditionDTO.getSb9_part()));
            }

            if (conditionDTO.getSb10() == null || conditionDTO.getSb10_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb10Id(serviceBulletin);
            } else {
                newCondition.setSb10IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb10(), conditionDTO.getSb10_part()));
            }
            if (conditionDTO.getSb11() == null || conditionDTO.getSb11_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb11Id(serviceBulletin);
            } else {
                newCondition.setSb11IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb11(), conditionDTO.getSb11_part()));
            }
            if (conditionDTO.getSb12() == null || conditionDTO.getSb12_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb12Id(serviceBulletin);
            } else {
                newCondition.setSb12IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb12(), conditionDTO.getSb12_part()));
            }

            if (conditionDTO.getSb13() == null || conditionDTO.getSb13_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb13Id(serviceBulletin);
            } else {
                newCondition.setSb13IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb13(), conditionDTO.getSb13_part()));
            }
            if (conditionDTO.getSb14() == null || conditionDTO.getSb14_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb14Id(serviceBulletin);
            } else {
                newCondition.setSb14IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb14(), conditionDTO.getSb14_part()));
            }
            if (conditionDTO.getSb15() == null || conditionDTO.getSb15_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb15Id(serviceBulletin);
            } else {
                newCondition.setSb15IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb15(), conditionDTO.getSb15_part()));
            }

            if (conditionDTO.getSb16() == null || conditionDTO.getSb16_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb16Id(serviceBulletin);
            } else {
                newCondition.setSb16IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb16(), conditionDTO.getSb16_part()));
            }
            if (conditionDTO.getSb17() == null || conditionDTO.getSb17_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb17Id(serviceBulletin);
            } else {
                newCondition.setSb17IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb17(), conditionDTO.getSb17_part()));
            }
            if (conditionDTO.getSb18() == null || conditionDTO.getSb18_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb18Id(serviceBulletin);
            } else {
                newCondition.setSb18IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb18(), conditionDTO.getSb18_part()));
            }

            if (conditionDTO.getSb19() == null || conditionDTO.getSb19_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb19Id(serviceBulletin);
            } else {
                newCondition.setSb19IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb19(), conditionDTO.getSb19_part()));
            }
            if (conditionDTO.getSb20() == null || conditionDTO.getSb20_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb20Id(serviceBulletin);
            } else {
                newCondition.setSb20IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb20(), conditionDTO.getSb20_part()));
            }
            if (conditionDTO.getSb21() == null || conditionDTO.getSb21_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb21Id(serviceBulletin);
            } else {
                newCondition.setSb21IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb21(), conditionDTO.getSb21_part()));
            }

            if (conditionDTO.getSb22() == null || conditionDTO.getSb22_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb22Id(serviceBulletin);
            } else {
                newCondition.setSb22IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb22(), conditionDTO.getSb22_part()));
            }
            if (conditionDTO.getSb23() == null || conditionDTO.getSb23_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb23Id(serviceBulletin);
            } else {
                newCondition.setSb23IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb23(), conditionDTO.getSb23_part()));
            }
            if (conditionDTO.getSb24() == null || conditionDTO.getSb24_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb24Id(serviceBulletin);
            } else {
                newCondition.setSb24IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb24(), conditionDTO.getSb24_part()));
            }

            if (conditionDTO.getSb25() == null || conditionDTO.getSb25_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb25Id(serviceBulletin);
            } else {
                newCondition.setSb25IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb25(), conditionDTO.getSb25_part()));
            }
            if (conditionDTO.getSb26() == null || conditionDTO.getSb26_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb26Id(serviceBulletin);
            } else {
                newCondition.setSb26IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb26(), conditionDTO.getSb26_part()));
            }
            if (conditionDTO.getSb27() == null || conditionDTO.getSb27_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb27Id(serviceBulletin);
            } else {
                newCondition.setSb27IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb27(), conditionDTO.getSb27_part()));
            }

            if (conditionDTO.getSb28() == null || conditionDTO.getSb28_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb28Id(serviceBulletin);
            } else {
                newCondition.setSb28IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb28(), conditionDTO.getSb28_part()));
            }
            if (conditionDTO.getSb29() == null || conditionDTO.getSb29_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb29Id(serviceBulletin);
            } else {
                newCondition.setSb29IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb29(), conditionDTO.getSb29_part()));
            }
            if (conditionDTO.getSb30() == null || conditionDTO.getSb30_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb30Id(serviceBulletin);
            } else {
                newCondition.setSb30IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb30(), conditionDTO.getSb30_part()));
            }

            conditionRepository.save(newCondition);


            ConditionOperator newConditionOperator = new ConditionOperator();
            newConditionOperator.setConditionLong(newCondition.getConditionId() + 1);

            if (conditionDTO.getOperator_condit_1() == null) {
                Operator operator = null;
                newConditionOperator.setOperator1(operator);
            } else {
                newConditionOperator.setOperator1Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_1()));
            }
            if (conditionDTO.getOperator_condit_2() == null) {
                Operator operator = null;
                newConditionOperator.setOperator2(operator);
            } else {
                newConditionOperator.setOperator2Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_2()));
            }
            if (conditionDTO.getOperator_condit_3() == null) {
                Operator operator = null;
                newConditionOperator.setOperator3(operator);
            } else {
                newConditionOperator.setOperator3Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_3()));
            }
            if (conditionDTO.getOperator_condit_4() == null) {
                Operator operator = null;
                newConditionOperator.setOperator4(operator);
            } else {
                newConditionOperator.setOperator4Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_4()));
            }
            if (conditionDTO.getOperator_condit_5() == null) {
                Operator operator = null;
                newConditionOperator.setOperator5(operator);
            } else {
                newConditionOperator.setOperator5Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_5()));
            }

            conditionOperatorRepository.save(newConditionOperator);


            // Log generation
            Log newLog = new Log();

            newLog.setUsername(userSession.getUserAuthentication().getUsername());
            newLog.setRole(userSession.getUserAuthentication().getRole());
            newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
            newLog.setOperation("Creation of item " + conditionDTO.getItem());
            newLog.setOldRegister("It does not have");
            newLog.setNewRegister("Formula " + conditionDTO.getFormulaDesc());
            newLog.setChassis(null);
            newLog.setBooleanAdmin(1);

            logRepository.saveAndFlush(newLog);


        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void updateCondition(ConditionDTO conditionDTO) {

        Condition newCondition = new Condition();
        newCondition.setConditionId(conditionDTO.getConditionId());

        ConditionOperator newConditionOperator = new ConditionOperator();

        try {
            if (conditionDTO.getFormulaDesc() == null) {
                Formula formula = null;
                newCondition.setFormulaId(formula);
            } else {

                // If formulaId don't exist, create a new insert in Formula
                if (formulaRepository.findFormulaIdByFormulaDesc(conditionDTO.getFormulaDesc()) == null) {
                    Formula newFormula = new Formula();
                    newFormula.setFormulaDescription(conditionDTO.getFormulaDesc());

                    formulaRepository.save(newFormula);
                }

                newCondition.setFormulaIdLong(formulaRepository.findFormulaIdByFormulaDesc(conditionDTO.getFormulaDesc()));
            }

            Long formulaId = conditionRepository.getFormulaIdByConditionId(conditionDTO.getConditionId());
            String oldRegister = formulaRepository.findFormulaDescByFormulaId(formulaId);

            conditionRepository.updateFormulaId(conditionDTO.getConditionId(), newCondition.getFormulaId());


            if (conditionDTO.getChassis() == null) {
                Chassis chassis = null;
                newCondition.setChassisBiggerThenId(chassis);
            } else {
                newCondition.setChassisBiggerThenIdLong(conditionDTO.getChassis());
            }

            conditionRepository.updateChassisBiggerThen(conditionDTO.getConditionId(), newCondition.getChassisBiggerThenId());


            if (conditionDTO.getSb1() == null || conditionDTO.getSb1_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb1Id(serviceBulletin);
            } else {
                newCondition.setSb1IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb1(), conditionDTO.getSb1_part()));
            }

            conditionRepository.updateSb1Id(conditionDTO.getConditionId(), newCondition.getSb1Id());


            if (conditionDTO.getSb2() == null || conditionDTO.getSb2_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb2Id(serviceBulletin);
            } else {
                newCondition.setSb2IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb2(), conditionDTO.getSb2_part()));
            }

            conditionRepository.updateSb2Id(conditionDTO.getConditionId(), newCondition.getSb2Id());


            if (conditionDTO.getSb3() == null || conditionDTO.getSb3_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb3Id(serviceBulletin);
            } else {
                newCondition.setSb3IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb3(), conditionDTO.getSb3_part()));
            }

            conditionRepository.updateSb3Id(conditionDTO.getConditionId(), newCondition.getSb3Id());

            if (conditionDTO.getSb4() == null || conditionDTO.getSb4_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb4Id(serviceBulletin);
            } else {
                newCondition.setSb4IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb4(), conditionDTO.getSb4_part()));
            }

            conditionRepository.updateSb4Id(conditionDTO.getConditionId(), newCondition.getSb4Id());


            if (conditionDTO.getSb5() == null || conditionDTO.getSb5_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb5Id(serviceBulletin);
            } else {
                newCondition.setSb5IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb5(), conditionDTO.getSb5_part()));
            }

            conditionRepository.updateSb5Id(conditionDTO.getConditionId(), newCondition.getSb5Id());


            if (conditionDTO.getSb6() == null || conditionDTO.getSb6_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb6Id(serviceBulletin);
            } else {
                newCondition.setSb6IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb6(), conditionDTO.getSb6_part()));
            }

            conditionRepository.updateSb6Id(conditionDTO.getConditionId(), newCondition.getSb6Id());

            if (conditionDTO.getSb7() == null || conditionDTO.getSb7_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb7Id(serviceBulletin);
            } else {
                newCondition.setSb7IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb7(), conditionDTO.getSb7_part()));
            }

            conditionRepository.updateSb7Id(conditionDTO.getConditionId(), newCondition.getSb7Id());


            if (conditionDTO.getSb8() == null || conditionDTO.getSb8_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb8Id(serviceBulletin);
            } else {
                newCondition.setSb8IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb8(), conditionDTO.getSb8_part()));
            }

            conditionRepository.updateSb8Id(conditionDTO.getConditionId(), newCondition.getSb8Id());


            if (conditionDTO.getSb9() == null || conditionDTO.getSb9_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb9Id(serviceBulletin);
            } else {
                newCondition.setSb9IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb9(), conditionDTO.getSb9_part()));
            }

            conditionRepository.updateSb9Id(conditionDTO.getConditionId(), newCondition.getSb9Id());

            if (conditionDTO.getSb10() == null || conditionDTO.getSb10_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb10Id(serviceBulletin);
            } else {
                newCondition.setSb10IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb10(), conditionDTO.getSb10_part()));
            }

            conditionRepository.updateSb10Id(conditionDTO.getConditionId(), newCondition.getSb10Id());


            if (conditionDTO.getSb11() == null || conditionDTO.getSb11_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb11Id(serviceBulletin);
            } else {
                newCondition.setSb11IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb11(), conditionDTO.getSb11_part()));
            }

            conditionRepository.updateSb11Id(conditionDTO.getConditionId(), newCondition.getSb11Id());


            if (conditionDTO.getSb12() == null || conditionDTO.getSb12_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb12Id(serviceBulletin);
            } else {
                newCondition.setSb12IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb12(), conditionDTO.getSb12_part()));
            }

            conditionRepository.updateSb12Id(conditionDTO.getConditionId(), newCondition.getSb12Id());

            if (conditionDTO.getSb13() == null || conditionDTO.getSb13_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb13Id(serviceBulletin);
            } else {
                newCondition.setSb13IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb13(), conditionDTO.getSb13_part()));
            }

            conditionRepository.updateSb13Id(conditionDTO.getConditionId(), newCondition.getSb13Id());


            if (conditionDTO.getSb14() == null || conditionDTO.getSb14_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb14Id(serviceBulletin);
            } else {
                newCondition.setSb14IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb14(), conditionDTO.getSb14_part()));
            }

            conditionRepository.updateSb14Id(conditionDTO.getConditionId(), newCondition.getSb14Id());


            if (conditionDTO.getSb15() == null || conditionDTO.getSb15_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb15Id(serviceBulletin);
            } else {
                newCondition.setSb15IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb15(), conditionDTO.getSb15_part()));
            }

            conditionRepository.updateSb15Id(conditionDTO.getConditionId(), newCondition.getSb15Id());

            if (conditionDTO.getSb16() == null || conditionDTO.getSb16_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb16Id(serviceBulletin);
            } else {
                newCondition.setSb16IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb16(), conditionDTO.getSb16_part()));
            }

            conditionRepository.updateSb16Id(conditionDTO.getConditionId(), newCondition.getSb16Id());


            if (conditionDTO.getSb17() == null || conditionDTO.getSb17_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb17Id(serviceBulletin);
            } else {
                newCondition.setSb17IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb17(), conditionDTO.getSb17_part()));
            }

            conditionRepository.updateSb17Id(conditionDTO.getConditionId(), newCondition.getSb17Id());


            if (conditionDTO.getSb18() == null || conditionDTO.getSb18_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb18Id(serviceBulletin);
            } else {
                newCondition.setSb18IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb18(), conditionDTO.getSb18_part()));
            }

            conditionRepository.updateSb18Id(conditionDTO.getConditionId(), newCondition.getSb18Id());

            if (conditionDTO.getSb19() == null || conditionDTO.getSb19_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb19Id(serviceBulletin);
            } else {
                newCondition.setSb19IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb19(), conditionDTO.getSb19_part()));
            }

            conditionRepository.updateSb19Id(conditionDTO.getConditionId(), newCondition.getSb19Id());


            if (conditionDTO.getSb20() == null || conditionDTO.getSb20_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb20Id(serviceBulletin);
            } else {
                newCondition.setSb20IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb20(), conditionDTO.getSb20_part()));
            }

            conditionRepository.updateSb20Id(conditionDTO.getConditionId(), newCondition.getSb20Id());


            if (conditionDTO.getSb21() == null || conditionDTO.getSb21_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb21Id(serviceBulletin);
            } else {
                newCondition.setSb21IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb21(), conditionDTO.getSb21_part()));
            }

            conditionRepository.updateSb21Id(conditionDTO.getConditionId(), newCondition.getSb21Id());

            if (conditionDTO.getSb22() == null || conditionDTO.getSb22_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb22Id(serviceBulletin);
            } else {
                newCondition.setSb22IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb22(), conditionDTO.getSb22_part()));
            }

            conditionRepository.updateSb22Id(conditionDTO.getConditionId(), newCondition.getSb22Id());


            if (conditionDTO.getSb23() == null || conditionDTO.getSb23_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb23Id(serviceBulletin);
            } else {
                newCondition.setSb23IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb23(), conditionDTO.getSb23_part()));
            }

            conditionRepository.updateSb23Id(conditionDTO.getConditionId(), newCondition.getSb23Id());


            if (conditionDTO.getSb24() == null || conditionDTO.getSb24_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb24Id(serviceBulletin);
            } else {
                newCondition.setSb24IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb24(), conditionDTO.getSb24_part()));
            }

            conditionRepository.updateSb24Id(conditionDTO.getConditionId(), newCondition.getSb24Id());

            if (conditionDTO.getSb25() == null || conditionDTO.getSb25_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb25Id(serviceBulletin);
            } else {
                newCondition.setSb25IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb25(), conditionDTO.getSb25_part()));
            }

            conditionRepository.updateSb25Id(conditionDTO.getConditionId(), newCondition.getSb25Id());


            if (conditionDTO.getSb26() == null || conditionDTO.getSb26_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb26Id(serviceBulletin);
            } else {
                newCondition.setSb26IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb26(), conditionDTO.getSb26_part()));
            }

            conditionRepository.updateSb26Id(conditionDTO.getConditionId(), newCondition.getSb26Id());


            if (conditionDTO.getSb27() == null || conditionDTO.getSb27_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb27Id(serviceBulletin);
            } else {
                newCondition.setSb27IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb27(), conditionDTO.getSb27_part()));
            }

            conditionRepository.updateSb27Id(conditionDTO.getConditionId(), newCondition.getSb27Id());

            if (conditionDTO.getSb28() == null || conditionDTO.getSb28_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb28Id(serviceBulletin);
            } else {
                newCondition.setSb28IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb28(), conditionDTO.getSb28_part()));
            }

            conditionRepository.updateSb28Id(conditionDTO.getConditionId(), newCondition.getSb28Id());


            if (conditionDTO.getSb29() == null || conditionDTO.getSb29_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb29Id(serviceBulletin);
            } else {
                newCondition.setSb29IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb29(), conditionDTO.getSb29_part()));
            }

            conditionRepository.updateSb29Id(conditionDTO.getConditionId(), newCondition.getSb29Id());


            if (conditionDTO.getSb30() == null || conditionDTO.getSb30_part() == null) {
                ServiceBulletin serviceBulletin = null;
                newCondition.setSb30Id(serviceBulletin);
            } else {
                newCondition.setSb30IdLong(serviceBulletinRepository.findServiceBulletinIdBySbNameAndSbPartService(conditionDTO.getSb30(), conditionDTO.getSb30_part()));
            }

            conditionRepository.updateSb30Id(conditionDTO.getConditionId(), newCondition.getSb30Id());

            // Table CONDITION_ITEM_OPERATOR
            if (conditionDTO.getOperator_condit_1() == null) {
                Operator operator = null;
                newConditionOperator.setOperator1(operator);
            } else {
                newConditionOperator.setOperator1Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_1()));
            }

            conditionOperatorRepository.updateOperator1(conditionDTO.getConditionId(), newConditionOperator.getOperator1());

            if (conditionDTO.getOperator_condit_2() == null) {
                Operator operator = null;
                newConditionOperator.setOperator2(operator);
            } else {
                newConditionOperator.setOperator2Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_2()));
            }

            conditionOperatorRepository.updateOperator2(conditionDTO.getConditionId(), newConditionOperator.getOperator2());

            if (conditionDTO.getOperator_condit_3() == null) {
                Operator operator = null;
                newConditionOperator.setOperator3(operator);
            } else {
                newConditionOperator.setOperator3Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_3()));
            }

            conditionOperatorRepository.updateOperator3(conditionDTO.getConditionId(), newConditionOperator.getOperator3());

            if (conditionDTO.getOperator_condit_4() == null) {
                Operator operator = null;
                newConditionOperator.setOperator4(operator);
            } else {
                newConditionOperator.setOperator4Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_4()));
            }

            conditionOperatorRepository.updateOperator4(conditionDTO.getConditionId(), newConditionOperator.getOperator4());

            if (conditionDTO.getOperator_condit_5() == null) {
                Operator operator = null;
                newConditionOperator.setOperator5(operator);
            } else {
                newConditionOperator.setOperator5Long(operatorRepository.findOperatorIdByOperatorType(conditionDTO.getOperator_condit_5()));
            }

            conditionOperatorRepository.updateOperator5(conditionDTO.getConditionId(), newConditionOperator.getOperator5());


            // Log generation
            Log newLog = new Log();

            newLog.setUsername(userSession.getUserAuthentication().getUsername());
            newLog.setRole(userSession.getUserAuthentication().getRole());
            newLog.setDtregister(new Timestamp(System.currentTimeMillis()));
            newLog.setOperation("Update of item " + conditionDTO.getItem() + " condition");
            newLog.setOldRegister("Formula " + oldRegister);
            newLog.setNewRegister("Formula " + conditionDTO.getFormulaDesc());
            newLog.setChassis(null);
            newLog.setBooleanAdmin(1);

            logRepository.saveAndFlush(newLog);



        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void deleteConditionAndItem(Long condition, Long item) {

        try {
            conditionOperatorRepository.deleteByCondition(condition);
            conditionRepository.deleteByConditionId(condition);
            itemRepository.deleteByItemId(item);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public ConditionDTO listConditionByItemId(Long item) {

        Condition condition = conditionRepository.listAllByItemId(item);

        ConditionDTO conditionDTO = new ConditionDTO();
        conditionDTO.setConditionId(condition.getConditionId());
        conditionDTO.setItem(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
        conditionDTO.setFormulaDesc(formulaRepository.findFormulaDescByFormulaId(condition.getFormulaIdLong()));

        ConditionOperator conditionOperator = conditionOperatorRepository.listAllByCondition(conditionDTO.getConditionId());

        if (condition.getChassisBiggerThenId() != null) {
            conditionDTO.setChassis(condition.getChassisBiggerThenIdLong());
        } else {
            conditionDTO.setChassis(null);
        }

        if (condition.getSb1Id() != null) {
            conditionDTO.setSb1(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb1IdLong()));
            conditionDTO.setSb1_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb1IdLong()));

        } else {
            conditionDTO.setSb1(null);
            conditionDTO.setSb1_part(null);
        }

        if (condition.getSb2Id() != null) {
            conditionDTO.setSb2(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb2IdLong()));
            conditionDTO.setSb2_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb2IdLong()));
        } else {
            conditionDTO.setSb2(null);
            conditionDTO.setSb2_part(null);
        }

        if (condition.getSb3Id() != null) {
            conditionDTO.setSb3(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb3IdLong()));
            conditionDTO.setSb3_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb3IdLong()));
        } else {
            conditionDTO.setSb3(null);
            conditionDTO.setSb3_part(null);
        }

        if (condition.getSb4Id() != null) {
            conditionDTO.setSb4(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb4IdLong()));
            conditionDTO.setSb4_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb4IdLong()));

        } else {
            conditionDTO.setSb4(null);
            conditionDTO.setSb4_part(null);
        }

        if (condition.getSb5Id() != null) {
            conditionDTO.setSb5(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb5IdLong()));
            conditionDTO.setSb5_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb5IdLong()));
        } else {
            conditionDTO.setSb5(null);
            conditionDTO.setSb5_part(null);
        }

        if (condition.getSb6Id() != null) {
            conditionDTO.setSb6(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb6IdLong()));
            conditionDTO.setSb6_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb6IdLong()));
        } else {
            conditionDTO.setSb6(null);
            conditionDTO.setSb6_part(null);
        }

        if (condition.getSb7Id() != null) {
            conditionDTO.setSb7(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb7IdLong()));
            conditionDTO.setSb7_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb7IdLong()));

        } else {
            conditionDTO.setSb7(null);
            conditionDTO.setSb7_part(null);
        }

        if (condition.getSb8Id() != null) {
            conditionDTO.setSb8(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb8IdLong()));
            conditionDTO.setSb8_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb8IdLong()));
        } else {
            conditionDTO.setSb8(null);
            conditionDTO.setSb8_part(null);
        }

        if (condition.getSb9Id() != null) {
            conditionDTO.setSb9(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb9IdLong()));
            conditionDTO.setSb9_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb9IdLong()));
        } else {
            conditionDTO.setSb9(null);
            conditionDTO.setSb9_part(null);
        }

        if (condition.getSb10Id() != null) {
            conditionDTO.setSb10(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb10IdLong()));
            conditionDTO.setSb10_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb10IdLong()));

        } else {
            conditionDTO.setSb10(null);
            conditionDTO.setSb10_part(null);
        }

        if (condition.getSb11Id() != null) {
            conditionDTO.setSb11(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb11IdLong()));
            conditionDTO.setSb11_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb11IdLong()));
        } else {
            conditionDTO.setSb11(null);
            conditionDTO.setSb11_part(null);
        }

        if (condition.getSb12Id() != null) {
            conditionDTO.setSb12(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb12IdLong()));
            conditionDTO.setSb12_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb12IdLong()));
        } else {
            conditionDTO.setSb12(null);
            conditionDTO.setSb12_part(null);
        }

        if (condition.getSb13Id() != null) {
            conditionDTO.setSb13(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb13IdLong()));
            conditionDTO.setSb13_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb13IdLong()));

        } else {
            conditionDTO.setSb13(null);
            conditionDTO.setSb13_part(null);
        }

        if (condition.getSb14Id() != null) {
            conditionDTO.setSb14(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb14IdLong()));
            conditionDTO.setSb14_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb14IdLong()));
        } else {
            conditionDTO.setSb14(null);
            conditionDTO.setSb14_part(null);
        }

        if (condition.getSb15Id() != null) {
            conditionDTO.setSb15(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb15IdLong()));
            conditionDTO.setSb15_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb15IdLong()));
        } else {
            conditionDTO.setSb15(null);
            conditionDTO.setSb15_part(null);
        }

        if (condition.getSb16Id() != null) {
            conditionDTO.setSb16(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb16IdLong()));
            conditionDTO.setSb16_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb16IdLong()));

        } else {
            conditionDTO.setSb16(null);
            conditionDTO.setSb16_part(null);
        }

        if (condition.getSb17Id() != null) {
            conditionDTO.setSb17(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb17IdLong()));
            conditionDTO.setSb17_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb17IdLong()));
        } else {
            conditionDTO.setSb17(null);
            conditionDTO.setSb17_part(null);
        }

        if (condition.getSb18Id() != null) {
            conditionDTO.setSb18(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb18IdLong()));
            conditionDTO.setSb18_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb18IdLong()));
        } else {
            conditionDTO.setSb18(null);
            conditionDTO.setSb18_part(null);
        }

        if (condition.getSb19Id() != null) {
            conditionDTO.setSb19(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb19IdLong()));
            conditionDTO.setSb19_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb19IdLong()));

        } else {
            conditionDTO.setSb19(null);
            conditionDTO.setSb19_part(null);
        }

        if (condition.getSb20Id() != null) {
            conditionDTO.setSb20(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb20IdLong()));
            conditionDTO.setSb20_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb20IdLong()));
        } else {
            conditionDTO.setSb20(null);
            conditionDTO.setSb20_part(null);
        }

        if (condition.getSb21Id() != null) {
            conditionDTO.setSb21(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb21IdLong()));
            conditionDTO.setSb21_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb21IdLong()));
        } else {
            conditionDTO.setSb21(null);
            conditionDTO.setSb21_part(null);
        }

        if (condition.getSb22Id() != null) {
            conditionDTO.setSb22(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb22IdLong()));
            conditionDTO.setSb22_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb22IdLong()));

        } else {
            conditionDTO.setSb22(null);
            conditionDTO.setSb22_part(null);
        }

        if (condition.getSb23Id() != null) {
            conditionDTO.setSb23(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb23IdLong()));
            conditionDTO.setSb23_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb23IdLong()));
        } else {
            conditionDTO.setSb23(null);
            conditionDTO.setSb23_part(null);
        }

        if (condition.getSb24Id() != null) {
            conditionDTO.setSb24(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb24IdLong()));
            conditionDTO.setSb24_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb24IdLong()));
        } else {
            conditionDTO.setSb24(null);
            conditionDTO.setSb24_part(null);
        }

        if (condition.getSb25Id() != null) {
            conditionDTO.setSb25(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb25IdLong()));
            conditionDTO.setSb25_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb25IdLong()));

        } else {
            conditionDTO.setSb25(null);
            conditionDTO.setSb25_part(null);
        }

        if (condition.getSb26Id() != null) {
            conditionDTO.setSb26(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb26IdLong()));
            conditionDTO.setSb26_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb26IdLong()));
        } else {
            conditionDTO.setSb26(null);
            conditionDTO.setSb26_part(null);
        }

        if (condition.getSb27Id() != null) {
            conditionDTO.setSb27(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb27IdLong()));
            conditionDTO.setSb27_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb27IdLong()));
        } else {
            conditionDTO.setSb27(null);
            conditionDTO.setSb27_part(null);
        }

        if (condition.getSb28Id() != null) {
            conditionDTO.setSb28(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb28IdLong()));
            conditionDTO.setSb28_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb28IdLong()));

        } else {
            conditionDTO.setSb28(null);
            conditionDTO.setSb28_part(null);
        }

        if (condition.getSb29Id() != null) {
            conditionDTO.setSb29(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb29IdLong()));
            conditionDTO.setSb29_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb29IdLong()));
        } else {
            conditionDTO.setSb29(null);
            conditionDTO.setSb29_part(null);
        }

        if (condition.getSb30Id() != null) {
            conditionDTO.setSb30(serviceBulletinRepository.findSbNameByServiceBulletinId(condition.getSb30IdLong()));
            conditionDTO.setSb30_part(serviceBulletinRepository.findSbPartByServiceBulletinId(condition.getSb30IdLong()));
        } else {
            conditionDTO.setSb30(null);
            conditionDTO.setSb30_part(null);
        }

        // Table CONDITION_ITEM_OPERATOR
        if (conditionOperator.getOperator1() != null) {
            conditionDTO.setOperator_condit_1(operatorRepository.findOperatorTypeByOperatorId(conditionOperator.getOperator1Long()));
        } else {
            conditionDTO.setOperator_condit_1(null);
        }

        if (conditionOperator.getOperator2() != null) {
            conditionDTO.setOperator_condit_2(operatorRepository.findOperatorTypeByOperatorId(conditionOperator.getOperator2Long()));
        } else {
            conditionDTO.setOperator_condit_2(null);
        }

        if (conditionOperator.getOperator3() != null) {
            conditionDTO.setOperator_condit_3(operatorRepository.findOperatorTypeByOperatorId(conditionOperator.getOperator3Long()));
        } else {
            conditionDTO.setOperator_condit_3(null);
        }

        if (conditionOperator.getOperator4() != null) {
            conditionDTO.setOperator_condit_4(operatorRepository.findOperatorTypeByOperatorId(conditionOperator.getOperator4Long()));
        } else {
            conditionDTO.setOperator_condit_4(null);
        }

        if (conditionOperator.getOperator5() != null) {
            conditionDTO.setOperator_condit_5(operatorRepository.findOperatorTypeByOperatorId(conditionOperator.getOperator5Long()));
        } else {
            conditionDTO.setOperator_condit_5(null);
        }


        return conditionDTO;

    }

}