package com.embraer.backend.item.services.ListItemsByChassi.dto;

import java.util.List;

import lombok.Data;

@Data
public class ListItemsResponseDTO {
	
	List<ListIncorporated> incorporated;
	
	List<ListNotApplicable> not_applicable;
	
}
