package com.embraer.backend.serviceBulletin.service.registerServiceBulletin.util;

import com.embraer.backend.serviceBulletin.service.registerServiceBulletin.dto.VerifyDTO;

import org.springframework.stereotype.Service;

@Service
public class VerifyPart {
	
	public VerifyDTO verifyPart(String sb) {
		
		VerifyDTO verifyDTO = new VerifyDTO();
		if(sb.length() >= 23) {
		
			String a = sb.substring(16, 23).trim();
			String b = sb.substring(0, 14).trim();

			verifyDTO.setBulletin(b);
			verifyDTO.setPart(a);
		}
		else {
			
			verifyDTO.setBulletin(sb);
			verifyDTO.setPart("UNICO");
		}

				
		return verifyDTO;
	}


}
