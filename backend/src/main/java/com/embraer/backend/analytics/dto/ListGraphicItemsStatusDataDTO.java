package com.embraer.backend.analytics.dto;

import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;
import lombok.Data;

import java.util.List;

@Data
public class ListGraphicItemsStatusDataDTO {

    Integer data_incorporated;

    Integer data_applicable;

    Integer data_not_applicable;

    List<ListIncorporated> incorporated;

    List<ListNotApplicable> not_applicable;

    List<ListApplicable> applicable;


}
