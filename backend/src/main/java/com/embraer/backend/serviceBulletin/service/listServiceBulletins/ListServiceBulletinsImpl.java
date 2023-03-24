package com.embraer.backend.serviceBulletin.service.listServiceBulletins;

import java.util.ArrayList;

import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;

public interface ListServiceBulletinsImpl {
	
	public ListServiceBulletinsResponse execute(String chassiId);

}
