import style from './imageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const content = props.data.map(
    ({ id, largeImageURL, webformatURL, tags }) => (
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
    )
  );
  return content;
};

export default ImageGalleryItem;
