package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListBulletinApplicable;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListBulletinIncorporated;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListBulletinNotApplicable;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

@Service
public class ListServiceBulletinsService implements ListServiceBulletinsImpl {

	@Autowired
	ServiceBulletinRepository serviceBulletinRepository;

	public ListServiceBulletinsResponse execute(Long chassiId) {
		
		Chassis chassis = new Chassis();
		chassis.setChassiId(chassiId);

		List<ServiceBulletin> serviceBulletins = serviceBulletinRepository.findByChassiId(chassis);
		
		if(serviceBulletins == null) {
			throw new Error("BulletinsNotExist");
		}

		ListServiceBulletinsResponse bulletinsResponse = new ListServiceBulletinsResponse();

		ArrayList<ListBulletinIncorporated> listBulletinIncorporated = new ArrayList<>();

		ArrayList<ListBulletinNotApplicable> bulletinNotApplicables = new ArrayList<>();

		ArrayList<ListBulletinApplicable> bulletinApplicables = new ArrayList<>();

		for (ServiceBulletin serviceBulletin : serviceBulletins) {

			if (serviceBulletin.getServiceBulletinStatus().equals("INCORPORATED")) {

				ListBulletinIncorporated bulletinIncorporated = new ListBulletinIncorporated();

				bulletinIncorporated.setChassi_id(serviceBulletin.getChassiId());
				bulletinIncorporated.setService_bulleti_name(serviceBulletin.getServiceBulletinName());
				bulletinIncorporated.setService_bulletin_id(serviceBulletin.getServiceBulletinId());
				bulletinIncorporated.setService_bulletin_part(serviceBulletin.getServiceBulletinPart());
				bulletinIncorporated.setService_bulletin_register(serviceBulletin.getServiceBulletinDtRegister());
				bulletinIncorporated.setStatus_incorporated(serviceBulletin.getServiceBulletinStatus());
				listBulletinIncorporated.add(bulletinIncorporated);

			}

			else if (serviceBulletin.getServiceBulletinStatus().equals("NOT_APPLICABLE")) {

				ListBulletinNotApplicable bulletinNotApplicable = new ListBulletinNotApplicable();

				bulletinNotApplicable.setChassi_id(serviceBulletin.getChassiId());
				bulletinNotApplicable.setService_bulleti_name(serviceBulletin.getServiceBulletinName());
				bulletinNotApplicable.setService_bulletin_id(serviceBulletin.getServiceBulletinId());
				bulletinNotApplicable.setService_bulletin_part(serviceBulletin.getServiceBulletinPart());
				bulletinNotApplicable.setService_bulletin_register(serviceBulletin.getServiceBulletinDtRegister());
				bulletinNotApplicable.setStatus_not_applicable(serviceBulletin.getServiceBulletinStatus());
				bulletinNotApplicables.add(bulletinNotApplicable);

			}

			else if (serviceBulletin.getServiceBulletinStatus().equals("APPLICABLE")) {
				
				ListBulletinApplicable bulletinApplicable = new ListBulletinApplicable();
				
				bulletinApplicable.setChassi_id(serviceBulletin.getChassiId());
				bulletinApplicable.setService_bulleti_name(serviceBulletin.getServiceBulletinName());
				bulletinApplicable.setService_bulletin_id(serviceBulletin.getServiceBulletinId());
				bulletinApplicable.setService_bulletin_part(serviceBulletin.getServiceBulletinPart());
				bulletinApplicable.setService_bulletin_register(serviceBulletin.getServiceBulletinDtRegister());
				bulletinApplicable.setStatus_applicable(serviceBulletin.getServiceBulletinStatus());
				bulletinApplicables.add(bulletinApplicable);

			}

		}
		bulletinsResponse.setBulletin_applicables(bulletinApplicables);
		bulletinsResponse.setBulletin_incorporated(listBulletinIncorporated);
		bulletinsResponse.setBulletin_not_applicables(bulletinNotApplicables);

		return bulletinsResponse;
	}

}
