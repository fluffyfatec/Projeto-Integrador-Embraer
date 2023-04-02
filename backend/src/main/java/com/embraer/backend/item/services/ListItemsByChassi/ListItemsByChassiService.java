package com.embraer.backend.item.services.ListItemsByChassi;

import com.embraer.backend.item.services.ListItemsByChassi.dto.ListItemsResponseDTO;
import com.embraer.backend.item.services.ListItemsByChassi.util.ContainsItems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListItemsByChassiService {

	@Autowired
	ContainsItems containsItems;

	public ListItemsResponseDTO execute(Integer chassiId) {
		ListItemsResponseDTO items = containsItems.items(chassiId);

		return items;
	}

}
