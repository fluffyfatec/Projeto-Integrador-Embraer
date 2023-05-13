package com.embraer.backend.item.services.ListItemsByChassi.util.Logics.Formulas;

import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class Formula86Applicable {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;


    @Cacheable("Formula86Applicable")
    public ListApplicable formula86ListApplicable(Condition condition, Long id) {

        if (Objects.equals(chassiServiceBulletinRepository
                .findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") ||
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
            ListApplicable item = new ListApplicable();
            item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
            item.setStatus("APPLICABLE");

            return item;
        }

        ListApplicable item = new ListApplicable();
        item.setName_item("FAKE ITEM");
        item.setStatus("APPLICABLE");

        return item;
    }

}
