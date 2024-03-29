package com.embraer.backend.item.services.ListItemsByChassi.util.Logics;

import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class FourConditionsNotApplicable {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;


    @Cacheable("FourConditionsNotApplicable")
    public ListNotApplicable fourConditionsListNotApplicable(Condition condition, Long id) {
        if (condition.getSb1IdLong() != null && condition.getSb7IdLong() != null &&
                condition.getSb13IdLong() != null && condition.getSb19IdLong() != null) {

            if (Objects.equals(chassiServiceBulletinRepository
                    .findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb13IdLong()), id), "NOT APPLICABLE") ||
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb19IdLong()), id), "NOT APPLICABLE")) {
                ListNotApplicable item = new ListNotApplicable();
                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                item.setStatus("NOT APPLICABLE"); item.setChassis(id);

                return item;

            }

        }

        ListNotApplicable item = new ListNotApplicable();
        item.setName_item("FAKE ITEM");
        item.setStatus("NOT APPLICABLE"); item.setChassis(id);

        return item;
    }

}
