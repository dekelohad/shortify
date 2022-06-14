import API from '../../utils/API';

const shortifyUrl = async (fullUrl, shortUrl) => {
  try {
    const response = await API.post(`/urls`, { fullUrl, shortUrl });
    return response.data;
  } catch (error) {
    return error;
  }
};
const deleteUrl = async (shortUrl) => {
  const response = await API.delete(`/urls/${shortUrl}`);
  return response.data;
};

const getUrls = async () => {
  const response = await API.get(`/urls`);
  return response.data;
};

const getUrl = async (shortUrl) => {
  const res = await API.get(`/urls/${shortUrl}`);
  return res.data;
};

const urlShorterService = {
  shortifyUrl,
  deleteUrl,
  getUrls,
  getUrl,
};

export default urlShorterService;
