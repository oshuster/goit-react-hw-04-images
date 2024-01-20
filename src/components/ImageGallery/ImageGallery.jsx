import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './imageGallery.module.css';

const ImageGallery = ({ data, showModal }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem data={data} showModal={showModal} />
    </ul>
  );
};

// class ImageGallery extends Component {
//   render() {
//     const { data, showModal } = this.props;
//     return (
//       <ul className={style.ImageGallery}>
//         <ImageGalleryItem data={data} showModal={showModal} />
//       </ul>
//     );
//   }
// }

export default ImageGallery;
