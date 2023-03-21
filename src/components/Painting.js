import defaultImg from "./default-image.jpg";//імпортуємо зображення
import PropTypes from "prop-types";


const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (//деструктуризація пропсів, приходять з місця де рендеряться
        <div>
            <img src={url} alt={title} width="480" />
            <h2>{title}</h2>
            <p>Author: <a href={profileUrl}>{tag}</a></p>
        <p>Price: {price}</p>
        <p>Доступність: {quantity < 10 ? 'Доступо' : 'Закінчується'}</p>
            <button type="button">Добавити в корзину</button>
        </div>
    )

Painting.defaultProps = {//вказуємо дефолтні пропси, як правило для картинок
    url: defaultImg
}

Painting.propTypes = { //вказуємо типи даних, які ми очікуємо з пропсів
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default Painting