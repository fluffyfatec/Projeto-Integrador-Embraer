package com.embraer.backend.condition.service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.condition.dto.ConditionDTO;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.formula.entity.Formula;
import com.embraer.backend.formula.repositories.FormulaRepository;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
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
    private ServiceBulletinRepository serviceBulletinRepository;


    @Transactional
    public void saveConditionAndItem(ConditionDTO conditionDTO) {

        try {

            Item newItem = new Item();
            newItem.setItemName(conditionDTO.getItem());
            newItem.setItemDtregister(new Timestamp(System.currentTimeMillis()));
            itemRepository.save(newItem);

            Condition newCondition = new Condition();
            newCondition.setItemIdLong(itemRepository.findItemIdByItemName(conditionDTO.getItem()));
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


            conditionRepository.save(newCondition);

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void updateCondition(ConditionDTO conditionDTO) {

        Condition newCondition = new Condition();
        newCondition.setConditionId(conditionDTO.getConditionId());

        try {
            if (conditionDTO.getFormulaDesc() == null) {
                Formula formula = null;
                newCondition.setFormulaId(formula);
            } else {
                newCondition.setFormulaIdLong(formulaRepository.findFormulaIdByFormulaDesc(conditionDTO.getFormulaDesc()));
            }

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

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Transactional
    public void deleteConditionAndItem(Long condition, Long item) {

        try {
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

        return conditionDTO;

    }

}