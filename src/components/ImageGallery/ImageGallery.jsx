import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './imageGallery.module.css';

export const ImageGallery = ({ data, showModal }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem data={data} showModal={showModal} />
    </ul>
  );
};
