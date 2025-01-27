import { Stack, Box, Typography, Grid2 as Grid, Stepper, Step, StepLabel } from '@mui/material';
import ShipmentBgImg from '../../assets/images/page-header-shipment-list.png';
import { useNavigate } from 'react-router';
import {
  Airlines,
  AlarmOn,
  ArrowBack,
  CalendarToday,
  CheckCircle,
  DirectionsBoat,
  ErrorOutline,
  Event,
  Flight,
  History,
  Place,
  Schedule,
  TripOrigin,
  WhereToVote,
} from '@mui/icons-material';
import DetailSection from './components/DetailSection';
import DocumentSection from './components/DocumentSection';
import ContainerCargo from './components/ContainerCargo';
import { ShipmentOcean, ShipmentAir } from '../../helpers/Icons';
import ShipmentActivities from './components/ShipmentActivitySection';
import { ShipmentDetailContext } from './ShipmentDetailContext';
import { MiscIcon, TransshipmentIcon, TruckIcon, WarehouseIcon } from '@fr8labs/root-app/src/helpers/Icons';
import { compareDate, ISODateToLuxon } from '../../helpers/Utils';
import { CustomTooltip } from '@fr8labs/core-package';
import { DateTime } from 'luxon';
import { useMemo, useEffect, useContext } from 'react';
import FR8ConfirmProvider from '@fr8labs/root-app/src/components/fr8-confirm/FR8ConfirmProvider';
import { FormProvider } from 'react-hook-form';
import { BlStatus } from '@fr8labs/root-app/src/helpers/Enums';
import Loading from '../../components/Loading';
import ShipmentTab from '../components/ShipmentTab';

const activities = [
  {
    description: ``,
    subTitle: '',
    title: '5 Past Events',
  },
  {
    description:
      'Seat our churning calculator going baseline obviously feed got so. Teams that shower beef indicators dive picture previous seems shark.',
    subTitle: 'Waiting to depart from Port of Loading',
    title: '--',
  },
  {
    description: ``,
    subTitle: '',
    title: '6 Upcoming Events',
  },
];

const IconHeader = ({ value, direction }) => {
  let Icon = ShipmentOcean;
  if (value === 'Air') Icon = ShipmentAir;
  if (value === 'Transshipment') Icon = TransshipmentIcon;
  if (value === 'Truck') Icon = TruckIcon;
  if (value === 'Warehouse') Icon = WarehouseIcon;
  if (value === 'Misc') Icon = MiscIcon;
  return (
    <Stack justifyContent="center" sx={{ height: '40px' }}>
      <Icon />
    </Stack>
  );
};

