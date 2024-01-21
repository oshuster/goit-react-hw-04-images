import { useEffect, useState } from 'react';
import { getPost } from 'components/api/fetchPictures';
import { Notify } from 'notiflix/build/notiflix-aio';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import style from './app.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [largeImg, setLargeImg] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getSearchKey = searchKey => {
    const query = searchKey.trim().replace(/ /g, '+');
    setQuery(query);
    setSearchData([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const response = await getPost(query, page);
        if (response.data.totalHits === 0) {
          Notify.info(`По даному запиту нічого не знайдено`);
        }
        setSearchData(prevData => [...prevData, ...response.data.hits]);
        setShowBtn(page < Math.ceil(response.data.totalHits / 12));
      } catch (error) {
        setErrorMessage(error.message);
        Notify.failure(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page, errorMessage]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const showModal = (img, alt) => {
    setLargeImg({ img, alt });
    setModalOpen(true);
  };

  const changeStateModal = () => {
    setModalOpen(false);
  };

  const isPosts = Boolean(searchData.length);

  return (
    <div className={style.App}>
      <Searchbar getSearchKey={getSearchKey} />
      {isPosts && <ImageGallery data={searchData} showModal={showModal} />}
      {modalOpen && (
        <Modal changeStateModal={changeStateModal} largeImg={largeImg} />
      )}

      {isLoading && <Loader />}
      {showBtn && (
        <Button title="Load more" type="button" loadMore={loadMore} />
      )}
    </div>
  );
};
