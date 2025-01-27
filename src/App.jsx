import React from 'react';
import ShipmentTab from './components/ShipmentTab';

// Sample shipment data
const sampleData = {
  
    "identifier": "OOLU2305845300",
    "identifier_type": "bill_of_lading_number",
    "transport_status": "IN_PROGRESS",
    "number_of_related_equipments": 2,
    "total_pages": 1,
    "current_page": 1,
    "containers": [
        {
            "equipment_reference": "CBHU4201900",
            "events": [
                {
                    "event_id": "4999476e-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Container Picked Up",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-17T08:46:00+00:00",
                    "event_datetime_locale": "2025-01-17T16:46:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "5941ef3d-da24-4584-858d-dd1d00fba24f",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "DEPOT_RELEASE_LOCATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_SHIPMENT",
                    "equipment_event_type_code": "GTOT",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "EMPTY"
                },
                {
                    "event_id": "49994e08-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Container Received by Carrier",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-19T04:51:00+00:00",
                    "event_datetime_locale": "2025-01-19T12:51:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "24bc42e4-09ec-4b65-b217-da23311e8ac3",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_OCEAN",
                    "equipment_event_type_code": "GTIN",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "49994a8e-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Arrived",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-19T04:51:00+00:00",
                    "event_datetime_locale": "2025-01-19T12:51:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "32ed1db4-ddf6-46cf-ba01-2f070c4cd335",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_OCEAN",
                    "equipment_event_type_code": "OTHR",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "499950d8-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Loaded",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T01:37:00+00:00",
                    "event_datetime_locale": "2025-01-23T09:37:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "3514b2d6-eb97-4010-974d-a27ce0f5c40f",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "LOAD",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "49995380-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Vessel Departed",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T04:40:00+00:00",
                    "event_datetime_locale": "2025-01-23T12:40:00+08:00",
                    "transport_event_type_code": "DEPA",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "82aa856d-8b03-48fa-b46d-b0deadd57246",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "4a723394-dc85-11ef-9cf8-827c0e7ea088",
                    "event_created_datetime": "2025-01-27T08:04:10+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Actual departure",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T05:17:49+00:00",
                    "event_datetime_locale": "2025-01-23T13:17:49+08:00",
                    "transport_event_type_code": "DEPA",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "905b2fb9-ffe6-4ec9-a2b8-036d5224f09e",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "AIS",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "49995880-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Carrier Released",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-24T09:02:00+00:00",
                    "event_datetime_locale": "2025-01-24T17:02:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "df9df424-064d-4065-a675-69895eded438",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "SGSIN",
                        "mode_of_transport": null,
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "OTHR",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "49993b70-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Arrival at Port of destination.",
                    "event_classifier_code": "EST",
                    "event_datetime": "2025-01-28T11:00:00+00:00",
                    "event_datetime_locale": "2025-01-28T19:00:00+08:00",
                    "transport_event_type_code": "ARRI",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "6a520644-a734-4fe4-ae74-deb9de488438",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "4ab1f466-dc85-11ef-87ea-9e284905069f",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Predicted arrival",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-01-28T11:00:00+00:00",
                    "event_datetime_locale": "2025-01-28T19:00:00+08:00",
                    "transport_event_type_code": "ARRI",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "76b7f96b-51b0-40ae-9be4-4e69392aa228",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "4a588552-8dbe-4754-bac2-61ea99993383",
                    "event_created_datetime": "2025-01-27T08:04:11+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Predicted discharge",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-01-28T23:15:00+00:00",
                    "event_datetime_locale": "2025-01-29T07:15:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "428f01a8-b144-45b3-a13a-649883da30d8",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "DISC",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "99e1fec7-31bb-4147-ba24-bf1f17b33c2a",
                    "event_created_datetime": "2025-01-27T08:04:11+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Predicted gateout",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-02-01T23:15:00+00:00",
                    "event_datetime_locale": "2025-02-02T07:15:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "d5525130-59da-4898-a17f-ad55a2352096",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "POST_OCEAN",
                    "equipment_event_type_code": "GTOT",
                    "equipment_reference": "CBHU4201900",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                }
            ]
        },
        {
            "equipment_reference": "CSLU1455861",
            "events": [
                {
                    "event_id": "499e87f6-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Container Picked Up",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-17T08:46:00+00:00",
                    "event_datetime_locale": "2025-01-17T16:46:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "4e92dfe7-2f12-4777-a00f-7cd64820568d",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "DEPOT_RELEASE_LOCATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_SHIPMENT",
                    "equipment_event_type_code": "GTOT",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "EMPTY"
                },
                {
                    "event_id": "499e8f44-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Arrived",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-19T04:51:00+00:00",
                    "event_datetime_locale": "2025-01-19T12:51:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "865a7e8b-46fb-4c73-a729-8879e8990b39",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_OCEAN",
                    "equipment_event_type_code": "OTHR",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "499e8be8-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Container Received by Carrier",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-19T04:51:00+00:00",
                    "event_datetime_locale": "2025-01-19T12:51:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "72ca2b66-37a6-4513-8fe5-6bc120cf22b6",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "PRE_OCEAN",
                    "equipment_event_type_code": "GTIN",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "499e921e-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Loaded",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T01:01:00+00:00",
                    "event_datetime_locale": "2025-01-23T09:01:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "0ecff4b9-af84-4d53-9713-8aa6224e21fb",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "LOAD",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "499e9502-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Vessel Departed",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T04:40:00+00:00",
                    "event_datetime_locale": "2025-01-23T12:40:00+08:00",
                    "transport_event_type_code": "DEPA",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "36de7ee1-9962-4831-a5f9-4084a47256c6",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "4c5d13b8-dc85-11ef-9cf8-827c0e7ea088",
                    "event_created_datetime": "2025-01-27T08:04:14+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Actual departure",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-23T05:17:49+00:00",
                    "event_datetime_locale": "2025-01-23T13:17:49+08:00",
                    "transport_event_type_code": "DEPA",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "584f95db-d926-40a6-90d5-e0272c368a7d",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "CNNBG",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "CNNBG",
                            "location_name": "NINGBO PT",
                            "country": "CN",
                            "timezone": "Asia/Shanghai",
                            "latitude": "29.93181292702305",
                            "longitude": "121.8945316800048"
                        },
                        "transport_call_type": "PORT_OF_LOADING",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "AIS",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "499e97fa-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Carrier Released",
                    "event_classifier_code": "ACT",
                    "event_datetime": "2025-01-24T09:02:00+00:00",
                    "event_datetime_locale": "2025-01-24T17:02:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "f14e2b36-b50c-48f6-9e9d-df927625e262",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "SGSIN",
                        "mode_of_transport": null,
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "OTHR",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "499e7bf8-dc85-11ef-8728-ee0cd36d962b",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Arrival at Port of destination.",
                    "event_classifier_code": "EST",
                    "event_datetime": "2025-01-28T11:00:00+00:00",
                    "event_datetime_locale": "2025-01-28T19:00:00+08:00",
                    "transport_event_type_code": "ARRI",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "bd2bc791-d8d6-4ae4-872e-8ba5cb737aab",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "CARRIER",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "4c6bee24-dc85-11ef-81f3-de62ae1485dd",
                    "event_created_datetime": "2025-01-27T08:04:09+00:00",
                    "event_type": "TRANSPORT",
                    "event_description": "Predicted arrival",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-01-28T11:00:00+00:00",
                    "event_datetime_locale": "2025-01-28T19:00:00+08:00",
                    "transport_event_type_code": "ARRI",
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "d6999b2b-1522-44b1-a733-4f748651c7b8",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": null,
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": null,
                    "empty_indicator_code": null
                },
                {
                    "event_id": "3fcca139-4a14-494b-807e-05c958a12d28",
                    "event_created_datetime": "2025-01-27T08:04:14+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Predicted discharge",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-01-28T23:15:00+00:00",
                    "event_datetime_locale": "2025-01-29T07:15:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "4eb407b5-bfb1-41b4-bdf6-afb870da567f",
                        "carrier_service_code": null,
                        "carrier_voyage_number": "115S",
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "VESSEL",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": 9304784,
                            "vessel_name": "XIN QIN HUANG DAO",
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "OCEAN",
                    "equipment_event_type_code": "DISC",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                },
                {
                    "event_id": "2b0320a5-a70c-4903-9c43-b063c3f0f3e0",
                    "event_created_datetime": "2025-01-27T08:04:14+00:00",
                    "event_type": "EQUIPMENT",
                    "event_description": "Predicted gateout",
                    "event_classifier_code": "PRE",
                    "event_datetime": "2025-02-01T23:15:00+00:00",
                    "event_datetime_locale": "2025-02-02T07:15:00+08:00",
                    "transport_event_type_code": null,
                    "delay_reason_code": null,
                    "change_remark": null,
                    "transport_call": {
                        "transport_call_id": "ddb12c73-e7ea-4e97-9b3e-a6750536463e",
                        "carrier_service_code": null,
                        "carrier_voyage_number": null,
                        "un_location_code": "SGSIN",
                        "mode_of_transport": "TRUCK",
                        "location": {
                            "locode": "SGSIN",
                            "location_name": "SINGAPORE",
                            "country": "SG",
                            "timezone": "Asia/Singapore",
                            "latitude": "1.288829563796469",
                            "longitude": "103.7417110344056"
                        },
                        "transport_call_type": "PORT_OF_DESTINATION",
                        "vessel": {
                            "vessel_imo_number": null,
                            "vessel_name": null,
                            "vessel_operator_carrier_code": "OOLU",
                            "vessel_operator_carrier_code_list_provider": "SCAC"
                        }
                    },
                    "transport_id": "OOLU2305845300",
                    "transport_name": "China to Singapore",
                    "source_type": "GATEHOUSE",
                    "leg_number": "1/1",
                    "leg_type": "POST_OCEAN",
                    "equipment_event_type_code": "GTOT",
                    "equipment_reference": "CSLU1455861",
                    "bill_of_lading_number": "OOLU2305845300",
                    "carrier_booking_reference": null,
                    "iso_equipment_code": "22GP",
                    "empty_indicator_code": "LADEN"
                }
            ]
        }
    ]

};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Shipment Tracking Demo
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ShipmentTab shipmentData={sampleData} />
        </div>
      </div>
    </div>
  );
}

export default App;
