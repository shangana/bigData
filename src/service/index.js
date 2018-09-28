import Ax from '@/service/axios';

export default {
  fetchTable (reqData) {
    return Ax.get('/access_list', {params: reqData});
  },
  fetchCount (reqData) {
    return Ax.get('/reference_count', {params: reqData});
  },
  fetchReference (reqData) {
    return Ax.get('/reference', {params: reqData});
  },
  fetchCountAndReferene (reqData1, reqData2) {
    return Ax.all([this.fetchCount(reqData1), this.fetchReference(reqData2)]);
  },
  fetchDistrice (reqData) {
    return Ax.get('/reference_region', {params: reqData});
  },
};