const ShipmentDetail = ({ activeStep = 0 }) => {
  const navigate = useNavigate();
  const store = useContext(ShipmentDetailContext);
  const {
    shipmentDetail: detail,
    mainRoutings,
    routings,
    getSeaRoute,
    changeEvent,
    eventList,
    tasklistDetail,
    refetchDetail,
    isPreviewDetail,
  } = store;

  const diffDays = useMemo(() => {
    const diffObj = DateTime.fromISO(new Date().toISOString())
      ?.setZone('system')
      .diff(
        DateTime.fromISO(
          tasklistDetail?.userTasklist?.todayEvent?.[0]?.updatedAt ||
            tasklistDetail?.userTasklist?.todayEvent?.[0]?.createdAt
        )?.setZone('system'),
        ['years', 'months', 'days', 'hours', 'minutes', 'milliseconds']
      )
      .toObject();
    const arrDiff = Object.entries(diffObj).filter((item) => item?.[1] > 0 && item?.[0] !== 'milliseconds');

    let result = '';
    arrDiff?.reverse().forEach((item) => {
      result = item?.[1] + ' ' + item?.[0] + ' ' + result;
    });
    return result;
  }, [tasklistDetail?.userTasklist?.todayEvent]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDeparture = useMemo(() => {
    return DateTime.fromISO(new Date().toISOString()) > DateTime.fromISO(routings?.[0].etd);
  }, [routings]);

  const isArrival = useMemo(() => {
    return DateTime.fromISO(new Date().toISOString()) >= DateTime.fromISO(routings?.[routings?.length - 1].etd);
  }, [routings]);

  const IconBlStatus = useMemo(() => {
    if (detail?.hblStatus === BlStatus.POTENTIAL_DELAY) {
      return {
        color: '#CE7108',
        icon: <ErrorOutline sx={{ color: '#FFFFFF', fontSize: 20 }} />,
      };
    } else if (detail?.hblStatus === BlStatus.DELAYED) {
      return {
        color: '#D13F31',
        icon: <ErrorOutline sx={{ color: '#FFFFFF', fontSize: 20 }} />,
      };
    } else if (detail?.hblStatus === BlStatus.DELIVERED) {
      return {
        color: 'primary.700',
        icon: <CheckCircle sx={{ color: '#FFFFFF', fontSize: 20 }} />,
      };
    }

    return {
      color: 'primary.700',
      icon: <AlarmOn sx={{ color: '#FFFFFF', fontSize: 20 }} />,
    };
  }, [detail?.hblStatus]);

  // Sample data for the timeline
  const sampleData = {
    identifier: "OIFCL2501012",
    containers: [{
      events: [
        {
          event_id: "1",
          event_type: "TRANSPORT",
          event_classifier_code: "ACT",
          event_datetime: "2025-01-25T10:00:00Z",
          event_description: "Vessel Departed",
          transport_call: {
            location: {
              location_name: "Port of SENDGOD",
              country: "SG"
            },
            vessel: {
              vessel_name: "EVER GIVEN",
              carrier_voyage_number: "VOY001"
            }
          }
        },
        {
          event_id: "2",
          event_type: "EQUIPMENT",
          event_classifier_code: "EST",
          event_datetime: "2025-01-27T14:00:00Z",
          event_description: "Estimated Arrival",
          transport_call: {
            location: {
              location_name: "Port of SINGAPORE",
              country: "SG"
            }
          },
          equipment_reference: "CONT123456"
        }
      ]
    }]
  };

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.default' }}>
      <FR8ConfirmProvider value={store.confirmStore}>
        <FormProvider {...store.methods}>
          <Loading
            open={
              store?.isLoading ||
              store?.isFetchingDetail ||
              store?.isFetchingDataBooking ||
              store?.isFetchingSetupDataDetails ||
              store?.isFetchingTenantInsuranceBooking
            }
          />
          <Stack
            direction="column"
            sx={{
              bgcolor: '#F7FAFD',
              overflow: 'auto',
              pb: 2,
              width: '100%',
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${ShipmentBgImg})`,
                backgroundSize: 'cover',
                height: '186px',
                overflow: 'auto',
                width: '100%',
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ height: '100%', pt: 3, px: 4, width: '100%' }}
              >
                <Stack direction="column" spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconHeader
                      value={detail?.shipment?.shipmentType?.shipmentTypeName}
                      direction={detail?.shipment?.shipmentDirection}
                    />
                    <Typography
                      color="neutral.greyScale04"
                      sx={{ textTransform: 'capitalize' }}
                    >{`${detail?.shipment?.shipmentType?.shipmentTypeName} ${detail?.shipment?.shipmentDirection} Shipment`}</Typography>
                    <Typography color="neutral.greyScale04">•</Typography>
                    <Typography color="neutral.greyScale04">{detail?.shipmentMode?.shipmentModeName}</Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="center" width="100%">
                    {!isPreviewDetail && (
                      <ArrowBack
                        sx={{ color: 'neutral.greyScale03', cursor: 'pointer', fontSize: 30 }}
                        onClick={() => navigate('/home')}
                      />
                    )}
                    <Typography color="white" sx={{ fontSize: 28, fontWeight: 600 }}>
                      {detail?.shipment?.shipmentNo}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Box bgcolor="#023C9B" px={3} pt={1} pb={2} borderRadius={1}>
                    <Typography color="white">Estimated Arrival</Typography>
                  </Box>
                  <Box bgcolor="white" mt={-1} px={2} py={1} borderRadius={1}>
                    <Stack direction="row" spacing={2} justifyContent="center">
                      <Stack alignItems="center" spacing={0.5}>
                        <Event sx={{ color: 'neutral.greyScale02', fontSize: 16 }} />
                        <Typography variant="body2" color="neutral.greyScale02">
                          {routings[routings?.length - 1]?.etd
                            ? ISODateToLuxon(routings[routings?.length - 1]?.etd)
                                .setZone('system')
                                .toFormat('MMM')
                            : '--'}
                        </Typography>
                      </Stack>
                      <Typography variant="h1" color="text.main" sx={{ fontSize: 36 }}>
                        {routings[routings?.length - 1]?.etd
                          ? ISODateToLuxon(routings[routings?.length - 1]?.etd)
                              .setZone('system')
                              .toFormat('dd')
                          : '--'}
                      </Typography>
                      <Stack alignItems="center" spacing={0.5}>
                        <Schedule sx={{ color: 'neutral.greyScale02', fontSize: 16 }} />
                        <Typography variant="body2" color="neutral.greyScale02">
                          {routings[routings?.length - 1]?.etd
                            ? ISODateToLuxon(routings[routings?.length - 1]?.etd)
                                .setZone('system')
                                .toFormat('hh:mm')
                            : '--'}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ px: 4 }}>
              <Stack mt={-6} mb={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  bgcolor={IconBlStatus?.color || '#023C9B'}
                  px={2}
                  pt={1}
                  pb={2.5}
                  borderRadius={1}
                >
                  <Stack direction="row" gap={2} alignItems="center">
                    {IconBlStatus?.icon}
                    <Typography
                      variant="h3"
                      color="neutral.lighterGrey"
                      sx={{ minWidth: 100, textTransform: 'capitalize' }}
                    >
                      {detail?.hblStatus?.split('_')?.join(' ')?.toLowerCase()}
                    </Typography>
                    {detail?.hblStatusNote && (
                      <Typography color="neutral.greyScale04" sx={{}}>
                        •
                      </Typography>
                    )}
                    <Typography color="#FFFFFF">{detail?.hblStatusNote}</Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  bgcolor="#FFFFFF"
                  px={2}
                  pt={1.5}
                  pb={2}
                  borderBottom="1px solid #E3EAF1"
                  mt={'-14px'}
                  sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TripOrigin sx={{ fontSize: 16 }} />
                    <Typography>
                      {DateTime.fromISO(new Date().toISOString()) >=
                      DateTime.fromISO(routings?.[routings?.length - 1].ata)
                        ? 'Delivered'
                        : `Current Activity: ${tasklistDetail?.userTasklist?.todayEvent?.[0]?.title || '--'}`}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <History sx={{ fontSize: 18 }} />
                    <Typography variant="body2">
                      {DateTime.fromISO(new Date().toISOString()) >=
                      DateTime.fromISO(routings?.[routings?.length - 1].ata)
                        ? ISODateToLuxon(routings?.[routings?.length - 1].ata)
                            .setZone('system')
                            .toFormat('dd MMMM yyyy')
                        : `Last updated: ${diffDays ? `${diffDays} ago` : '--'}`}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack bgcolor="white" px={1} py={1.5} borderRadius={1}>
                  <Stepper alternativeLabel nonLinear activeStep={1} sx={{ mb: 2, width: '100%' }}>
                    {routings.map((routing, index) => (
                      <Step
                        onClick={() => changeEvent(routing)}
                        key={`shipment-step-${index}`}
                        sx={{
                          '&&&': {
                            '& .MuiStepConnector-line': {
                              borderColor: isArrival ? '#023C9B' : compareDate(routing?.etd) ? '#023C9B' : '#E3EAF1',
                              borderRadius: '2px',
                              borderTopWidth: '4px',
                              width: routings?.length > 2 || isArrival ? '100%' : '50%',
                            },
                            '& .MuiStepConnector-root': {
                              bgcolor: '#E3EAF1',
                              borderColor: '#E3EAF1',
                              borderRadius: '2px',
                              borderStyle: 'solid',
                              borderWidth: '1px',
                              left:
                                index === 1
                                  ? index === routings?.length - 1
                                    ? 'calc(-95% + 20px)'
                                    : routings?.length === 4
                                      ? 'calc(-90% + 20px)'
                                      : 'calc(-86% + 20px)'
                                  : 'calc(-50% + 20px)',
                              right:
                                index === routings?.length - 1
                                  ? index === 1
                                    ? 'calc(12% - 20px)'
                                    : routings?.length === 4
                                      ? 'calc(27% - 20px)'
                                      : 'calc(38% - 20px)'
                                  : 'calc(50% + 20px)',
                              top: 22,
                            },
                            '& .MuiStepLabel-alternativeLabel': { mt: 0, pt: 1 },
                            '& .MuiTypography-root': {
                              textAlign: index === 0 ? 'left' : index === routings?.length - 1 ? 'right' : 'center',
                            },
                          },
                        }}
                      >
                        {index === 0 || index === routings?.length - 1 ? (
                          <StepLabel
                            icon={index === 0 ? <Place /> : <WhereToVote />}
                            sx={{
                              '&&&': {
                                alignItems:
                                  index === 0 ? 'flex-start' : index === routings.length - 1 ? 'flex-end' : 'center',
                              },
                              color: 'primary.700',
                            }}
                          >
                            <Typography sx={{ color: 'neutral.greyScale02' }}>
                              {index === routings.length - 1 ? 'Destination' : 'Origin'}
                            </Typography>
                            <Typography fontWeight="bold">{`Port of ${[routing?.name, routing?.city]?.filter((item) => item)?.join(', ')}`}</Typography>
                            <Typography sx={{ color: 'neutral.greyScale02' }}>
                              {`${index === routings.length - 1 ? 'ETA' : 'ETD'}: ${
                                routing?.etd
                                  ? ISODateToLuxon(routing?.etd).setZone('system').toFormat('dd/MMM/yyyy')
                                  : '--'
                              }`}
                            </Typography>
                          </StepLabel>
                        ) : (
                          <CustomTooltip
                            arrow
                            placement="top"
                            title={
                              <Stack p={1} spacing={1}>
                                <Stack direction="row" spacing={1} alignItems="center" color="neutral.greyScale02">
                                  {mainRoutings?.shipment?.shipmentType?.shipmentTypeName === 'Air' ? (
                                    <Flight sx={{ fontSize: 20 }} />
                                  ) : (
                                    <DirectionsBoat sx={{ fontSize: 20 }} />
                                  )}
                                  <Typography color="white">
                                    {[routing?.name, routing?.city]?.filter((item) => item)?.join(', ')}
                                  </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center" color="neutral.greyScale02">
                                  <Airlines sx={{ fontSize: 20 }} />
                                  <Typography color="neutral.greyScale03">
                                    {routing?.vessel?.vesselName || '-'}
                                  </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center" color="neutral.greyScale02">
                                  <CalendarToday sx={{ fontSize: 20 }} />
                                  <Typography color="neutral.greyScale03">
                                    {routing?.etd
                                      ? ISODateToLuxon(routing?.etd).setZone('system').toFormat('dd/MMM/yyyy')
                                      : '-'}
                                  </Typography>
                                </Stack>
                              </Stack>
                            }
                          >
                            <StepLabel
                              icon={
                                <Box
                                  sx={{
                                    backgroundColor: isArrival
                                      ? '#023C9B'
                                      : compareDate(routing?.etd)
                                        ? '#023C9B'
                                        : '#E3EAF1',
                                    borderRadius: 4,
                                    height: 14,
                                    left: 0,
                                    width: 14,
                                  }}
                                />
                              }
                              sx={{
                                '&&&': {
                                  alignItems:
                                    index === 0
                                      ? 'flex-start'
                                      : index === routings?.length - 1
                                        ? 'flex-end'
                                        : 'center',
                                },
                              }}
                            />
                          </CustomTooltip>
                        )}
                      </Step>
                    ))}
                  </Stepper>
                </Stack>
              </Stack>
              <Grid container>
                <Grid container height="100%" size={8.8}>
                  <Grid size={12}>
                    <DetailSection detail={detail} />
                  </Grid>
                  <Grid mt={4} size={12}>
                    <ContainerCargo detail={detail} getSeaRoute={getSeaRoute} />
                  </Grid>
                  <Grid mt={4} size={12}>
                    <DocumentSection detail={detail} refetchDetail={refetchDetail} />
                  </Grid>
                </Grid>
                <Grid size={0.2} />
                <Grid size={3}>
                  <Box sx={{ 
                    bgcolor: 'background.paper', 
                    borderRadius: 1,
                    boxShadow: 1,
                    height: '100%',
                    overflow: 'auto'
                  }}>
                    <ShipmentTab shipmentData={sampleData} />
                  </Box>
                  <ShipmentActivities
                    detail={detail}
                    activities={eventList}
                    shipmentType={detail?.shipment?.shipmentType?.shipmentTypeName}
                    mapsData={routings}
                    getSeaRoute={getSeaRoute}
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </FormProvider>
      </FR8ConfirmProvider>
    </Box>
  );
};

export default ShipmentDetail;
