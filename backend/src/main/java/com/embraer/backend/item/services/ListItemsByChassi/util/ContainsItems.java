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
import com.embraer.backend.item.services.ListItemsByChassi.util.Logics.Formulas.*;
import com.embraer.backend.serviceBulletin.repositories.ServiceBulletinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.cache.annotation.Cacheable;
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


	public ListItemsResponseDTO items(Long id) {

		Chassis chassis = new Chassis();
		chassis.setChassiId(id);

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
					item.setStatus("INCORPORATED");
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

					ListIncorporated inc = formula3Incorporated.formula3ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula3Applicable.formula3ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula3NotApplicable.formula3ListApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula4Incorporated.formula4ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula4Applicable.formula4ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula4NotApplicable.formula4ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula7Incorporated.formula7ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula7Applicable.formula7ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula7NotApplicable.formula7ListNotAppliacable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula22Incorporated.formula22ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula22Applicable.formula22ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula22NotApplicable.formula22ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula90Incorporated.formula90ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula90Applicable.formula90ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula90NotApplicable.formula90ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula92Incorporated.formula92ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula92Applicable.formula92ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula92NotApplicable.formula92ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula5Incorporated.formula5ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula5Applicable.formula5ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula5NotApplicable.formula5ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula82Incorporated.formula82ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula82Applicable.formula82ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula82NotApplicable.formula82ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula84Incorporated.formula84ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula84Applicable.formula84ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula84NotApplicable.formula84ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula86Incorporated.formula86ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula86Applicable.formula86ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula86NotApplicable.formula86ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula88Incorporated.formula88ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula88Applicable.formula88ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula88NotApplicable.formula88ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula94Incorporated.formula94ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula94Applicable.formula94ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula94NotApplicable.formula94ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula96Incorporated.formula96ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula96Applicable.formula96ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula96NotApplicable.formula96ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula98Incorporated.formula98ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula98Applicable.formula98ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula98NotApplicable.formula98ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = formula100Incorporated.formula100ListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = formula100Applicable.formula100ListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = formula100NotApplicable.formula100ListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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

					ListIncorporated inc = fiveConditionsIncorporated.FiveConditionsListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = fiveConditionsApplicable.fiveConditionsListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = fiveConditionsNotApplicable.fiveConditionsListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
						condition.getSb13Id() != null && condition.getSb19Id() != null) {

					ListIncorporated inc = fourConditionsIncorporated.fourConditionsListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = fourConditionsApplicable.fourConditionsListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = fourConditionsNotApplicable.fourConditionsListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
						condition.getSb13Id() != null) {

					ListIncorporated inc = threeConditionsIncorporated.threeConditionsListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = threeConditionsApplicable.threeConditionsListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = threeConditionsNotApplicable.threeConditionsListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
					}
				}

				else if (condition.getSb1Id() != null && condition.getSb7Id() != null) {

					ListIncorporated inc = twoConditionsIncorporated.twoConditionsListIncorporated(condition, id);

					incorporated.add(inc);

					if (Objects.equals(inc.getName_item(), "FAKE ITEM")) {
						ListApplicable app = twoConditionsApplicable.twoConditionsListApplicable(condition, id);
						applicable.add(app);

						if (Objects.equals(app.getName_item(), "FAKE ITEM")) {
							ListNotApplicable notApp = twoConditionsNotApplicable.twoConditionsListNotApplicable(condition, id);
							notApplicable.add(notApp);

							if (Objects.equals(notApp.getName_item(), "FAKE ITEM")) {
								ListNotApplicable item = new ListNotApplicable();
								item.setName_item(itemRepository.findItemNameByItemId(condition.getItemIdLong()));
								item.setStatus("NOT APPLICABLE");
								notApplicable.add(item);
							}
						}
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