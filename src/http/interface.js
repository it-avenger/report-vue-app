import axios from './api';

export const searchUserID = params => axios({
  url: '/User',
  method: 'get',
  params,
});

export const monthScheduleTable = params => axios({
  url: '/MonthlyPlan',
  method: 'get',
  params,
});

export const monthMainAndScheduleSub = params => axios({
  url: '/MonthlyPlan',
  method: 'post',
  data: params,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
});

export const queryAndAddedUserInfo = params => axios({
  url: '/Organization',
  method: 'get',
  params,
});

export const queryAndAddedQuery = params => axios({
  url: '/Review',
  method: 'get',
  params,
});

export const yearLoadingData = params => axios({
  url: '/Subject',
  method: 'get',
  params,
});

export const yearDataSubmission = params => axios({
  url: '/Subject',
  method: 'POST',
  data: params,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
});

export const yearUploadFile = params => axios({
  url: '/ImportExcel',
  method: 'POST',
  data: params,
});

export const monthOperatingAdd = params => axios({
  url: '/Customer',
  method: 'get',
  params,
});

export const monthQueryAndAdd = params => axios({
  url: '/MonthReview',
  method: 'get',
  params,
});

export const monthTransactionCase = params => axios({
  url: '/Matching',
  method: 'POST',
  data: params,
});

export const monthMissionList = params => axios({
  url: '/TaskForm',
  method: 'GET',
  params,
});

export const summaryData = params => axios({
  url: '/SummaryData',
  method: 'POST',
  data: params,
});

export default {
  searchUserID,
  monthScheduleTable,
  queryAndAddedUserInfo,
  queryAndAddedQuery,
  yearLoadingData,
  yearDataSubmission,
  yearUploadFile,
  monthMainAndScheduleSub,
  monthOperatingAdd,
  monthQueryAndAdd,
  monthTransactionCase,
  monthMissionList,
  summaryData,
};
