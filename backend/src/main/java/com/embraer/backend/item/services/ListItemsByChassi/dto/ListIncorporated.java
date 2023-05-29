package com.embraer.backend.item.services.ListItemsByChassi.dto;

import lombok.Data;

@Data
public class ListIncorporated {

	private String name_item;
	
	private String status;

	private Long chassis;
}
