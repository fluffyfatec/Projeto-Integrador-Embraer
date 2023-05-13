package com.embraer.backend.report.controller;

import com.embraer.backend.chassi.services.ListChassisBySb.ListChassisBySbService;
import com.embraer.backend.chassi.services.ListChassisBySb.dto.ListChassiBySbDto;
import com.embraer.backend.chassisUserOwner.dto.ChassisUserOwnerDTO;
import com.embraer.backend.chassisUserOwner.service.ChassisUserOwnerService;
import com.embraer.backend.chassisUserPilot.dto.ChassisUserPilotDTO;
import com.embraer.backend.chassisUserPilot.service.ChassisUserPilotService;
import com.embraer.backend.item.dto.ItemDTO;
import com.embraer.backend.item.service.ItemService;
import com.embraer.backend.item.services.ListItemsByChassi.ListItemsByChassiService;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListItemsResponseDTO;
import com.embraer.backend.report.models.*;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.ListServiceBulletinsService;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.io.ByteArrayInputStream;

@RestController
@RequestMapping
public class ReportController {

    @Autowired
    UserSession userSession;

    @Autowired
    ListServiceBulletinsService listServiceBulletinsService;

    @Autowired
    ListChassisBySbService listChassisBySbService;

    @Autowired
    ChassisUserOwnerService chassisUserOwnerService;

    @Autowired
    ChassisUserPilotService chassisUserPilotService;

    @Autowired
    ItemService itemService;

    @Autowired
    ListItemsByChassiService listItemsByChassiService;


    @CrossOrigin
    @GetMapping("/report-planes/{chassiId}")
    public ResponseEntity<InputStreamResource> planesReport(HttpServletResponse response,
                                                            @PathVariable("chassiId") Long chassiId) throws IOException {

        List<ListServiceBulletinsResponse> sbs = listServiceBulletinsService.execute(chassiId);

        ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-sbs-admin/{sb}/{part}")
    public ResponseEntity<InputStreamResource> sbsReportAdmin(HttpServletResponse response,
                                                            @PathVariable("sb") String sb,
                                                            @PathVariable("part") String part) throws IOException {

        List<ListChassiBySbDto> chassis = listChassisBySbService.executeAdmin(sb, part);

        ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-sbs-editor/{sb}/{part}")
    public ResponseEntity<InputStreamResource> sbsReportEditor(HttpServletResponse response,
                                                              @PathVariable("sb") String sb,
                                                              @PathVariable("part") String part) throws IOException {

        List<ListChassiBySbDto> chassis = listChassisBySbService.executeEditor(sb, part);

        ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-owners")
    public ResponseEntity<InputStreamResource> ownersReport(HttpServletResponse response) throws IOException {

        List<ChassisUserOwnerDTO> owners = chassisUserOwnerService.listAllChassisOwners();

        ByteArrayInputStream bis = PdfOwner.exportReportOwner(owners, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Owners.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-pilots")
    public ResponseEntity<InputStreamResource> pilotsReport(HttpServletResponse response) throws IOException {

        List<ChassisUserPilotDTO> pilots = chassisUserPilotService.listAllChassisPilots();

        ByteArrayInputStream bis = PdfPilot.exportReportPilot(pilots, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Pilots.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-condition")
    public ResponseEntity<InputStreamResource> conditionReport(HttpServletResponse response) throws IOException {

        List<ItemDTO> items = itemService.listAllItems();

        ByteArrayInputStream bis = PdfCondition.exportReportCondition(items, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Items.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-items/{chassiId}")
    public ResponseEntity<InputStreamResource> itemsReport(HttpServletResponse response,
                                                            @PathVariable("chassiId") Long chassiId) throws IOException {

        ListItemsResponseDTO items = listItemsByChassiService.execute(chassiId);

        ByteArrayInputStream bis = PdfItems.exportReportItems(items, chassiId, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }



}
