package com.embraer.backend.item.services.ListItemsByChassi.util;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListItemsResponseDTO;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContainsItems {

	@Autowired
	ChassiServiceBulletinRepository chassiServiceBulletinRepository;

	public ListItemsResponseDTO items(Integer id) {

		Chassis chassis = new Chassis();
		Long chassi = Long.valueOf(id);
		chassis.setChassiId(chassi);

		ListItemsResponseDTO listItemsResponseDTOs = new ListItemsResponseDTO();

		List<ListIncorporated> incorporated = new ArrayList<>();

		List<ListNotApplicable> notApplicable = new ArrayList<>();

		List<ListApplicable> applicable = new ArrayList<>();

		List<String> bulletinsNames = new ArrayList<>();

		List<ChassiServiceBulletin> serviceBulletins = chassiServiceBulletinRepository.findByChassiId(chassis);

		if (serviceBulletins.isEmpty()) {
			throw new Error("ChassiNotExist");
		}

		for (ChassiServiceBulletin bulletin : serviceBulletins) {
			String bulletinName = bulletin.getServiceBulletinId().getServiceBulletinName();

			bulletinsNames.add(bulletinName);
		}

		// VIDROS E TRAVAS
		if (bulletinsNames.contains("SB FAT-21-CG12")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Vidros e travas elétricas");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Vidros e travas elétricas");
			item.setStatus("APPLICABLE");
			applicable.add(item);

		}

		// AR CONDICIONADO
		if (id > 10000123) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Ar condicionado");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Ar condicionado");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// DIREÇÃO
		if (id > 10000450) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Direção hidráulica");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Direção hidráulica");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// Airbags frontais
		if (id >= 10000196) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Airbags frontais");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Airbags frontais");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);
		}

		// Airbags LATERAIS
		if (id > 10000621) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Airbags laterais");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Airbags laterais");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// Sistema modernizado de som
		if (bulletinsNames.contains("SB FAT-23-CG01")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Sistema modernizado de som");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Sistema modernizado de som");
			item.setStatus("APPLICABLE");
			applicable.add(item);

		}

		// Cruise Control
		if ((bulletinsNames.contains("SB FAT-23-CG04") || bulletinsNames.contains("SB FAT-23-CG05"))
				&& bulletinsNames.contains("SB FAT-31-CG05")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Cruise Control");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Cruise Control");
			item.setStatus("APPLICABLE");
			applicable.add(item);

		}

		// Sensor de proximidade
		if (bulletinsNames.contains("SB FAT-23-CG06") && bulletinsNames.contains("SB FAT-31-CG08")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Sensor de proximidade");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Sensor de proximidade");
			item.setStatus("APPLICABLE");
			applicable.add(item);

		}

		// Calha de chuva
		if (bulletinsNames.contains("SB FAT-23-CG08")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Calha de chuva");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Calha de chuva");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Controle de tração
		if (bulletinsNames.contains("SB FAT-23-CG02")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Controle de tração");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Controle de tração");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Pintura anti-corrosão
		if (bulletinsNames.contains("SB FAT-23-CG03")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Pintura anti-corrosão");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Pintura anti-corrosão");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// GPS
		if (id > 10000012) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("GPS");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("GPS");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// Função Economic/Sport
		if (bulletinsNames.contains("SB FAT-25-CG23")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Função Economic/Sport");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Função Economic/Sport");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Sistema multimídia
		if (id > 10000035) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Sistema multimídia");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Sistema multimídia");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// Bluetooth
		if (bulletinsNames.contains("SB FAT-25-CG30")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Bluetooth");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Bluetooth");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Câmera traseira
		if (bulletinsNames.contains("SB FAT-25-CG04") || bulletinsNames.contains("SB FAT-25-CG11")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Câmera traseira");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Câmera traseira");
			item.setStatus("APPLICABLE");
			applicable.add(item);

		}

		// Estepe
		if (id > 10000078) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Estepe");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Estepe");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);

		}

		// Freio ABS
		if (bulletinsNames.contains("SB FAT-25-CG31")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Freio ABS");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Freio ABS");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Vidros com fechamento em um toque
		if (bulletinsNames.contains("SB FAT-27-CG11")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Vidros com fechamento em um toque");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Vidros com fechamento em um toque");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Partida remota
		if (bulletinsNames.contains("SB FAT-27-CG18")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Partida remota");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Partida remota");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Aquecimento nos bancos
		if (bulletinsNames.contains("SB FAT-30-CG04")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Aquecimento nos bancos");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Aquecimento nos bancos");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Controle de estabilidade
		if (bulletinsNames.contains("SB FAT-31-CG03")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Controle de estabilidade");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Controle de estabilidade");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Roda de liga leve
		if (bulletinsNames.contains("SB FAT-31-CG19")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Roda de liga leve");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Roda de liga leve");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Câmbio automático
		if (bulletinsNames.contains("SB FAT-31-CG02")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Câmbio automático");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Câmbio automático");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		// Banco de couro
		if (id > 100000017) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Banco de couro");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListNotApplicable item = new ListNotApplicable();
			item.setName_item("Banco de couro");
			item.setStatus("NOT APPLICABLE");
			notApplicable.add(item);
		}

		// Farol de neblina
		if (bulletinsNames.contains("SB FAT-34-CG23")) {
			ListIncorporated item = new ListIncorporated();
			item.setName_item("Farol de neblina");
			item.setStatus("INCORPORATED");
			incorporated.add(item);
		} else {
			ListApplicable item = new ListApplicable();
			item.setName_item("Farol de neblina");
			item.setStatus("APPLICABLE");
			applicable.add(item);
		}

		listItemsResponseDTOs.setIncorporated(incorporated);
		listItemsResponseDTOs.setNot_applicable(notApplicable);
		listItemsResponseDTOs.setApplicable(applicable);
		return listItemsResponseDTOs;
	}
}