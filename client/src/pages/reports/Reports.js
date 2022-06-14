import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { tableRows } from './data';
import { getUrls, deleteUrl } from '../../features/urlShorter/UrlShorterSlice';
import {
  selectUrlList,
  selectIsLoading,
} from '../../features/urlShorter/UrlShorterSelectors';
import { Table } from './components';
import { Loader } from '../../components';
import './Reports.css';

const Reports = () => {
  const isLoading = useSelector(selectIsLoading);
  const urlList = useSelector(selectUrlList);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetUrls = async () => {
      try {
        await dispatch(getUrls());
      } catch (err) {
        console.log('error occured reports', err);
      }
    };
    handleGetUrls();
  }, [dispatch]);

  const handleDeleteUrl = async (shortUrl) => {
    const deletedUrl = await dispatch(deleteUrl(shortUrl));

    if (deletedUrl.payload) {
      toast.success('The URL was deleted successfully', {
        position: 'top-left',
      });
    } else {
      toast.error('The URL could not be deleted', {
        position: 'top-left',
      });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="reports">
      {urlList.length > 0 ? (
        <Table tableData={urlList} action={handleDeleteUrl} rows={tableRows} />
      ) : (
        <div className="container">
          <p className="container__text">Your URL list is empty..</p>
        </div>
      )}
    </div>
  );
};

export default Reports;
