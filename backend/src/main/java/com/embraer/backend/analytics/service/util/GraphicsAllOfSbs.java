package com.embraer.backend.analytics.service.util;

import com.embraer.backend.analytics.dto.ListGraphicSbsStatusDTO;
import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.ListServiceBulletinsImpl;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Service
public class GraphicsAllOfSbs {

    @Autowired
    ListServiceBulletinsImpl listServiceBulletins;

    @Autowired
    ChassisRepository chassisRepository;



    public ListGraphicSbsStatusDTO getDataToGraphicMacroSbs() {

        List<Chassis> chassis = chassisRepository.findAll();

        ListGraphicSbsStatusDTO dto = new ListGraphicSbsStatusDTO();

        dto.setData_incorporated(0);
        dto.setData_applicable(0);
        dto.setData_not_applicable(0);


        for (Chassis chassi : chassis) {

            List<ListServiceBulletinsResponse> listAll = listServiceBulletins.execute(chassi.getChassiId());

            List<ListServiceBulletinsResponse> listIncorporated = new ArrayList<>();

            List<ListServiceBulletinsResponse> listApplicable = new ArrayList<>();

            List<ListServiceBulletinsResponse> listNotApplicable = new ArrayList<>();

            for (ListServiceBulletinsResponse l : listAll) {

                if (Objects.equals(l.getStatus(), "INCORPORATED")) {

                    listIncorporated.add(l);

                } else if (Objects.equals(l.getStatus(), "APPLICABLE")) {

                    listApplicable.add(l);

                } else if (Objects.equals(l.getStatus(), "NOT APPLICABLE")) {

                    listNotApplicable.add(l);

                }

            }

            dto.setData_incorporated(dto.getData_incorporated() + listIncorporated.size());
            dto.setData_applicable(dto.getData_applicable() + listApplicable.size());
            dto.setData_not_applicable(dto.getData_not_applicable() + listNotApplicable.size());

        }


        return dto;

    }



}
