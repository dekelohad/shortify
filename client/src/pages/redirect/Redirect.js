import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getUrl } from '../../features/urlShorter/UrlShorterSlice';

const Redirect = () => {
  let { shortUrl } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetUrl = async () => {
      const response = await dispatch(getUrl(shortUrl));

      const redirectUrl = response.payload.urlToRedirect;

      if (redirectUrl) {
        toast.success(`Redirect succesffully to: ${redirectUrl}`, {
          position: 'top-right',
        });
      } else {
        toast.error(`Redirect failed`, {
          position: 'top-right',
        });
      }

      const timerId = setTimeout(() => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        } else {
          navigate('404page');
        }
      }, 3000);

      return () => {
        clearTimeout(timerId);
      };
    };
    handleGetUrl();
  }, [dispatch, shortUrl, navigate]);

  return <></>;
};

export default Redirect;
