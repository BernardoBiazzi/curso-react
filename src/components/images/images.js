/* eslint-disable jsx-a11y/alt-text */
import image from '../../assets/img1.jpg';
import './images.css';

const ImageComponent = () => {
    return (
        <div>
            <img src={image} />
        </div>
    );
}

export default ImageComponent;