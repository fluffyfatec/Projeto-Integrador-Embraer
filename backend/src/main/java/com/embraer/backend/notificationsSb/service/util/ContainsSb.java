package com.embraer.backend.notificationsSb.service.util;


import com.embraer.backend.chassisSb.repository.ChassiServiceBulletinRepository;
import com.embraer.backend.chassisUserOwner.repositories.ChassisUserOwnerRepository;
import com.embraer.backend.condition.entity.Condition;
import com.embraer.backend.condition.repositories.conditionRepository;
import com.embraer.backend.notificationsSb.entity.NotificationsSb;
import com.embraer.backend.notificationsSb.repository.NotificationsSbRepository;
import com.embraer.backend.notificationsSb.service.util.Logics.*;
import com.embraer.backend.notificationsSb.service.util.Logics.Formulas.*;
import com.embraer.backend.user.repositories.UserRepository;
import com.embraer.backend.userAuthenticated.dto.UserAuthenticationDto;
import com.embraer.backend.webConfig.UserSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Service
public class ContainsSb {

    @Autowired
    NotificationsSbRepository notificationsSbRepository;

    @Autowired
    ChassiServiceBulletinRepository chassiServiceBulletinRepository;

    @Autowired
    conditionRepository conditionRepository;

    @Autowired
    UserSession userSession;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ChassisUserOwnerRepository chassisUserOwnerRepository;

    @Autowired
    FiveConditionsIncorporatedNotification fiveConditionsIncorporated;

    @Autowired
    FiveConditionsApplicableNotification fiveConditionsApplicable;

    @Autowired
    FourConditionsIncorporatedNotification fourConditionsIncorporated;

    @Autowired
    FourConditionsApplicableNotification fourConditionsApplicable;

    @Autowired
    ThreeConditionsIncorporatedNotification threeConditionsIncorporated;

    @Autowired
    ThreeConditionsApplicableNotification threeConditionsApplicable;

    @Autowired
    TwoConditionsIncorporatedNotification twoConditionsIncorporated;

    @Autowired
    TwoConditionsApplicableNotification twoConditionsApplicable;

    @Autowired
    Formula3IncorporatedNotification formula3Incorporated;

    @Autowired
    Formula3ApplicableNotification formula3Applicable;

    @Autowired
    Formula4IncorporatedNotification formula4Incorporated;

    @Autowired
    Formula4ApplicableNotification formula4Applicable;

    @Autowired
    Formula7IncorporatedNotification formula7Incorporated;

    @Autowired
    Formula7ApplicableNotification formula7Applicable;

    @Autowired
    Formula22IncorporatedNotification formula22Incorporated;

    @Autowired
    Formula22ApplicableNotification formula22Applicable;

    @Autowired
    Formula90IncorporatedNotification formula90Incorporated;

    @Autowired
    Formula90ApplicableNotification formula90Applicable;

    @Autowired
    Formula92IncorporatedNotification formula92Incorporated;

    @Autowired
    Formula92ApplicableNotification formula92Applicable;

    @Autowired
    Formula5IncorporatedNotification formula5Incorporated;

    @Autowired
    Formula5ApplicableNotification formula5Applicable;

    @Autowired
    Formula82IncorporatedNotification formula82Incorporated;

    @Autowired
    Formula82ApplicableNotification formula82Applicable;

    @Autowired
    Formula84IncorporatedNotification formula84Incorporated;

    @Autowired
    Formula84ApplicableNotification formula84Applicable;

    @Autowired
    Formula86IncorporatedNotification formula86Incorporated;

    @Autowired
    Formula86ApplicableNotification formula86Applicable;

    @Autowired
    Formula88IncorporatedNotification formula88Incorporated;

    @Autowired
    Formula88ApplicableNotification formula88Applicable;

    @Autowired
    Formula94IncorporatedNotification formula94Incorporated;

    @Autowired
    Formula94ApplicableNotification formula94Applicable;

    @Autowired
    Formula96IncorporatedNotification formula96Incorporated;

    @Autowired
    Formula96ApplicableNotification formula96Applicable;

