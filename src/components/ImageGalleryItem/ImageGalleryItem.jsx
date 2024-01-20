import style from './imageGalleryItem.module.css';

export const ImageGalleryItem = props => {
  return props.data.map(({ id, largeImageURL, webformatURL, tags }) => (
    <li
      key={id}
      className={style.ImageGalleryItem}
      onClick={() => props.showModal(largeImageURL, tags)}
    >
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem_image}
      />
    </li>
  ));
};
