package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.ArrayList;
import java.util.List;

import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

public interface ListServiceBulletinsImpl {
	
	public List<ListServiceBulletinsResponse> execute(Long chassiId);

}
