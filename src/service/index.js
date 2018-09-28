import Ax from '@/service/axios';

export default {
  fetchTable (reqData) {
    return Ax.get('/access_list', {params: reqData});
  },
};
