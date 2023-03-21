import Painting from './Painting';
import PropTypes from 'prop-types';


const PaintingList = ({paintings}) =>
    <ul>
        {paintings.map(({id, url, title, price, author, quantity}) => (//через map рендиремо всю колекцію
            <li key={id}> 
                
            <Painting url={url}
              alt={title}
              price={price}
              title={title}
              profileUrl={author.url}
              tag={author.tag}
              quantity={quantity} />
                
            </li>
        ))}
      </ul> 


PaintingList.propTypes = {  //вказуємо типи даних, які ми очікуємо з пропсів
  paintings: PropTypes.arrayOf( //вказуємо тип тільки для id, так як Painting вже робить перевірку типів в своєму файлі
    PropTypes.shape({
    id: PropTypes.string.isRequired
  })
).isRequired,
}

export default PaintingList;