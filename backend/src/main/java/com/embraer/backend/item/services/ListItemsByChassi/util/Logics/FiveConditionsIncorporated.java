package com.embraer.backend.item.services.ListItemsByChassi.util.Logics;

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
public class FiveConditionsIncorporated {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;

    @Cacheable("FiveConditionsListIncorporated")
    public ListIncorporated FiveConditionsListIncorporated(Condition condition, Long id) {

        if (condition.getSb1IdLong() != null && condition.getSb7IdLong() != null &&
                condition.getSb13IdLong() != null && condition.getSb19IdLong() != null &&
                condition.getSb25IdLong() != null) {

            if (Objects.equals(chassiServiceBulletinRepository
                    .findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb19IdLong()), id), "INCORPORATED") &&
                    Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb25IdLong()), id), "INCORPORATED")) {
                ListIncorporated item = new ListIncorporated();
                item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
                item.setStatus("INCORPORATED"); item.setChassis(id);

                return item;
            }
        }

        ListIncorporated item = new ListIncorporated();
        item.setName_item("FAKE ITEM");
        item.setStatus("INCORPORATED"); item.setChassis(id);

        return item;
    }
}