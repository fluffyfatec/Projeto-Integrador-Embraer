package com.embraer.backend.item.services.ListItemsByChassi.util.Logics.Formulas;

import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class Formula94NotApplicable {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;


    @Cacheable("Formula94NotApplicable")
    public ListNotApplicable formula94ListNotApplicable(Condition condition, Long id) {

        if (Objects.equals(chassiServiceBulletinRepository
                .findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb8IdLong()), id), "NOT APPLICABLE")) {
            ListNotApplicable item = new ListNotApplicable();
            item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
            item.setStatus("NOT APPLICABLE");

            return item;
        }

        ListNotApplicable item = new ListNotApplicable();
        item.setName_item("FAKE ITEM");
        item.setStatus("NOT APPLICABLE");

        return item;
    }

}
