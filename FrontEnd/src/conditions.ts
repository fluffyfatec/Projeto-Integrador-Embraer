export function macroWithUniqueMicroLogic(conditionDTO: any) {
    // Macro with unique micro-logic
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.operator_condit_1 === 'AND') {
            conditionDTO.formulaDesc = 'sb1 AND sb2 AND sb3';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.operator_condit_1 === 'OR') {
            conditionDTO.formulaDesc = 'sb1 OR sb2 OR sb3';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.operator_condit_1 === 'AND') {
            conditionDTO.formulaDesc = 'sb1 AND sb2 AND sb3 AND sb4';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.operator_condit_1 === 'OR') {
            conditionDTO.formulaDesc = 'sb1 OR sb2 OR sb3 OR sb4';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND') {
            conditionDTO.formulaDesc = 'sb1 AND sb2 AND sb3 AND sb3 AND sb4 AND sb5';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR') {
            conditionDTO.formulaDesc = 'sb1 OR sb2 OR sb3 OR sb4 OR sb5';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
        conditionDTO.operator_condit_1 === 'AND') {
            conditionDTO.formulaDesc = 'sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6';
        };

        if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null, conditionDTO.sb3 !== null
        && conditionDTO.sb4 && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
        conditionDTO.operator_condit_1 === 'OR') {
            conditionDTO.formulaDesc = 'sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6';
        };
}

export function macroWithTwoMicroLogics(conditionDTO: any) {
    // Macro with two micro-logics
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7';
    };
    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
    conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
    conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
    conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
    conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 ';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null) {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8)';
    };

    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) ';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9)';
    };

    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) ';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) ';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    
    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
    conditionDTO.operator_condit_1 === 'OR'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'OR') {
       conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
    };

    if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
    conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
    conditionDTO.operator_condit_1 === 'AND'
    && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
    conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
    conditionDTO.operator_condit_2 === 'AND') {
       conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
    };

}

export function macroWithTwoMicroLogics_Sb1(conditionDTO: any) {
    // Macro with 2 micro-logics besides micro-logic1 with a unique sb
    if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND sb7';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9)';
        };
    
        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10)';
        };
    
        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11)';
        };
    
        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12)';
        };
    
        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12)';
        };
    
}

export function macroWithThreeMicroLogics_Sb1(conditionDTO: any) {
     // Macro with 3 micro-logics besides micro-logic1 with a unique sb

     if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND sb13';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb15 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb15 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb15 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb15 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null 
        && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null &&
        conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
         conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15 AND sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15 OR sb16)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
         conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb14 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null 
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null &&
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null &&
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb14 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb18 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null 
        && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
        conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR' 
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null &&
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
           && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
        && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
        conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
        conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15 AND sb16 AND sb17 AND sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

        if (conditionDTO.sb1 !== null
        && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
        conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
        conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
        && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && 
        conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
           conditionDTO.formulaDesc = 'sb1 AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15 OR sb16 OR sb17 OR sb18)';
        };

}

export function macroWithThreeMicroLogics(conditionDTO: any) {
     // Macro with three micro-logics
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND sb13';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND sb13';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null) {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND sb13';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 OR sb14)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 OR sb14 OR sb15) ';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 AND sb14 AND sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9 OR sb10 OR sb11 OR sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9 AND sb10 AND sb11 AND sb12) AND (sb13 OR sb14 OR sb15)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND sb7 AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 AND sb14 AND sb15 AND sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 OR sb2 OR sb3 OR sb4 OR sb5 OR sb6) AND (sb7 OR sb8 OR sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '(sb1 AND sb2 AND sb3 AND sb4 AND sb5 AND sb6) AND (sb7 AND sb8 AND sb9) AND (sb13 OR sb14 OR sb15 OR sb16)';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
      conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
     conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null &&
     conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && 
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR' && 
     conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && 
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'OR' && conditionDTO.sb7 !== null && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null
     && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null
      && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'OR'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null &&  conditionDTO.operator_condit_2 === 'AND'
     && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null && conditionDTO.sb15 !== null && 
     conditionDTO.sb16 !== null && conditionDTO.sb17 !== null && conditionDTO.sb18 !== null && 
     conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null &&
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null && 
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
     
     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'AND') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null && 
     conditionDTO.operator_condit_1 === 'OR'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'OR' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };

     if (conditionDTO.sb1 !== null && conditionDTO.sb2 !== null && conditionDTO.sb3 !== null && 
     conditionDTO.sb4 !== null && conditionDTO.sb5 !== null && conditionDTO.sb6 !== null &&
     conditionDTO.operator_condit_1 === 'AND'
     && conditionDTO.sb7 !== null && conditionDTO.sb8 !== null && conditionDTO.sb9 !== null && 
     conditionDTO.sb10 !== null && conditionDTO.sb11 !== null && conditionDTO.sb12 !== null &&  
     conditionDTO.operator_condit_2 === 'AND' && conditionDTO.sb13 !== null && conditionDTO.sb14 !== null 
     && conditionDTO.sb15 !== null && conditionDTO.sb16 !== null && conditionDTO.sb17 !== null &&
     conditionDTO.sb18 !== null &&  conditionDTO.operator_condit_3 === 'OR') {
        conditionDTO.formulaDesc = '';
     };
}