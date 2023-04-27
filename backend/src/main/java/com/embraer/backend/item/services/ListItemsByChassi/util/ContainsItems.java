package com.embraer.backend.item.services.ListItemsByChassi.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.embraer.backend.chassis.entity.Chassis;
import com.embraer.backend.chassis.repositories.ChassisRepository;
import com.embraer.backend.chassisSb.entity.ChassiServiceBulletin;
import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.condition.repositories.conditionRepository;
import com.embraer.backend.item.repositories.ItemRepository;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListItemsResponseDTO;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;

import com.embraer.backend.item.services.ListItemsByChassi.util.Logics.*;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContainsItems {

	@Autowired
	ChassiServiceBulletinRepository chassiServiceBulletinRepository;

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	conditionRepository conditionRepository;

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


	public ListItemsResponseDTO items(Long id) {

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

		List<Condition> conditions = conditionRepository.listAllConditions();

		for (Condition condition : conditions) {

			// Formula chassis >
			if (condition.getFormulaIdLong() == 1) {
				if (id > condition.getChassisBiggerThenIdLong()) {
					ListIncorporated item = new ListIncorporated();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("APPLICABLE");
					incorporated.add(item);
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
					notApplicable.add(item);
				}

			}

			// Formula sb1
			else if (condition.getFormulaIdLong() == 2) {
				if (bulletinsNames.contains(serviceBulletinRepository
						.findSbNameByServiceBulletinId(condition.getSb1IdLong()))) {
					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if ((Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED")
							|| Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED"))
							&& Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if ((Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE")
							|| Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE"))
							&& Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if ((Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED")
							|| Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED"))
							&& Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if ((Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE")
							|| Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE"))
							&& Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if ((Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE")
							&& Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE"))
							|| Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
					notApplicable.add(item);
				}
			}

			// Formula sb1 and sb2
			else if (condition.getFormulaIdLong() == 4) {
				if (bulletinsNames.contains(serviceBulletinRepository
						.findSbNameByServiceBulletinId(condition.getSb1IdLong())) &&
						bulletinsNames.contains(serviceBulletinRepository
								.findSbNameByServiceBulletinId(condition.getSb2IdLong()))) {

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
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
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
					notApplicable.add(item);
				}

			}

			// Formula sb1 OR sb2
			else if (condition.getFormulaIdLong() == 5) {

				if (bulletinsNames.contains(serviceBulletinRepository
						.findSbNameByServiceBulletinId(condition.getSb1IdLong())) ||
						bulletinsNames.contains(serviceBulletinRepository
								.findSbNameByServiceBulletinId(condition.getSb2IdLong()))) {

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
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
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "INCORPORATED") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb4IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb5IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb6IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb8IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb9IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "ICORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
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

					if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListIncorporated item = new ListIncorporated();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("INCORPORATED");
						incorporated.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "ICORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "ICORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "ICORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "APPLICABLE")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "ICORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "INCORPORATED") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "APPLICABLE") &&
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "INCORPORATED")) {
						ListApplicable item = new ListApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("APPLICABLE");
						applicable.add(item);
					}

					else if (Objects.equals(chassiServiceBulletinRepository
							.findSbStatusBySbId((condition.getSb1IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb2IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb7IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb13IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb14IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb3IdLong()), id), "NOT APPLICABLE") ||
							Objects.equals(chassiServiceBulletinRepository
									.findSbStatusBySbId((condition.getSb15IdLong()), id), "NOT APPLICABLE")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				} else {
					ListNotApplicable item = new ListNotApplicable();
					item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
					item.setStatus("NOT APPLICABLE");
					notApplicable.add(item);
				}

			} else {

				if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
						condition.getSb13Id() != null && condition.getSb19Id() != null &&
						condition.getSb25Id() != null) {
					incorporated.add(fiveConditionsIncorporated.FiveConditionsListIncorporated(condition, id));
					applicable.add(fiveConditionsApplicable.fiveConditionsListApplicable(condition, id));
					notApplicable.add(fiveConditionsNotApplicable.fiveConditionsListNotApplicable(condition, id));

					ListIncorporated inc = fiveConditionsIncorporated.FiveConditionsListIncorporated(condition, id);
					ListApplicable app = fiveConditionsApplicable.fiveConditionsListApplicable(condition, id);
					ListNotApplicable notApp = fiveConditionsNotApplicable.fiveConditionsListNotApplicable(condition, id);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM") &&
							Objects.equals(app.getName_item(), "FAKE ITEM") &&
							Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
						condition.getSb13Id() != null && condition.getSb19Id() != null) {
					incorporated.add(fourConditionsIncorporated.fourConditionsListIncorporated(condition, id));
					applicable.add(fourConditionsApplicable.fourConditionsListApplicable(condition, id));
					notApplicable.add(fourConditionsNotApplicable.fourConditionsListNotApplicable(condition, id));

					ListIncorporated inc = fourConditionsIncorporated.fourConditionsListIncorporated(condition, id);
					ListApplicable app = fourConditionsApplicable.fourConditionsListApplicable(condition, id);
					ListNotApplicable notApp = fourConditionsNotApplicable.fourConditionsListNotApplicable(condition, id);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM") &&
							Objects.equals(app.getName_item(), "FAKE ITEM") &&
							Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
						condition.getSb13Id() != null) {
					incorporated.add(threeConditionsIncorporated.threeConditionsListIncorporated(condition, id));
					applicable.add(threeConditionsApplicable.threeConditionsListApplicable(condition, id));
					notApplicable.add(threeConditionsNotApplicable.threeConditionsListNotApplicable(condition, id));

					ListIncorporated inc = threeConditionsIncorporated.threeConditionsListIncorporated(condition, id);
					ListApplicable app = threeConditionsApplicable.threeConditionsListApplicable(condition, id);
					ListNotApplicable notApp = threeConditionsNotApplicable.threeConditionsListNotApplicable(condition, id);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM") &&
							Objects.equals(app.getName_item(), "FAKE ITEM") &&
							Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null) {
					incorporated.add(twoConditionsIncorporated.twoConditionsListIncorporated(condition, id));
					applicable.add(twoConditionsApplicable.twoConditionsListApplicable(condition, id));
					notApplicable.add(twoConditionsNotApplicable.twoConditionsListNotApplicable(condition, id));

					ListIncorporated inc = twoConditionsIncorporated.twoConditionsListIncorporated(condition, id);
					ListApplicable app = twoConditionsApplicable.twoConditionsListApplicable(condition, id);
					ListNotApplicable notApp = twoConditionsNotApplicable.twoConditionsListNotApplicable(condition, id);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM") &&
							Objects.equals(app.getName_item(), "FAKE ITEM") &&
							Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
						ListNotApplicable item = new ListNotApplicable();
						item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
						item.setStatus("NOT APPLICABLE");
						notApplicable.add(item);
					}
				}

			}


		}

		applicable.removeIf(item -> itemRepository.checkIfItemIsActive(item.getName_item()) == null);
		notApplicable.removeIf(item -> itemRepository.checkIfItemIsActive(item.getName_item()) == null);
		incorporated.removeIf(item -> itemRepository.checkIfItemIsActive(item.getName_item()) == null);


		listItemsResponseDTOs.setIncorporated(incorporated);
		listItemsResponseDTOs.setNot_applicable(notApplicable);
		listItemsResponseDTOs.setApplicable(applicable);
		return listItemsResponseDTOs;
	}
}