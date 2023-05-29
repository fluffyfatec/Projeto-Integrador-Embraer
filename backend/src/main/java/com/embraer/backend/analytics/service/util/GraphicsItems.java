package com.embraer.backend.analytics.service.util;


import com.embraer.backend.analytics.dto.ListGraphicItemsStatusDataDTO;
import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.condition.repositories.conditionRepository;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.util.Logics.*;
import com.embraer.backend.item.services.ListItemsByChassi.util.Logics.Formulas.*;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class GraphicsItems {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    com.embraer.backend.condition.repositories.conditionRepository conditionRepository;

    @Autowired
    ServiceBulletinRepository serviceBulletinRepository;

    @Autowired
    FiveConditionsIncorporated fiveConditionsIncorporated;

    @Autowired
    FiveConditionsApplicable fiveConditionsApplicable;

    @Autowired
    FiveConditionsNotApplicable fiveConditionsNotApplicable;

    @Autowired
    FourConditionsIncorporated fourConditionsIncorporated;

    @Autowired
    FourConditionsApplicable fourConditionsApplicable;

    @Autowired
    FourConditionsNotApplicable fourConditionsNotApplicable;

    @Autowired
    ThreeConditionsIncorporated threeConditionsIncorporated;

    @Autowired
    ThreeConditionsApplicable threeConditionsApplicable;

    @Autowired
    ThreeConditionsNotApplicable threeConditionsNotApplicable;

    @Autowired
    TwoConditionsIncorporated twoConditionsIncorporated;

    @Autowired
    TwoConditionsApplicable twoConditionsApplicable;

    @Autowired
    TwoConditionsNotApplicable twoConditionsNotApplicable;

    @Autowired
    Formula3Incorporated formula3Incorporated;

    @Autowired
    Formula3Applicable formula3Applicable;

    @Autowired
    Formula3NotApplicable formula3NotApplicable;

    @Autowired
    Formula4Incorporated formula4Incorporated;

    @Autowired
    Formula4Applicable formula4Applicable;

    @Autowired
    Formula4NotApplicable formula4NotApplicable;

    @Autowired
    Formula7Incorporated formula7Incorporated;

    @Autowired
    Formula7Applicable formula7Applicable;

    @Autowired
    Formula7NotApplicable formula7NotApplicable;

    @Autowired
    Formula22Incorporated formula22Incorporated;

    @Autowired
    Formula22Applicable formula22Applicable;

    @Autowired
    Formula22NotApplicable formula22NotApplicable;

    @Autowired
    Formula90Incorporated formula90Incorporated;

    @Autowired
    Formula90Applicable formula90Applicable;

    @Autowired
    Formula90NotApplicable formula90NotApplicable;

    @Autowired
    Formula92Incorporated formula92Incorporated;

    @Autowired
    Formula92Applicable formula92Applicable;

    @Autowired
    Formula92NotApplicable formula92NotApplicable;

    @Autowired
    Formula5Incorporated formula5Incorporated;

    @Autowired
    Formula5Applicable formula5Applicable;

    @Autowired
    Formula5NotApplicable formula5NotApplicable;

    @Autowired
    Formula82Incorporated formula82Incorporated;

    @Autowired
    Formula82Applicable formula82Applicable;

    @Autowired
    Formula82NotApplicable formula82NotApplicable;

    @Autowired
    Formula84Incorporated formula84Incorporated;

    @Autowired
    Formula84Applicable formula84Applicable;

    @Autowired
    Formula84NotApplicable formula84NotApplicable;

    @Autowired
    Formula86Incorporated formula86Incorporated;

    @Autowired
    Formula86Applicable formula86Applicable;

    @Autowired
    Formula86NotApplicable formula86NotApplicable;

    @Autowired
    Formula88Incorporated formula88Incorporated;

    @Autowired
    Formula88Applicable formula88Applicable;

    @Autowired
    Formula88NotApplicable formula88NotApplicable;

    @Autowired
    Formula94Incorporated formula94Incorporated;

    @Autowired
    Formula94Applicable formula94Applicable;

    @Autowired
    Formula94NotApplicable formula94NotApplicable;

    @Autowired
    Formula96Incorporated formula96Incorporated;

    @Autowired
    Formula96Applicable formula96Applicable;

    @Autowired
    Formula96NotApplicable formula96NotApplicable;

    @Autowired
    Formula98Incorporated formula98Incorporated;

    @Autowired
    Formula98Applicable formula98Applicable;

    @Autowired
    Formula98NotApplicable formula98NotApplicable;

    @Autowired
    Formula100Incorporated formula100Incorporated;

    @Autowired
    Formula100Applicable formula100Applicable;

    @Autowired
    Formula100NotApplicable formula100NotApplicable;
    
    @Autowired
    ChassisRepository chassisRepository;


    public ListGraphicItemsStatusDataDTO generateGraphicData(Long itemId) {

        ListGraphicItemsStatusDataDTO listDto = new ListGraphicItemsStatusDataDTO();

        List<ListIncorporated> incorporated = new ArrayList<>();

        List<ListNotApplicable> notApplicable = new ArrayList<>();

        List<ListApplicable> applicable = new ArrayList<>();

        List<Chassis> chassis = chassisRepository.findAll();


        Condition condition = conditionRepository.listAllByItemId(itemId);

        
        for (Chassis chassi : chassis) {

            List<ChassiServiceBulletin> serviceBulletins = chassiServiceBulletinRepository.findByChassiId(chassi);

            List<String> bulletinsNames = new ArrayList<>();

            for (ChassiServiceBulletin bulletin : serviceBulletins) {
                String bulletinName = bulletin.getServiceBulletinId().getServiceBulletinName();

                bulletinsNames.add(bulletinName);
            }

            // Formula chassis >
            if (condition.getFormulaIdLong() == 1) {
                if (chassi.getChassiId() > condition.getChassisBiggerThenIdLong()) {
                    ListIncorporated item = new ListIncorporated();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("INCORPORATED");
                    item.setChassis(chassi.getChassiId());
                    incorporated.add(item);
                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1
            else if (condition.getFormulaIdLong() == 2) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong()))) {
                    if (Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb1IdLong()), chassi.getChassiId()), "INCORPORATED")) {
                        ListIncorporated item = new ListIncorporated();
                        item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                        item.setStatus("INCORPORATED");
                        item.setChassis(chassi.getChassiId());
                        incorporated.add(item);
                    }

                    else if (Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb1IdLong()), chassi.getChassiId()), "APPLICABLE")) {
                        ListApplicable item = new ListApplicable();
                        item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                        item.setStatus("APPLICABLE");
                        item.setChassis(chassi.getChassiId());
                        applicable.add(item);
                    }

                    else if (Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb1IdLong()), chassi.getChassiId()), "NOT APPLICABLE")) {
                        ListNotApplicable item = new ListNotApplicable();
                        item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                        item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                        notApplicable.add(item);
                    }
                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula (sb1 OR sb2) AND sb3
            else if (condition.getFormulaIdLong() == 3) {
                if ((bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong()))) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong()))) {

                    ListIncorporated inc = formula3Incorporated.formula3ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula3Applicable.formula3ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula3NotApplicable.formula3ListApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }
            }

            // Formula sb1 and sb2
            else if (condition.getFormulaIdLong() == 4) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong()))) {

                    ListIncorporated inc = formula4Incorporated.formula4ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula4Applicable.formula4ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula4NotApplicable.formula4ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 and sb2 and sb3
            else if (condition.getFormulaIdLong() == 7) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong()))) {

                    ListIncorporated inc = formula7Incorporated.formula7ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula7Applicable.formula7ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula7NotApplicable.formula7ListNotAppliacable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 and sb2 and sb3 and sb4
            else if (condition.getFormulaIdLong() == 22) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong()))) {

                    ListIncorporated inc = formula22Incorporated.formula22ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula22Applicable.formula22ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula22NotApplicable.formula22ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 and sb2 and sb3 and sb4 and sb5
            else if (condition.getFormulaIdLong() == 90) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb5IdLong()))) {

                    ListIncorporated inc = formula90Incorporated.formula90ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula90Applicable.formula90ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula90NotApplicable.formula90ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 and sb2 and sb3 and sb4 and sb5 and sb6
            else if (condition.getFormulaIdLong() == 92) {
                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb5IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb6IdLong()))) {

                    ListIncorporated inc = formula92Incorporated.formula92ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula92Applicable.formula92ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula92NotApplicable.formula92ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 OR sb2
            else if (condition.getFormulaIdLong() == 5) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong()))) {

                    ListIncorporated inc = formula5Incorporated.formula5ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula5Applicable.formula5ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula5NotApplicable.formula5ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 OR sb2 OR sb3
            else if (condition.getFormulaIdLong() == 82) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong()))) {

                    ListIncorporated inc = formula82Incorporated.formula82ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula82Applicable.formula82ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula82NotApplicable.formula82ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4
            else if (condition.getFormulaIdLong() == 84) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong()))) {

                    ListIncorporated inc = formula84Incorporated.formula84ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula84Applicable.formula84ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula84NotApplicable.formula84ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4 OR sb5
            else if (condition.getFormulaIdLong() == 86) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb5IdLong()))) {

                    ListIncorporated inc = formula86Incorporated.formula86ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula86Applicable.formula86ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula86NotApplicable.formula86ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6
            else if (condition.getFormulaIdLong() == 88) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb4IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb5IdLong())) ||
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb6IdLong()))) {

                    ListIncorporated inc = formula88Incorporated.formula88ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula88Applicable.formula88ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula88NotApplicable.formula88ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula (sb1 OR sb2 OR sb3) AND (sb7 AND sb8)
            else if (condition.getFormulaIdLong() == 94) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb7IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb8IdLong()))) {

                    ListIncorporated inc = formula94Incorporated.formula94ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula94Applicable.formula94ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula94NotApplicable.formula94ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula (sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9)
            else if (condition.getFormulaIdLong() == 96) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb7IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb8IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb9IdLong()))) {

                    ListIncorporated inc = formula96Incorporated.formula96ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula96Applicable.formula96ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula96NotApplicable.formula96ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula (sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)
            else if (condition.getFormulaIdLong() == 98) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb7IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb13IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb14IdLong()))) {

                    ListIncorporated inc = formula98Incorporated.formula98ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula98Applicable.formula98ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula98NotApplicable.formula98ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            }

            // Formula (sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)
            else if (condition.getFormulaIdLong() == 100) {

                if (bulletinsNames.contains(serviceBulletinRepository
                        .findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb2IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb7IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb13IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb14IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb3IdLong())) &&
                        bulletinsNames.contains(serviceBulletinRepository
                                .findSbNameByServiceBulletinId(condition.getSb15IdLong()))) {

                    ListIncorporated inc = formula100Incorporated.formula100ListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = formula100Applicable.formula100ListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = formula100NotApplicable.formula100ListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }

                } else {
                    ListNotApplicable item = new ListNotApplicable();
                    item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                    item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                    notApplicable.add(item);
                }

            } else {

                if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null && condition.getSb19Id() != null &&
                        condition.getSb25Id() != null) {

                    ListIncorporated inc = fiveConditionsIncorporated.FiveConditionsListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = fiveConditionsApplicable.fiveConditionsListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = fiveConditionsNotApplicable.fiveConditionsListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }
                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null && condition.getSb19Id() != null) {

                    ListIncorporated inc = fourConditionsIncorporated.fourConditionsListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = fourConditionsApplicable.fourConditionsListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = fourConditionsNotApplicable.fourConditionsListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }
                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null) {

                    ListIncorporated inc = threeConditionsIncorporated.threeConditionsListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = threeConditionsApplicable.threeConditionsListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = threeConditionsNotApplicable.threeConditionsListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }
                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null) {

                    ListIncorporated inc = twoConditionsIncorporated.twoConditionsListIncorporated(condition, chassi.getChassiId());

                    incorporated.add(inc);

                    if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
                        ListApplicable app = twoConditionsApplicable.twoConditionsListApplicable(condition, chassi.getChassiId());
                        applicable.add(app);

                        if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
                            ListNotApplicable notApp = twoConditionsNotApplicable.twoConditionsListNotApplicable(condition, chassi.getChassiId());
                            notApplicable.add(notApp);

                            if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
                                ListNotApplicable item = new ListNotApplicable();
                                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                                item.setStatus("NOT APPLICABLE"); item.setChassis(chassi.getChassiId());
                                notApplicable.add(item);
                            }
                        }
                    }
                }

            }
            
        }

        incorporated.removeIf(inc -> Objects.equals(inc.getName_item(), "FAKE ITEM"));
        applicable.removeIf(app -> Objects.equals(app.getName_item(), "FAKE ITEM"));
        notApplicable.removeIf(notApp -> Objects.equals(notApp.getName_item(), "FAKE ITEM"));

        Integer dataIncorporated = incorporated.size();
        Integer dataApplicable = applicable.size();
        Integer dataNotApplicable = notApplicable.size();


        listDto.setData_incorporated(dataIncorporated);
        listDto.setData_applicable(dataApplicable);
        listDto.setData_not_applicable(dataNotApplicable);
        listDto.setIncorporated(incorporated);
        listDto.setApplicable(applicable);
        listDto.setNot_applicable(notApplicable);


        return listDto;
        
    }

}
