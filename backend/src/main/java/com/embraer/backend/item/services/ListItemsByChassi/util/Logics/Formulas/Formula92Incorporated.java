package com.embraer.backend.item.services.ListItemsByChassi.util.Logics.Formulas;

import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class Formula92Incorporated {

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    ItemRepository itemRepository;


    @Cacheable("Formula92Incorporated")
    public ListIncorporated formula92ListIncorporated(Condition condition, Long id) {

        if (Objects.equals(chassiServiceBulletinRepository
                .findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
                Objects.equals(chassiServiceBulletinRepository
                        .findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
            ListIncorporated item = new ListIncorporated();
            item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
            item.setStatus("INCORPORATED");

            return item;
        }

        ListIncorporated item = new ListIncorporated();
        item.setName_item("FAKE ITEM");
        item.setStatus("INCORPORATED");

        return item;
    }

}
