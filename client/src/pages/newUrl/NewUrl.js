import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { shortifyUrl } from '../../features/urlShorter/UrlShorterSlice';
import { selectIsLoading } from '../../features/urlShorter/UrlShorterSelectors';
import { Loader } from '../../components';
import { FormUrlSection } from './components';
import { checkIsValidUrl } from '../../utils/stringUtils';

const NewUrl = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [fullUrl, setFullUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const urlWithoutSpaces = fullUrl && fullUrl.trim();

  const handleSubmit = async () => {
    const urlWithoutSpaces = fullUrl.trim();
    const validUrl = checkIsValidUrl(urlWithoutSpaces);
    if (!validUrl) {
      toast.error('Invalid URL please try again', {
        position: 'top-right',
      });
      setFullUrl('');
      return;
    } else {
      setShortUrl(nanoid(5));
      setFullUrl(validUrl);
    }
    toast.success('The URL was Shorify successfully', {
      position: 'top-right',
    });
  };

  const handleSave = async () => {
    try {
      const result = dispatch(
        shortifyUrl({ fullUrl: urlWithoutSpaces, shortUrl })
      );
      if (result) {
        toast.success('The URL was created successfully', {
          position: 'top-right',
        });
      } else {
        toast.error('The URL could not be saved', {
          position: 'top-right',
        });
      }
    } catch (err) {
      console.log('error', err);
    } finally {
      setFullUrl('');
      setShortUrl('');
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <FormUrlSection
        title="URL"
        buttonText="Shorify"
        onClick={handleSubmit}
        isButtonDisabled={!fullUrl}
        inputValue={fullUrl}
        onChange={(e) => setFullUrl(e.target.value)}
      />
      <FormUrlSection
        title="Result"
        buttonText="Save"
        onClick={handleSave}
        isButtonDisabled={!shortUrl}
        isInputDisabled
        inputValue={shortUrl}
      />
    </div>
  );
};

export default NewUrl;
