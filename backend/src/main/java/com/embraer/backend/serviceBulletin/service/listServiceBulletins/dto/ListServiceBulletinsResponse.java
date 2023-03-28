package com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto;

import java.util.ArrayList;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class ListServiceBulletinsResponse {
	
	@NotNull
	private ArrayList<ListBulletinIncorporated> bulletin_incorporated;
	
	@NotNull
	private ArrayList<ListBulletinNotApplicable> bulletin_not_applicables;

	@NotNull
	private ArrayList<ListBulletinApplicable> bulletin_applicables;
	
}
