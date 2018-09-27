import Ax from '@/service/axios';
import qs from 'qs';

export default {
  fetchBlog (reqData) {
    return Ax.get('/krryblog/blog/getBlog', {params: reqData});
  },
};