    @Autowired
    Formula98IncorporatedNotification formula98Incorporated;

    @Autowired
    Formula98ApplicableNotification formula98Applicable;

    @Autowired
    Formula100IncorporatedNotification formula100Incorporated;

    @Autowired
    Formula100ApplicableNotification formula100Applicable;

    public void saveSbNotification(Long sbId, Long chassis, String operation) {

        UserAuthenticationDto userAuthenticationDto = userSession.getUserAuthentication();

        Long userId = userRepository.getUserIdByUserName(userAuthenticationDto.getUsername());

        List<Condition> conditions = conditionRepository.listAllConditions();

        for (Condition condition : conditions) {

            // Formula chassis >
            if (condition.getFormulaIdLong() == 1) {
                continue;
            }

            // Formula sb1
            else if (condition.getFormulaIdLong() == 2) {

                if (Objects.equals(sbId, condition.getSb1IdLong())) {

                    if (Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb1IdLong()), chassis), "INCORPORATED")) {

                        NotificationsSb newNotification = new NotificationsSb();
                        newNotification.setUserLong(userId);
                        newNotification.setSbLong(sbId);
                        newNotification.setChassisLong(chassis);
                        newNotification.setOperation(operation);
                        newNotification.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
                        newNotification.setDtregister(new Timestamp(System.currentTimeMillis()));
                        newNotification.setItemIdLong(condition.getItemIdLong());
                        newNotification.setBooleanAdmin(0);
                        newNotification.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
                        newNotification.setItemStatus("INCORPORATED");
                        notificationsSbRepository.saveAndFlush(newNotification);

                        NotificationsSb newNotificationAdmin = new NotificationsSb();
                        newNotificationAdmin.setUserLong(userId);
                        newNotificationAdmin.setSbLong(sbId);
                        newNotificationAdmin.setChassisLong(chassis);
                        newNotificationAdmin.setOperation(operation);
                        newNotificationAdmin.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
                        newNotificationAdmin.setDtregister(new Timestamp(System.currentTimeMillis()));
                        newNotificationAdmin.setItemIdLong(condition.getItemIdLong());
                        newNotificationAdmin.setBooleanAdmin(1);
                        newNotificationAdmin.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
                        newNotificationAdmin.setItemStatus("INCORPORATED");
                        notificationsSbRepository.saveAndFlush(newNotificationAdmin);

                    } else if (Objects.equals(chassiServiceBulletinRepository
                            .findSbStatusBySbId((condition.getSb1IdLong()), chassis), "APPLICABLE")) {

                        NotificationsSb newNotification = new NotificationsSb();
                        newNotification.setUserLong(userId);
                        newNotification.setSbLong(sbId);
                        newNotification.setChassisLong(chassis);
                        newNotification.setOperation(operation);
                        newNotification.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
                        newNotification.setDtregister(new Timestamp(System.currentTimeMillis()));
                        newNotification.setItemIdLong(condition.getItemIdLong());
                        newNotification.setBooleanAdmin(0);
                        newNotification.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
                        newNotification.setItemStatus("APPLICABLE");
                        notificationsSbRepository.saveAndFlush(newNotification);

                        NotificationsSb newNotificationAdmin = new NotificationsSb();
                        newNotificationAdmin.setUserLong(userId);
                        newNotificationAdmin.setSbLong(sbId);
                        newNotificationAdmin.setChassisLong(chassis);
                        newNotificationAdmin.setOperation(operation);
                        newNotificationAdmin.setStatusChange(chassiServiceBulletinRepository.findSbStatusBySbId(sbId, chassis));
                        newNotificationAdmin.setDtregister(new Timestamp(System.currentTimeMillis()));
                        newNotificationAdmin.setItemIdLong(condition.getItemIdLong());
                        newNotificationAdmin.setBooleanAdmin(1);
                        newNotificationAdmin.setOwner(chassisUserOwnerRepository.getChassisOwnerNameByChassisId(chassis));
                        newNotificationAdmin.setItemStatus("APPLICABLE");
                        notificationsSbRepository.saveAndFlush(newNotificationAdmin);

                    }

                }

            }

            // Formula (sb1 OR sb2) AND sb3
            else if (condition.getFormulaIdLong() == 3) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong())) {

                    boolean inc = formula3Incorporated.formula3ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula3Applicable.formula3ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 
            }

            // Formula sb1 and sb2
            else if (condition.getFormulaIdLong() == 4) {
                
                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong())) {

                    boolean inc = formula4Incorporated.formula4ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula4Applicable.formula4ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 and sb2 and sb3
            else if (condition.getFormulaIdLong() == 7) {
                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong())) {

                    boolean inc = formula7Incorporated.formula7ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula7Applicable.formula7ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 and sb2 and sb3 and sb4
            else if (condition.getFormulaIdLong() == 22) {
                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong())) {

                    boolean inc = formula22Incorporated.formula22ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula22Applicable.formula22ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 and sb2 and sb3 and sb4 and sb5
            else if (condition.getFormulaIdLong() == 90) {
                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong()) ||
                        Objects.equals(sbId, condition.getSb5IdLong())) {

                    boolean inc = formula90Incorporated.formula90ListIncorporated(condition, chassis, userId, sbId, operation);


                    if (!inc) {

                        boolean app = formula90Applicable.formula90ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 and sb2 and sb3 and sb4 and sb5 and sb6
            else if (condition.getFormulaIdLong() == 92) {
                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong()) ||
                        Objects.equals(sbId, condition.getSb5IdLong()) ||
                        Objects.equals(sbId, condition.getSb6IdLong())) {

                    boolean inc = formula92Incorporated.formula92ListIncorporated(condition, chassis, userId, sbId, operation);


                    if (!inc) {

                        boolean app = formula92Applicable.formula92ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 OR sb2
            else if (condition.getFormulaIdLong() == 5) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong())) {

                    boolean inc = formula5Incorporated.formula5ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula5Applicable.formula5ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 OR sb2 OR sb3
            else if (condition.getFormulaIdLong() == 82) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong())) {

                    boolean inc = formula82Incorporated.formula82ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula82Applicable.formula82ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4
            else if (condition.getFormulaIdLong() == 84) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong())) {

                    boolean inc = formula84Incorporated.formula84ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula84Applicable.formula84ListApplicable(condition, chassis, userId, sbId, operation);

                    }

                } 

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4 OR sb5
            else if (condition.getFormulaIdLong() == 86) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong()) ||
                        Objects.equals(sbId, condition.getSb5IdLong())) {

                    boolean inc = formula86Incorporated.formula86ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula86Applicable.formula86ListApplicable(condition, chassis, userId, sbId, operation);

                    }

                } 

            }

            // Formula sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6
            else if (condition.getFormulaIdLong() == 88) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong()) ||
                        Objects.equals(sbId, condition.getSb5IdLong()) ||
                        Objects.equals(sbId, condition.getSb6IdLong())) {

                    boolean inc = formula88Incorporated.formula88ListIncorporated(condition, chassis, userId, sbId, operation);
               
                    if (!inc) {

                        boolean app = formula88Applicable.formula88ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula (sb1 OR sb2 OR sb3) AND (sb7 AND sb8)
            else if (condition.getFormulaIdLong() == 94) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb7IdLong()) ||
                        Objects.equals(sbId, condition.getSb8IdLong())) {

                    boolean inc = formula94Incorporated.formula94ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula94Applicable.formula94ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula (sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9)
            else if (condition.getFormulaIdLong() == 96) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb4IdLong()) ||
                        Objects.equals(sbId, condition.getSb7IdLong()) ||
                        Objects.equals(sbId, condition.getSb8IdLong()) ||
                        Objects.equals(sbId, condition.getSb9IdLong())) {

                    boolean inc = formula96Incorporated.formula96ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula96Applicable.formula96ListApplicable(condition, chassis, userId, sbId, operation);

                    }

                } 

            }

            // Formula (sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)
            else if (condition.getFormulaIdLong() == 98) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb7IdLong()) ||
                        Objects.equals(sbId, condition.getSb8IdLong()) ||
                        Objects.equals(sbId, condition.getSb9IdLong()) ||
                        Objects.equals(sbId, condition.getSb10IdLong()) ||
                        Objects.equals(sbId, condition.getSb13IdLong()) ||
                        Objects.equals(sbId, condition.getSb14IdLong())) {

                    boolean inc = formula98Incorporated.formula98ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula98Applicable.formula98ListApplicable(condition, chassis, userId, sbId, operation);
                        
                    }

                } 

            }

            // Formula (sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)
            else if (condition.getFormulaIdLong() == 100) {

                if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                        Objects.equals(sbId, condition.getSb2IdLong()) ||
                        Objects.equals(sbId, condition.getSb3IdLong()) ||
                        Objects.equals(sbId, condition.getSb7IdLong()) ||
                        Objects.equals(sbId, condition.getSb8IdLong()) ||
                        Objects.equals(sbId, condition.getSb9IdLong()) ||
                        Objects.equals(sbId, condition.getSb10IdLong()) ||
                        Objects.equals(sbId, condition.getSb11IdLong()) ||
                        Objects.equals(sbId, condition.getSb13IdLong()) ||
                        Objects.equals(sbId, condition.getSb14IdLong()) ||
                        Objects.equals(sbId, condition.getSb15IdLong())) {

                    boolean inc = formula100Incorporated.formula100ListIncorporated(condition, chassis, userId, sbId, operation);

                    if (!inc) {

                        boolean app = formula100Applicable.formula100ListApplicable(condition, chassis, userId, sbId, operation);

                    }

                }
                
            } else {

                if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null && condition.getSb19Id() != null &&
                        condition.getSb25Id() != null) {

                    if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                            Objects.equals(sbId, condition.getSb7IdLong()) ||
                            Objects.equals(sbId, condition.getSb13IdLong()) ||
                                    Objects.equals(sbId, condition.getSb19IdLong()) ||
                            Objects.equals(sbId, condition.getSb25IdLong())) {

                        boolean inc = fiveConditionsIncorporated.FiveConditionsListIncorporated(condition, chassis, userId, sbId, operation);

                        if (!inc) {

                            boolean app = fiveConditionsApplicable.fiveConditionsListApplicable(condition, chassis, userId, sbId, operation);

                        }
                    }

                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null && condition.getSb19Id() != null) {

                    if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                            Objects.equals(sbId, condition.getSb7IdLong()) ||
                            Objects.equals(sbId, condition.getSb13IdLong()) ||
                            Objects.equals(sbId, condition.getSb19IdLong())) {

                        boolean inc = fourConditionsIncorporated.fourConditionsListIncorporated(condition, chassis, userId, sbId, operation);

                        if (!inc) {

                            boolean app = fourConditionsApplicable.fourConditionsListApplicable(condition, chassis, userId, sbId, operation);

                        }
                    }

                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null &&
                        condition.getSb13Id() != null) {

                    if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                            Objects.equals(sbId, condition.getSb7IdLong()) ||
                            Objects.equals(sbId, condition.getSb13IdLong())) {

                        boolean inc = threeConditionsIncorporated.threeConditionsListIncorporated(condition, chassis, userId, sbId, operation);

                        if (!inc) {

                            boolean app = threeConditionsApplicable.threeConditionsListApplicable(condition, chassis, userId, sbId, operation);

                        }

                    }

                }

                else if (condition.getSb1Id() != null && condition.getSb7Id() != null) {

                    if (Objects.equals(sbId, condition.getSb1IdLong()) ||
                            Objects.equals(sbId, condition.getSb7IdLong())) {

                        boolean inc = twoConditionsIncorporated.twoConditionsListIncorporated(condition, chassis, userId, sbId, operation);

                        if (!inc) {

                            boolean app = twoConditionsApplicable.twoConditionsListApplicable(condition, chassis, userId, sbId, operation);

                        }

                    }

                }


            }


        }


    }


}









