const database = require("../utils/database")
const QueryGenerator = require("../generators/query.generator");
const { getFamily } = require("../controllers/user.controller");

const UserModel={
    async getIndividual(id){
        console.log(id);
        let query=`select*from user_family_details as u
        inner join user_household_profile as a on a.user_id=u.user_id
        inner join user_housing as b on b.user_id=u.user_id
        inner join user_economy_industries as c on c.user_id=u.user_id
        inner join user_transportation as d on d.user_id=u.user_id
        inner join user_physical_infrastructure as e on e.user_id=u.user_id
        inner join user_social_infrastructure as f on f.user_id=u.user_id
        inner join user_slums as g on g.user_id=u.user_id
        inner join user_coastal as h on h.user_id=u.user_id
        inner join user_environmental_related as i on i.user_id=u.user_id
        inner join user_cultural_heritage as j on j.user_id=u.user_id
        inner join user_tourism as k on k.user_id=u.user_id where g.user_id=${id}`;
        return database.promise().query(query);
    },
    async getFamilyDetails({locality_name,ward,total_no_of_members,family_head_fullname,male,female,illetrate_member,caste,religion,minority_status}){
        let query;

        query=QueryGenerator.insert("user_family_details",{locality_name,ward,total_no_of_members,family_head_fullname,male,female,illetrate_member,caste,religion,minority_status})
        return database.promise().query(query)
    },
    async getHouseholdProfile({ user_id,migrated,no_of_years_migrated,place_of_origin,migration_type,reason_of_migration,other_reasons_for_migration,willing_to_migrate_to_another_place,another_migrate_place,reason_for_not_going_back_to_native,other_reason_for_not_going_back_to_native,after_covid_willing_to_go_back_to_native}){
        let query;
        query=QueryGenerator.insert("user_household_profile",{ user_id,migrated,no_of_years_migrated,place_of_origin,migration_type,reason_of_migration,other_reasons_for_migration,willing_to_migrate_to_another_place,another_migrate_place,reason_for_not_going_back_to_native,other_reason_for_not_going_back_to_native,after_covid_willing_to_go_back_to_native})
        return database.promise().query(query)
    },
    async getHosingDetails({ user_id,house_type,no_of_floors,wall_material_used,roof_material_used,house_age,house_condition,ownership_type,rent_amount,land_ownership,approx_price_range_of_land_per_katha,other_land_property,where_is_the_land,are_you_willing_to_buy,usage_of_residential_building,assets_owned_by_household,cooking_fuel}){
        let query;
        query=QueryGenerator.insert("user_housing",{ user_id,house_type,no_of_floors,wall_material_used,roof_material_used,house_age,house_condition,ownership_type,rent_amount,land_ownership,approx_price_range_of_land_per_katha,other_land_property,where_is_the_land,are_you_willing_to_buy,usage_of_residential_building,assets_owned_by_household,cooking_fuel})
        return database.promise().query(query)
    },
    async getEconomyDetails({ user_id,employment_engagement_type,occupation,if_construction_work,family_members_working_as_parttime_employees,industry_type,working_industry,after_covid19_impact_on_job_opportunity,industrial_sector_been_affected_after_covid19,suggestion_for_how_job_opportunities_can_be_made_available,family_members_receive_pension,pension,monthly_expenditure,impact_on_monthly_expenditure_after_covid19,visit_market_before_covid19,visit_market_after_covid19,preferred_way_of_shopping_before_covid19,preferred_way_of_shopping_after_covid19,how_often_do_you_do_online_shopping }){
        let query;
        query=QueryGenerator.insert("user_economy_industries",{ user_id,employment_engagement_type,occupation,if_construction_work,family_members_working_as_parttime_employees,industry_type,working_industry,after_covid19_impact_on_job_opportunity,industrial_sector_been_affected_after_covid19,suggestion_for_how_job_opportunities_can_be_made_available,family_members_receive_pension,pension,monthly_expenditure,impact_on_monthly_expenditure_after_covid19,visit_market_before_covid19,visit_market_after_covid19,preferred_way_of_shopping_before_covid19,preferred_way_of_shopping_after_covid19,how_often_do_you_do_online_shopping })
        return database.promise().query(query)
    },
    async getCulturalDetails( { user_id,popular_festival_occasion,place_have_any_significant_heritage_site_structure_precinit,visitors_during_festival_occasion,problem_during_festival_occasion,festival_heritage_presence_help_you_in_economic_generation,if_yes_specify,tourists_visit_this_place_regularly_during_festivals,any_further_suggestion_issues_for_improvement }){
        let query;
        query=QueryGenerator.insert("user_cultural_heritage", { user_id,popular_festival_occasion,place_have_any_significant_heritage_site_structure_precinit,visitors_during_festival_occasion,problem_during_festival_occasion,festival_heritage_presence_help_you_in_economic_generation,if_yes_specify,tourists_visit_this_place_regularly_during_festivals,any_further_suggestion_issues_for_improvement })
        return database.promise().query(query)
    },
    async getTourismDetails( { user_id,tourists_come_to_this_region_regularly,best_season_for_tourist_to_visit_then_why,are_you_involved_in_tourist_related_activities,which_type_of_activities_you_involved_in,work_engagement_apart_from_tourist_activity,no_of_family_members_engage_in_such_activity,if_handicraft_what_item_do_you_sell,whom_do_you_sell_your_products_to_most_often,participate_in_any_mela_for_product_showcase_sell,where_then_how_often_do_you_visit_mela,availabolity_of_training_center_exhibition_center,sell_of_product_before_covid19,sell_of_product_after_covid19,tourism_sector_helps_economic_growth_of_this_region,any_suggestion_for_improvement,any_further_suggestion_for_improvement}){
        let query;
        query=QueryGenerator.insert("user_tourism", { user_id,tourists_come_to_this_region_regularly,best_season_for_tourist_to_visit_then_why,are_you_involved_in_tourist_related_activities,which_type_of_activities_you_involved_in,work_engagement_apart_from_tourist_activity,no_of_family_members_engage_in_such_activity,if_handicraft_what_item_do_you_sell,whom_do_you_sell_your_products_to_most_often,participate_in_any_mela_for_product_showcase_sell,where_then_how_often_do_you_visit_mela,availabolity_of_training_center_exhibition_center,sell_of_product_before_covid19,sell_of_product_after_covid19,tourism_sector_helps_economic_growth_of_this_region,any_suggestion_for_improvement,any_further_suggestion_for_improvement})
        return database.promise().query(query)
    },
    async getTransportationDetails( { user_id,transportation_conveyance_facilities_satisfactory,before_covid19_most_preferred_mode_of_transport,after_covid19_most_preferred_mode_of_transport,self_owned_vehicles,mode_of_transportation_for_school_college,mode_of_transportation_for_market_shoppingcenter,mode_of_transportation_for_hospital_healthcare,mode_of_transportation_for_parks_cinema_mall,mode_of_transportation_for_railwaystation_bus,mode_of_transportation_for_terminal,mode_of_transportation_for_airport,mode_of_transportation_for_bank_postoffice,how_often_do_you_travel_outstation,oustation_location,preferred_mode_of_transportation,are_there_any_signages_provided,is_there_any_footpath_provided,is_zebra_crossing_provided_near_junctions,availability_of_cycle_track_pedestrain_pathway,is_the_path_shaded_with_trees,any_further_suggestion_for_improvement }){
        let query;
        query=QueryGenerator.insert("user_transportation", { user_id,transportation_conveyance_facilities_satisfactory,before_covid19_most_preferred_mode_of_transport,after_covid19_most_preferred_mode_of_transport,self_owned_vehicles,mode_of_transportation_for_school_college,mode_of_transportation_for_market_shoppingcenter,mode_of_transportation_for_hospital_healthcare,mode_of_transportation_for_parks_cinema_mall,mode_of_transportation_for_railwaystation_bus,mode_of_transportation_for_terminal,mode_of_transportation_for_airport,mode_of_transportation_for_bank_postoffice,how_often_do_you_travel_outstation,oustation_location,preferred_mode_of_transportation,are_there_any_signages_provided,is_there_any_footpath_provided,is_zebra_crossing_provided_near_junctions,availability_of_cycle_track_pedestrain_pathway,is_the_path_shaded_with_trees,any_further_suggestion_for_improvement })
        return database.promise().query(query)
    },
    async getEnvironmentDetails( { user_id,family_nearby_person_suffer_from_diseases_in_last_few_years,diseases,family_member_face_any_problem_in_breathing,major_cause_of_pollution,face_any_issues_during_rainy_season,issues_in_rainy_season,whether_the_area_is_prone_to_flooding_due_to_rains,how_many_days_it_takes_to_normal_condition,during_flooding_is_rehabilitation_center_available,whether_any_funds_granted_to_you_for_such_disaster,do_hoardings_create_any_visual_disturbance_while_driving,does_traffic_movement_noise_an_issue_for_your_locality,suggestion_for_improvement_in_reduction_of_traffic_noise,whether_the_waste_disposed_off_in_nearby_river,suggesstion_for_improvement_in_waste_disposed_off_issue }){
        let query;
        query=QueryGenerator.insert("user_environmental_related", { user_id,family_nearby_person_suffer_from_diseases_in_last_few_years,diseases,family_member_face_any_problem_in_breathing,major_cause_of_pollution,face_any_issues_during_rainy_season,issues_in_rainy_season,whether_the_area_is_prone_to_flooding_due_to_rains,how_many_days_it_takes_to_normal_condition,during_flooding_is_rehabilitation_center_available,whether_any_funds_granted_to_you_for_such_disaster,do_hoardings_create_any_visual_disturbance_while_driving,does_traffic_movement_noise_an_issue_for_your_locality,suggestion_for_improvement_in_reduction_of_traffic_noise,whether_the_waste_disposed_off_in_nearby_river,suggesstion_for_improvement_in_waste_disposed_off_issue })
        return database.promise().query(query)
    },
    async getPhysicalInfrasturcture( { user_id ,source_of_drinking_water,is_connection_available_within_premises,frequency_of_municipal_supply,duration_of_supply,quality_of_water,satisfied_with_the_drinking_water_supply,types_of_complaints,complaints_redresses_time,source_of_electricity,electricity_connection,power_cut_duration,availability_of_street_light,condition_of_street_light,type_of_street_light,availability_of_drainage_line,household_waste_water_outlet,where_is_rain_water_collected,where_is_household_solid_waste_disposed_off,door_to_door_collection,is_solid_waste_segregation_at_household_level  }){
        let query;
        query=QueryGenerator.insert("user_physical_infrastructure",{ user_id ,source_of_drinking_water,is_connection_available_within_premises,frequency_of_municipal_supply,duration_of_supply,quality_of_water,satisfied_with_the_drinking_water_supply,types_of_complaints,complaints_redresses_time,source_of_electricity,electricity_connection,power_cut_duration,availability_of_street_light,condition_of_street_light,type_of_street_light,availability_of_drainage_line,household_waste_water_outlet,where_is_rain_water_collected,where_is_household_solid_waste_disposed_off,door_to_door_collection,is_solid_waste_segregation_at_household_level  })
        return database.promise().query(query)
    },
    async getCoastalDetails( { user_id ,do_you_have_boats,purpose_of_using_boatss,are_you_associated_with_fishing_related_activities,role_in_fishing_related_activities,have_you_been_engaged_in_other_activities_apart_from_fishing,other_activities_apart_from_fishing,think_living_in_a_coastal_region_is_a_threat_an_opportunity,how_do_you_get_the_information_related_to_natural_threats,safe_place_during_natural_events,after_disaster_how_many_days_it_take_to_come_to_normal,major_damages_during_natural_calamities,availability_of_ration_during_the_natural_disaster,whether_any_fund_area_granted_for_the_flood_prone_area,does_this_region_have_any_tourism_opportunities,any_further_suggestion_issues }){
        let query;
        query=QueryGenerator.insert("user_coastal",{ user_id ,do_you_have_boats,purpose_of_using_boatss,are_you_associated_with_fishing_related_activities,role_in_fishing_related_activities,have_you_been_engaged_in_other_activities_apart_from_fishing,other_activities_apart_from_fishing,think_living_in_a_coastal_region_is_a_threat_an_opportunity,how_do_you_get_the_information_related_to_natural_threats,safe_place_during_natural_events,after_disaster_how_many_days_it_take_to_come_to_normal,major_damages_during_natural_calamities,availability_of_ration_during_the_natural_disaster,whether_any_fund_area_granted_for_the_flood_prone_area,does_this_region_have_any_tourism_opportunities,any_further_suggestion_issues })
        return database.promise().query(query)
    },
    async getSocialDetails( { user_id,type_of_school_infrastructure_do_you_prefer,type_of_education_availability_distance,most_preferred_mode,your_region_has_good_opportunities_in_education_facilities,suggestion_for_educational_improvement,most_preferred_health_facility,health_distance,your_region_has_good_opportunities_in_health_facilities,suggestion_for_health_facilities_improvement,availablility_of_parks_playground_other_recreation_spaces,your_family_members_go_to_park_playground,how_regular,suggestion_for_recreation_space_improvement,grant_from_any_state_government_flagship_scheme,other_schemes }){
        let query;
        query=QueryGenerator.insert("user_social_infrastructure",{ user_id,type_of_school_infrastructure_do_you_prefer,type_of_education_availability_distance,most_preferred_mode,your_region_has_good_opportunities_in_education_facilities,suggestion_for_educational_improvement,most_preferred_health_facility,health_distance,your_region_has_good_opportunities_in_health_facilities,suggestion_for_health_facilities_improvement,availablility_of_parks_playground_other_recreation_spaces,your_family_members_go_to_park_playground,how_regular,suggestion_for_recreation_space_improvement,grant_from_any_state_government_flagship_scheme,other_schemes })
        return database.promise().query(query)
    },
    async getSlumsDetails( { user_id,this_place_is_allotted_to_you_by_any_authority,status_of_land,is_there_patta,how_long_have_you_stayed_here,types_of_work_you_are_engaged,are_you_skilled_labour,skill_type,due_to_covid19_your_income_job_been_affected,get_any_ration_assistance_from_government,type_of_ration_card_you_avail,get_any_financial_assitance_from_government,get_any_benefits_from_any_state_central_housing_schemes,allotted_any_house_under_the_slum_rehabilitation_project,if_government_provides_house_you_move_to_that_place,get_any_benefits_of_swasthya_sathi,willing_to_go_back_to_native_if_suitable_jobs_made_available,life_in_slum_areas,kind_of_problem_do_you_face,face_any_problems_from_industries_around_you,whether_all_children_enrolled_in_school,student_gender,type_of_school,not_going_dropout_age,reason_of_dropout,alternative_economic_activities_for_livelihood,suggestion_for_improvement  }){
        let query;
        query=QueryGenerator.insert("user_slums",{ user_id,this_place_is_allotted_to_you_by_any_authority,status_of_land,is_there_patta,how_long_have_you_stayed_here,types_of_work_you_are_engaged,are_you_skilled_labour,skill_type,due_to_covid19_your_income_job_been_affected,get_any_ration_assistance_from_government,type_of_ration_card_you_avail,get_any_financial_assitance_from_government,get_any_benefits_from_any_state_central_housing_schemes,allotted_any_house_under_the_slum_rehabilitation_project,if_government_provides_house_you_move_to_that_place,get_any_benefits_of_swasthya_sathi,willing_to_go_back_to_native_if_suitable_jobs_made_available,life_in_slum_areas,kind_of_problem_do_you_face,face_any_problems_from_industries_around_you,whether_all_children_enrolled_in_school,student_gender,type_of_school,not_going_dropout_age,reason_of_dropout,alternative_economic_activities_for_livelihood,suggestion_for_improvement  })
        return database.promise().query(query)
    },
    /*async getSlumsDetails( { user_id,this_place_is_allotted_to_you_by_any_authority,status_of_land,is_there_patta,how_long_have_you_stayed_here,types_of_work_you_are_engaged,are_you_skilled_labour,skill_type,due_to_covid19_your_income_job_been_affected,get_any_ration_assistance_from_government,type_of_ration_card_you_avail,get_any_financial_assitance_from_government,get_any_benefits_from_any_state_central_housing_schemes,allotted_any_house_under_the_slum_rehabilitation_project,if_government_provides_house_you_move_to_that_place,get_any_benefits_of_swasthya_sathi,willing_to_go_back_to_native_if_suitable_jobs_made_available,life_in_slum_areas,kind_of_problem_do_you_face,face_any_problems_from_industries_around_you,suggestion_for_improvement  }){
        let query;
        query=QueryGenerator.insert("user_slums1",{ user_id,this_place_is_allotted_to_you_by_any_authority,status_of_land,is_there_patta,how_long_have_you_stayed_here,types_of_work_you_are_engaged,are_you_skilled_labour,skill_type,due_to_covid19_your_income_job_been_affected,get_any_ration_assistance_from_government,type_of_ration_card_you_avail,get_any_financial_assitance_from_government,get_any_benefits_from_any_state_central_housing_schemes,allotted_any_house_under_the_slum_rehabilitation_project,if_government_provides_house_you_move_to_that_place,get_any_benefits_of_swasthya_sathi,willing_to_go_back_to_native_if_suitable_jobs_made_available,life_in_slum_areas,kind_of_problem_do_you_face,face_any_problems_from_industries_around_you,suggestion_for_improvement  })
        return database.promise().query(query)
    },
    async getSlumsStudentDetails( { slums_id,whether_all_children_enrolled_in_school,student_gender,type_of_school,not_going_dropout_age,reason_of_dropout  }){
        let query;
        query=QueryGenerator.insert("user_slums_student",{ slums_id,whether_all_children_enrolled_in_school,student_gender,type_of_school,not_going_dropout_age,reason_of_dropout  })
        return database.promise().query(query)
    },
    async getSocialStudentDetails( { social_infrastructure_id,type_of_school_infrastructure_do_you_prefer,type_of_education_availability_distance,most_preferred_mode,your_region_has_good_opportunities_in_education_facilities,suggestion_for_educational_improvement  }){
        let query;
        query=QueryGenerator.insert("user_social_student",{ social_infrastructure_id,type_of_school_infrastructure_do_you_prefer,type_of_education_availability_distance,most_preferred_mode,your_region_has_good_opportunities_in_education_facilities,suggestion_for_educational_improvement  })
        return database.promise().query(query)
    },*/
    async getAllDetails(){
        //console.log(id);
        let query=`select*from user_family_details as u
        inner join user_household_profile as a on a.user_id=u.user_id
        inner join user_housing as b on b.user_id=u.user_id
        inner join user_economy_industries as c on c.user_id=u.user_id
        inner join user_transportation as d on d.user_id=u.user_id
        inner join user_physical_infrastructure as e on e.user_id=u.user_id
        inner join user_social_infrastructure as f on f.user_id=u.user_id
        inner join user_slums as g on g.user_id=u.user_id
        inner join user_coastal as h on h.user_id=u.user_id
        inner join user_environmental_related as i on i.user_id=u.user_id
        inner join user_cultural_heritage as j on j.user_id=u.user_id
        inner join user_tourism as k on k.user_id=u.user_id`;
        return database.promise().query(query);
    },
    async getLogin({user_name,password}){
        let query=`select*from admin_user where user_name='${user_name}' and password='${password}'`; 
        return database.promise().query(query);
    },
    async getFamily(){
        return database.promise().query(`select*from user_family_details`);
    }
}

module.exports=UserModel;