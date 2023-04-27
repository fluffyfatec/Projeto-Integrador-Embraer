<template>
    <form @submit.prevent="EditionConfirm" class="center">
        <div class="align">
            <div class="condition1">
                <div class="micro">
                <div class="sb1">
                    <select class="select-sb1" v-model="conditionDTO.sb1">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb1 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb1_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts1" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>
                </div>
                <div v-if="conditionDTO.sb1 !== null && conditionDTO.sb2 !== null" class="clause">
                    <select class="select-clause" v-model="conditionDTO.operator_condit_1">
                        <option>AND</option>
                        <option>OR</option>
                    </select>
                </div>
                <div class="sb2">
                    <select v-if="conditionDTO.sb1 !== null" class="select-sb2" v-model="conditionDTO.sb2">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb2 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb2_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts2" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>    
                </div>
                <div v-if="conditionDTO.sb2 !== null && conditionDTO.sb3 !== null" class="clause">
                    <select class="select-clause" v-model="conditionDTO.operator_condit_1">
                        <option>AND</option>
                        <option>OR</option>
                    </select>
                </div>    
                <div class="sb3">
                    <select v-if="conditionDTO.sb2 !== null" class="select-sb3" v-model="conditionDTO.sb3">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb3 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb3_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts3" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>
                </div>
                <div v-if="conditionDTO.sb3 !== null && conditionDTO.sb4 !== null" class="clause">
                    <select class="select-clause" v-model="conditionDTO.operator_condit_1">
                        <option>AND</option>
                        <option>OR</option>
                    </select>
                </div>
                <div class="sb4">
                    <select v-if="conditionDTO.sb3 !== null" class="select-sb4" v-model="conditionDTO.sb4">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb4 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb4_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts4" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>    
                </div>
                <div v-if="conditionDTO.sb4 !== null && conditionDTO.sb5 !== null" class="clause">
                    <select class="select-clause" v-model="conditionDTO.operator_condit_1">
                        <option>AND</option>
                        <option>OR</option>
                    </select>
                </div>    
                <div class="sb5">
                    <select v-if="conditionDTO.sb4 !== null" class="select-sb5" v-model="conditionDTO.sb5">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb5 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb5_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts5" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select>
                </div>
                <div v-if="conditionDTO.sb5 !== null && conditionDTO.sb6 !== null" class="clause">
                    <select class="select-clause" v-model="conditionDTO.operator_condit_1">
                        <option>AND</option>
                        <option>OR</option>
                    </select>
                </div>
                <div class="sb6">
                    <select v-if="conditionDTO.sb5 !== null" class="select-sb6" v-model="conditionDTO.sb6">
                        <option class="select-placeholder" :value="null">Choose sb...</option>
                        <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                            {{ sb.sb_name }}
                        </option>
                    </select>
                    <select v-if="conditionDTO.sb6 !== null" class="select-sb-part" 
                    v-model="conditionDTO.sb6_part">
                        <option class="select-placeholder" disabled :value="null">Part</option>
                        <option v-for="part in filteredParts6" :key="part.part">
                            {{ part.part }}
                        </option>
                    </select> 
                    </div>   
                </div>    
            </div>  
            <div class = "button">
                <button v-if="!showCondition2" @click.prevent="showCondition2 = true"><i class="fa-solid fa-plus"></i> New micro-logic</button>
            </div>
            <div v-if="showCondition2" class="condition2">
                <div class="micro">
                    <div class="sb7">
                        <select class="select-sb7" v-model="conditionDTO.sb7">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb7 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb7_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts7" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb7 !== null && conditionDTO.sb8 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_2">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb8">
                        <select v-if="conditionDTO.sb7 !== null" class="select-sb8" v-model="conditionDTO.sb8">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb8 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb8_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts8" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb8 !== null && conditionDTO.sb9 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_2">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb9">
                        <select v-if="conditionDTO.sb8 !== null" class="select-sb9" v-model="conditionDTO.sb9">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb9 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb9_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts9" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb9 !== null && conditionDTO.sb10 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_2">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb10">
                        <select v-if="conditionDTO.sb9 !== null" class="select-sb10" v-model="conditionDTO.sb10">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb10 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb10_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts10" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb10 !== null && conditionDTO.sb11 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_2">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb11">
                        <select v-if="conditionDTO.sb10 !== null" class="select-sb11" v-model="conditionDTO.sb11">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb11 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb11_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts11" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb11 !== null && conditionDTO.sb12 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_2">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb12">
                        <select v-if="conditionDTO.sb11 !== null" class="select-sb12" v-model="conditionDTO.sb12">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb12 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb12_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts12" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div> 
                </div>
            </div>
            <div class = "button">
                <button v-if="!showCondition3 && showCondition2" @click.prevent="showCondition3 = true"><i class="fa-solid fa-plus"></i> New micro-logic</button>
            </div>
            <div v-if="showCondition3" class="condition3">
                <div class="micro">
                    <div class="sb13">
                        <select class="select-sb13" v-model="conditionDTO.sb13">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb13 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb13_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts13" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb13 !== null && conditionDTO.sb14 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_3">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb14">
                        <select v-if="conditionDTO.sb13 !== null" class="select-sb14" v-model="conditionDTO.sb14">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb14 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb14_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts14" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb14 !== null && conditionDTO.sb15 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_3">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb15">
                        <select v-if="conditionDTO.sb14 !== null" class="select-sb15" v-model="conditionDTO.sb15">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb15 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb15_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts15" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb15 !== null && conditionDTO.sb16 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_3">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb16">
                        <select v-if="conditionDTO.sb15 !== null" class="select-sb16" v-model="conditionDTO.sb16">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb16 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb16_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts16" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb16 !== null && conditionDTO.sb17 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_3">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb17">
                        <select v-if="conditionDTO.sb16 !== null" class="select-sb17" v-model="conditionDTO.sb17">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb17 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb17_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts17" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb17 !== null && conditionDTO.sb18 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_3">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb18">
                        <select v-if="conditionDTO.sb17 !== null" class="select-sb18" v-model="conditionDTO.sb18">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb18 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb18_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts18" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                </div>
            </div>  
            <div class="button">  
                <button v-if="!showCondition4 && showCondition3" @click.prevent="showCondition4 = true"><i class="fa-solid fa-plus"></i> New micro-logic</button>
            </div>
            <div v-if="showCondition4" class="condition4">
                <div class="micro">
                    <div class="sb19">
                        <select class="select-sb19" v-model="conditionDTO.sb19">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb19 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb19_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts19" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb19 !== null && conditionDTO.sb20 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_4">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb20">
                        <select v-if="conditionDTO.sb19 !== null" class="select-sb20" v-model="conditionDTO.sb20">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb20 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb20_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts20" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb20 !== null && conditionDTO.sb21 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_4">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb21">
                        <select v-if="conditionDTO.sb20 !== null" class="select-sb21" v-model="conditionDTO.sb21">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb21 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb21_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts21" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb21 !== null && conditionDTO.sb22 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_4">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb22">
                        <select v-if="conditionDTO.sb21 !== null" class="select-sb22" v-model="conditionDTO.sb22">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb22 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb22_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts22" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb22 !== null && conditionDTO.sb23 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_4">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb23">
                        <select v-if="conditionDTO.sb22 !== null" class="select-sb23" v-model="conditionDTO.sb23">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb23 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb23_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts23" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb23 !== null && conditionDTO.sb24 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_4">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb24">
                        <select v-if="conditionDTO.sb23 !== null" class="select-sb24" v-model="conditionDTO.sb24">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb24 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb24_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts24" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div> 
                </div>
                <div class="button">
                    <button v-if="!showCondition5 && showCondition4" @click.prevent="showCondition5 = true"><i class="fa-solid fa-plus"></i> New micro-logic</button>
                </div>
                <div v-if="showCondition5" class="condition5">
                    <div class="micro">
                        <div class="sb25">
                            <select class="select-sb25" v-model="conditionDTO.sb25">
                                <option class="select-placeholder" :value="null">Choose sb...</option>
                                <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                    {{ sb.sb_name }}
                                </option>
                            </select>
                            <select v-if="conditionDTO.sb25 !== null" class="select-sb-part" 
                            v-model="conditionDTO.sb25_part">
                                <option class="select-placeholder" disabled :value="null">Part</option>
                                <option v-for="part in filteredParts25" :key="part.part">
                                    {{ part.part }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div v-if="conditionDTO.sb25 !== null && conditionDTO.sb26 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_5">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb26">
                        <select v-if="conditionDTO.sb25 !== null" class="select-sb26" v-model="conditionDTO.sb26">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb26 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb26_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts26" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb26 !== null && conditionDTO.sb27 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_5">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb27">
                        <select v-if="conditionDTO.sb26 !== null" class="select-sb27" v-model="conditionDTO.sb27">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb27 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb27_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts27" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb27 !== null && conditionDTO.sb28 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_5">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb28">
                        <select v-if="conditionDTO.sb27 !== null" class="select-sb28" v-model="conditionDTO.sb28">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb28 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb28_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts28" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div>
                    <div v-if="conditionDTO.sb28 !== null && conditionDTO.sb29 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_5">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>    
                    <div class="sb29">
                        <select v-if="conditionDTO.sb28 !== null" class="select-sb29" v-model="conditionDTO.sb29">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb29 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb29_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts29" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>
                    </div>
                    <div v-if="conditionDTO.sb29 !== null && conditionDTO.sb30 !== null" class="clause">
                        <select class="select-clause" v-model="conditionDTO.operator_condit_5">
                            <option>AND</option>
                            <option>OR</option>
                        </select>
                    </div>
                    <div class="sb30">
                        <select v-if="conditionDTO.sb29 !== null" class="select-sb30" v-model="conditionDTO.sb30">
                            <option class="select-placeholder" :value="null">Choose sb...</option>
                            <option v-for="sb in sbs_options" :key="sb.sb_name + sb.part">
                                {{ sb.sb_name }}
                            </option>
                        </select>
                        <select v-if="conditionDTO.sb30 !== null" class="select-sb-part" 
                        v-model="conditionDTO.sb30_part">
                            <option class="select-placeholder" disabled :value="null">Part</option>
                            <option v-for="part in filteredParts30" :key="part.part">
                                {{ part.part }}
                            </option>
                        </select>    
                    </div> 
                </div>
            </div> 
            <div class="clause">
                <h3>=</h3>
            </div>    
            <div class="item">
                <input type="text" v-model="conditionDTO.item" placeholder="Name of item...">
            </div>    
        
            <div class="center">
                <button v-if="conditionDTO.item !== null && 
                    conditionDTO.sb1 !== null && conditionDTO.sb1_part !== null" 
                type="submit" class="submit">Submit</button>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
import axios from 'axios';
import { eventBus } from '@/main';
import { macroWithUniqueMicroLogic } from '@/conditions';
import { macroWithTwoMicroLogics } from '@/conditions';
import { macroWithTwoMicroLogics_Sb1 } from '@/conditions';
import { macroWithThreeMicroLogics_Sb1 } from '@/conditions';
import { macroWithThreeMicroLogics } from '@/conditions';


export default {

    props: ['itemId'],

    data() {
        return {

            edition: true,
            sbs_options: [],
            filteredParts1: [],
            filteredParts2: [],
            filteredParts3: [],
            filteredParts4: [],
            filteredParts5: [],
            filteredParts6: [],
            filteredParts7: [],
            filteredParts8: [],
            filteredParts9: [],
            filteredParts10: [],
            filteredParts11: [],
            filteredParts12: [],
            filteredParts13: [],
            filteredParts14: [],
            filteredParts15: [],
            filteredParts16: [],
            filteredParts17: [],
            filteredParts18: [],
            filteredParts19: [],
            filteredParts20: [],
            filteredParts21: [],
            filteredParts22: [],
            filteredParts23: [],
            filteredParts24: [],
            filteredParts25: [],
            filteredParts26: [],
            filteredParts27: [],
            filteredParts28: [],
            filteredParts29: [],
            filteredParts30: [],
            conditionDTO: {
                conditionId: null,
                item: null,
                formulaDesc: 'others',
                chassis: null,
                sb1: null,
                sb1_part: null,
                sb2: null,
                sb2_part: null,
                sb3: null,
                sb3_part: null,
                sb4: null,
                sb4_part: null,
                sb5: null,
                sb5_part: null,
                sb6: null,
                sb6_part: null,
                sb7: null,
                sb7_part: null,
                sb8: null,
                sb8_part: null,
                sb9: null,
                sb9_part: null,
                sb10: null,
                sb10_part: null,
                sb11: null,
                sb11_part: null,
                sb12: null,
                sb12_part: null,
                sb13: null,
                sb13_part: null,
                sb14: null,
                sb14_part: null,
                sb15: null,
                sb15_part: null,
                sb16: null,
                sb16_part: null,
                sb17: null,
                sb17_part: null,
                sb18: null,
                sb18_part: null,
                sb19: null,
                sb19_part: null,
                sb20: null,
                sb20_part: null,
                sb21: null,
                sb21_part: null,
                sb22: null,
                sb22_part: null,
                sb23: null,
                sb23_part: null,
                sb24: null,
                sb24_part: null,
                sb25: null,
                sb25_part: null,
                sb26: null,
                sb26_part: null,
                sb27: null,
                sb27_part: null,
                sb28: null,
                sb28_part: null,
                sb29: null,
                sb29_part: null,
                sb30: null,
                sb30_part: null,
                operator_condit_1: null,
                operator_condit_2: null,
                operator_condit_3: null,
                operator_condit_4: null,
                operator_condit_5: null
            },

            showCondition2: false,
            showCondition3: false,
            showCondition4: false,
            showCondition5: false,

        }
    },

    mounted() {
        this.getCondition();
        this.getSbs();
    },

    methods: {

        updateEditionValue() {
            eventBus.$emit('edition', this.edition);
        },

        updategetItems() {
            eventBus.$emit('update-getItems', this.edition);
        },

        async getCondition() {

            const response = await axios.get('http://localhost:8080/list/condition/' + this.itemId);
                    
            this.conditionDTO = response.data;

            if (this.conditionDTO.sb1_part === 'UNICO') { 
                this.conditionDTO.sb1_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb2_part === 'UNICO') { 
                this.conditionDTO.sb2_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb3_part === 'UNICO') { 
                this.conditionDTO.sb3_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb4_part === 'UNICO') { 
                this.conditionDTO.sb4_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb5_part === 'UNICO') { 
                this.conditionDTO.sb5_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb6_part === 'UNICO') { 
                this.conditionDTO.sb6_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb7_part === 'UNICO') { 
                this.conditionDTO.sb7_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb8_part === 'UNICO') { 
                this.conditionDTO.sb8_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb9_part === 'UNICO') { 
                this.conditionDTO.sb9_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb10_part === 'UNICO') { 
                this.conditionDTO.sb10_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb11_part === 'UNICO') { 
                this.conditionDTO.sb11_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb12_part === 'UNICO') { 
                this.conditionDTO.sb12_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb13_part === 'UNICO') { 
                this.conditionDTO.sb13_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb14_part === 'UNICO') { 
                this.conditionDTO.sb14_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb15_part === 'UNICO') { 
                this.conditionDTO.sb15_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb16_part === 'UNICO') { 
                this.conditionDTO.sb16_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb17_part === 'UNICO') { 
                this.conditionDTO.sb17_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb18_part === 'UNICO') { 
                this.conditionDTO.sb18_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb19_part === 'UNICO') { 
                this.conditionDTO.sb19_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb20_part === 'UNICO') { 
                this.conditionDTO.sb20_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb21_part === 'UNICO') { 
                this.conditionDTO.sb21_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb22_part === 'UNICO') { 
                this.conditionDTO.sb22_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb23_part === 'UNICO') { 
                this.conditionDTO.sb23_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb24_part === 'UNICO') { 
                this.conditionDTO.sb24_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb25_part === 'UNICO') { 
                this.conditionDTO.sb25_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb26_part === 'UNICO') { 
                this.conditionDTO.sb26_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb27_part === 'UNICO') { 
                this.conditionDTO.sb27_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb28_part === 'UNICO') { 
                this.conditionDTO.sb28_part = 'UNIQUE';
            };
            
            if (this.conditionDTO.sb29_part === 'UNICO') { 
                this.conditionDTO.sb29_part = 'UNIQUE';
            };

            if (this.conditionDTO.sb30_part === 'UNICO') { 
                this.conditionDTO.sb30_part = 'UNIQUE';
            };


            if (this.conditionDTO.sb7 !== null) {
                this.showCondition2 = true;
            }

            if (this.conditionDTO.sb13 !== null) {
                this.showCondition3 = true;
            }

            if (this.conditionDTO.sb19 !== null) {
                this.showCondition4 = true;
            }

            if (this.conditionDTO.sb25 !== null) {
                this.showCondition5 = true;
            }

            
        },

        async getSbs() {
            const response = await axios.get('http://localhost:8080/bulletin/list/all');
            this.sbs_options = response.data.map((item: String) => ({ 
                sb_name: item.service_bulletin_name, 
                part: item.service_bulletin_part === 'UNICO' ? 'UNIQUE' : item.service_bulletin_part }));

            this.filteredPartsBySb1();
            this.filteredPartsBySb2();
            this.filteredPartsBySb3();
            this.filteredPartsBySb4();
            this.filteredPartsBySb5();
            this.filteredPartsBySb6();
            this.filteredPartsBySb7();
            this.filteredPartsBySb8();
            this.filteredPartsBySb9();
            this.filteredPartsBySb10();
            this.filteredPartsBySb11();
            this.filteredPartsBySb12();
            this.filteredPartsBySb13();
            this.filteredPartsBySb14();
            this.filteredPartsBySb15();
            this.filteredPartsBySb16();
            this.filteredPartsBySb17();
            this.filteredPartsBySb18();
            this.filteredPartsBySb19();
            this.filteredPartsBySb20();
            this.filteredPartsBySb21();
            this.filteredPartsBySb22();
            this.filteredPartsBySb23();
            this.filteredPartsBySb24();
            this.filteredPartsBySb25();
            this.filteredPartsBySb26();
            this.filteredPartsBySb27();
            this.filteredPartsBySb28();
            this.filteredPartsBySb29();
            this.filteredPartsBySb30();    
        },

        filteredPartsBySb1() {
            this.filteredParts1 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb1);
        },

        filteredPartsBySb2() {
            this.filteredParts2 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb2);
        },

        filteredPartsBySb3() {
            this.filteredParts3 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb3);
        },

        filteredPartsBySb4() {
            this.filteredParts4 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb4);
        },

        filteredPartsBySb5() {
            this.filteredParts5 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb5);
        },

        filteredPartsBySb6() {
            this.filteredParts6 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb6);
        },

        filteredPartsBySb7() {
            this.filteredParts7 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb7);
        },

        filteredPartsBySb8() {
            this.filteredParts8 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb8);
        },

        filteredPartsBySb9() {
            this.filteredParts9 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb9);
        },

        filteredPartsBySb10() {
            this.filteredParts10 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb10);
        },

        filteredPartsBySb11() {
            this.filteredParts11 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb11);
        },

        filteredPartsBySb12() {
            this.filteredParts12 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb12);
        },

        filteredPartsBySb13() {
            this.filteredParts13 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb13);
        },

        filteredPartsBySb14() {
            this.filteredParts14 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb14);
        },

        filteredPartsBySb15() {
            this.filteredParts15 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb15);
        },

        filteredPartsBySb16() {
            this.filteredParts16 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb16);
        },

        filteredPartsBySb17() {
            this.filteredParts17 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb17);
        },

        filteredPartsBySb18() {
            this.filteredParts18 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb18);
        },

        filteredPartsBySb19() {
            this.filteredParts19 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb19);
        },

        filteredPartsBySb20() {
            this.filteredParts20 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb20);
        },

        filteredPartsBySb21() {
            this.filteredParts21 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb21);
        },

        filteredPartsBySb22() {
            this.filteredParts22 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb22);
        },

        filteredPartsBySb23() {
            this.filteredParts23 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb23);
        },

        filteredPartsBySb24() {
            this.filteredParts24 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb24);
        },

        filteredPartsBySb25() {
            this.filteredParts25 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb25);
        },

        filteredPartsBySb26() {
            this.filteredParts26 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb26);
        },

        filteredPartsBySb27() {
            this.filteredParts27 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb27);
        },

        filteredPartsBySb28() {
            this.filteredParts28 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb28);
        },

        filteredPartsBySb29() {
            this.filteredParts29 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb29);
        },

        filteredPartsBySb30() {
            this.filteredParts30 = this.sbs_options.filter(item => String(item.sb_name) === this.conditionDTO.sb30);
        },

        async EditionConfirm() {

            if (this.conditionDTO.sb1_part === 'UNIQUE') { 
                this.conditionDTO.sb1_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb2_part === 'UNIQUE') { 
                this.conditionDTO.sb2_part = 'UNICO';
            };

            if (this.conditionDTO.sb3_part === 'UNIQUE') { 
                this.conditionDTO.sb3_part = 'UNICO';
            };

            if (this.conditionDTO.sb4_part === 'UNIQUE') { 
                this.conditionDTO.sb4_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb5_part === 'UNIQUE') { 
                this.conditionDTO.sb5_part = 'UNICO';
            };

            if (this.conditionDTO.sb6_part === 'UNIQUE') { 
                this.conditionDTO.sb6_part = 'UNICO';
            };

            if (this.conditionDTO.sb7_part === 'UNIQUE') { 
                this.conditionDTO.sb7_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb8_part === 'UNIQUE') { 
                this.conditionDTO.sb8_part = 'UNICO';
            };

            if (this.conditionDTO.sb9_part === 'UNIQUE') { 
                this.conditionDTO.sb9_part = 'UNICO';
            };

            if (this.conditionDTO.sb10_part === 'UNIQUE') { 
                this.conditionDTO.sb10_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb11_part === 'UNIQUE') { 
                this.conditionDTO.sb11_part = 'UNICO';
            };

            if (this.conditionDTO.sb12_part === 'UNIQUE') { 
                this.conditionDTO.sb12_part = 'UNICO';
            };

            if (this.conditionDTO.sb13_part === 'UNIQUE') { 
                this.conditionDTO.sb13_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb14_part === 'UNIQUE') { 
                this.conditionDTO.sb14_part = 'UNICO';
            };

            if (this.conditionDTO.sb15_part === 'UNIQUE') { 
                this.conditionDTO.sb15_part = 'UNICO';
            };

            if (this.conditionDTO.sb16_part === 'UNIQUE') { 
                this.conditionDTO.sb16_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb17_part === 'UNIQUE') { 
                this.conditionDTO.sb17_part = 'UNICO';
            };

            if (this.conditionDTO.sb18_part === 'UNIQUE') { 
                this.conditionDTO.sb18_part = 'UNICO';
            };

            if (this.conditionDTO.sb19_part === 'UNIQUE') { 
                this.conditionDTO.sb19_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb20_part === 'UNIQUE') { 
                this.conditionDTO.sb20_part = 'UNICO';
            };

            if (this.conditionDTO.sb21_part === 'UNIQUE') { 
                this.conditionDTO.sb21_part = 'UNICO';
            };

            if (this.conditionDTO.sb22_part === 'UNIQUE') { 
                this.conditionDTO.sb22_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb23_part === 'UNIQUE') { 
                this.conditionDTO.sb23_part = 'UNICO';
            };

            if (this.conditionDTO.sb24_part === 'UNIQUE') { 
                this.conditionDTO.sb24_part = 'UNICO';
            };

            if (this.conditionDTO.sb25_part === 'UNIQUE') { 
                this.conditionDTO.sb25_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb26_part === 'UNIQUE') { 
                this.conditionDTO.sb26_part = 'UNICO';
            };

            if (this.conditionDTO.sb27_part === 'UNIQUE') { 
                this.conditionDTO.sb27_part = 'UNICO';
            };

            if (this.conditionDTO.sb28_part === 'UNIQUE') { 
                this.conditionDTO.sb28_part = 'UNICO';
            };
            
            if (this.conditionDTO.sb29_part === 'UNIQUE') { 
                this.conditionDTO.sb29_part = 'UNICO';
            };

            if (this.conditionDTO.sb30_part === 'UNIQUE') { 
                this.conditionDTO.sb30_part = 'UNICO';
            };


            macroWithUniqueMicroLogic(this.conditionDTO);
            macroWithTwoMicroLogics_Sb1(this.conditionDTO);
            macroWithThreeMicroLogics_Sb1(this.conditionDTO);
            macroWithTwoMicroLogics(this.conditionDTO);
            macroWithThreeMicroLogics(this.conditionDTO);


            await axios.post('http://localhost:8080/edit-condition', this.conditionDTO,  {
                    headers: {
                    'Content-Type': 'application/json'
                    }

            });

            this.edition = false;

            this.updateEditionValue();

        },

        EditionCancel() {
            this.edition = false;
            this.updateEditionValue();
        },

        async ItemDelete() {
            await axios.get('http://localhost:8080/delete/' + this.conditionDTO.conditionId + '/' + this.itemId);

            this.edition = false;

            this.updateEditionValue();
            this.updategetItems();
        },


    },

    watch: {

        'conditionDTO.sb1': function () {
        this.filteredPartsBySb1();
        },

        'conditionDTO.sb2': function () {
        this.filteredPartsBySb2();
        },

        'conditionDTO.sb3': function () {
        this.filteredPartsBySb3();
        },

        'conditionDTO.sb4': function () {
        this.filteredPartsBySb4();
        },

        'conditionDTO.sb5': function () {
        this.filteredPartsBySb5();
        },

        'conditionDTO.sb6': function () {
        this.filteredPartsBySb6();
        },

        'conditionDTO.sb7': function () {
        this.filteredPartsBySb7();
        },

        'conditionDTO.sb8': function () {
        this.filteredPartsBySb8();
        },

        'conditionDTO.sb9': function () {
        this.filteredPartsBySb9();
        },

        'conditionDTO.sb10': function () {
        this.filteredPartsBySb10();
        },

        'conditionDTO.sb11': function () {
        this.filteredPartsBySb11();
        },

        'conditionDTO.sb12': function () {
        this.filteredPartsBySb12();
        },

        'conditionDTO.sb13': function () {
        this.filteredPartsBySb13();
        },

        'conditionDTO.sb14': function () {
        this.filteredPartsBySb14();
        },

        'conditionDTO.sb15': function () {
        this.filteredPartsBySb15();
        },

        'conditionDTO.sb16': function () {
        this.filteredPartsBySb16();
        },

        'conditionDTO.sb17': function () {
        this.filteredPartsBySb17();
        },

        'conditionDTO.sb18': function () {
        this.filteredPartsBySb18();
        },

        'conditionDTO.sb19': function () {
        this.filteredPartsBySb19();
        },

        'conditionDTO.sb20': function () {
        this.filteredPartsBySb20();
        },

        'conditionDTO.sb21': function () {
        this.filteredPartsBySb21();
        },

        'conditionDTO.sb22': function () {
        this.filteredPartsBySb22();
        },

        'conditionDTO.sb23': function () {
        this.filteredPartsBySb23();
        },

        'conditionDTO.sb24': function () {
        this.filteredPartsBySb24();
        },

        'conditionDTO.sb25': function () {
        this.filteredPartsBySb25();
        },

        'conditionDTO.sb26': function () {
        this.filteredPartsBySb26();
        },

        'conditionDTO.sb27': function () {
        this.filteredPartsBySb27();
        },

        'conditionDTO.sb28': function () {
        this.filteredPartsBySb28();
        },

        'conditionDTO.sb29': function () {
        this.filteredPartsBySb29();
        },

        'conditionDTO.sb30': function () {
        this.filteredPartsBySb30();
        },

    },

}

</script>
<style scoped>
h3{
    display: flex;
    justify-content: center;
    font-size: 4rem;
    color: var(--azul-principal);
}

select{
    margin-bottom: 1rem;
}

@media only screen and (max-width: 767px) {

    h3{
        font-size: 90px;
        margin-top: 1px;
        margin-bottom: 1px;
    }
    select{
        width: 90%;
    }

    .align{
        width: 70%;
    }

    input{
        width: 80%;
    }
}

.select-placeholder {
    background-color: #E0E0E1;
}
</style>