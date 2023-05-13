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
import java.util.Objects;

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
    @GetMapping("/report-planes/{chassiId}/{inc}/{app}/{notApp}")
    public ResponseEntity<InputStreamResource> planesReport(HttpServletResponse response,
                                                            @PathVariable("chassiId") Long chassiId,
                                                            @PathVariable("inc") boolean inc,
                                                            @PathVariable("app") boolean app,
                                                            @PathVariable("notApp") boolean notApp) throws IOException {

        List<ListServiceBulletinsResponse> sbs = listServiceBulletinsService.execute(chassiId);

        if (!inc && app && notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "INCORPORATED"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && app && !notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && !app && notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "INCORPORATED") || Objects.equals(sb.getStatus(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && app && !notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "INCORPORATED") || Objects.equals(sb.getStatus(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && !notApp) {

            sbs.removeIf(sb -> Objects.equals(sb.getStatus(), "APPLICABLE") || Objects.equals(sb.getStatus(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfPlanes.exportReportPlanes(sbs, chassiId, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-sbs-admin/{sb}/{part}/{inc}/{app}/{notApp}")
    public ResponseEntity<InputStreamResource> sbsReportAdmin(HttpServletResponse response,
                                                            @PathVariable("sb") String sb,
                                                            @PathVariable("part") String part,
                                                              @PathVariable("inc") boolean inc,
                                                              @PathVariable("app") boolean app,
                                                              @PathVariable("notApp") boolean notApp) throws IOException {

        List<ListChassiBySbDto> chassis = listChassisBySbService.executeAdmin(sb, part);

        if (!inc && app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && !app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED") || Objects.equals(chassi.getSb_status(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED") || Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "APPLICABLE") || Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-sbs-editor/{sb}/{part}/{inc}/{app}/{notApp}")
    public ResponseEntity<InputStreamResource> sbsReportEditor(HttpServletResponse response,
                                                              @PathVariable("sb") String sb,
                                                              @PathVariable("part") String part,
                                                               @PathVariable("inc") boolean inc,
                                                               @PathVariable("app") boolean app,
                                                               @PathVariable("notApp") boolean notApp) throws IOException {

        List<ListChassiBySbDto> chassis = listChassisBySbService.executeEditor(sb, part);

        if (!inc && app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && !app && notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED") || Objects.equals(chassi.getSb_status(), "APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (!inc && app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "INCORPORATED") || Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (inc && !app && !notApp) {

            chassis.removeIf(chassi -> Objects.equals(chassi.getSb_status(), "APPLICABLE") || Objects.equals(chassi.getSb_status(), "NOT APPLICABLE"));

            ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfSbs.exportReportSbs(chassis, sb, part, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report " + sb + " " + part + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-owners/{active}/{inactive}")
    public ResponseEntity<InputStreamResource> ownersReport(HttpServletResponse response,
                                                            @PathVariable("active") boolean active,
                                                            @PathVariable("inactive") boolean inactive) throws IOException {

        List<ChassisUserOwnerDTO> owners = chassisUserOwnerService.listAllChassisOwners();

        if (!active && inactive) {

            owners.removeIf(owner -> Objects.equals(owner.getStatus(), "A"));

            ByteArrayInputStream bis = PdfOwner.exportReportOwner(owners, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Owners.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (active && !inactive) {

            owners.removeIf(owner -> Objects.equals(owner.getStatus(), "I"));

            ByteArrayInputStream bis = PdfOwner.exportReportOwner(owners, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Owners.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfOwner.exportReportOwner(owners, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Owners.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-pilots/{active}/{inactive}")
    public ResponseEntity<InputStreamResource> pilotsReport(HttpServletResponse response,
                                                            @PathVariable("active") boolean active,
                                                            @PathVariable("inactive") boolean inactive) throws IOException {

        List<ChassisUserPilotDTO> pilots = chassisUserPilotService.listAllChassisPilots();

        if (!active && inactive) {

            pilots.removeIf(pilot -> Objects.equals(pilot.getStatus(), "A"));

            ByteArrayInputStream bis = PdfPilot.exportReportPilot(pilots, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Pilots.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (active && !inactive) {

            pilots.removeIf(pilot -> Objects.equals(pilot.getStatus(), "I"));

            ByteArrayInputStream bis = PdfPilot.exportReportPilot(pilots, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Pilots.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfPilot.exportReportPilot(pilots, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Pilots.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-condition/{active}/{inactive}")
    public ResponseEntity<InputStreamResource> conditionReport(HttpServletResponse response,
                                                               @PathVariable("active") boolean active,
                                                               @PathVariable("inactive") boolean inactive) throws IOException {

        List<ItemDTO> items = itemService.listAllItems();

        if (!active && inactive) {

            items.removeIf(item -> Objects.equals(item.getStatus(), "A"));

            ByteArrayInputStream bis = PdfCondition.exportReportCondition(items, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Items.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        if (active && !inactive) {

            items.removeIf(item -> Objects.equals(item.getStatus(), "I"));

            ByteArrayInputStream bis = PdfCondition.exportReportCondition(items, userSession.getUserAuthentication().getUsername());

            HttpHeaders headers = new HttpHeaders();

            headers.add("Content-Disposition", "attachment;filename=Report Items.pdf");

            return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                    .body(new InputStreamResource(bis));

        }

        ByteArrayInputStream bis = PdfCondition.exportReportCondition(items, userSession.getUserAuthentication().getUsername());

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Items.pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }

    @CrossOrigin
    @GetMapping("/report-items/{chassiId}/{inc}/{app}/{notApp}")
    public ResponseEntity<InputStreamResource> itemsReport(HttpServletResponse response,
                                                            @PathVariable("chassiId") Long chassiId,
                                                           @PathVariable("inc") boolean inc,
                                                           @PathVariable("app") boolean app,
                                                           @PathVariable("notApp") boolean notApp) throws IOException {

        ListItemsResponseDTO items = listItemsByChassiService.execute(chassiId);

        ByteArrayInputStream bis = PdfItems.exportReportItems(items, chassiId, userSession.getUserAuthentication().getUsername(), inc, app, notApp);

        HttpHeaders headers = new HttpHeaders();

        headers.add("Content-Disposition", "attachment;filename=Report Chassis " + chassiId + ".pdf");

        return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }



}
