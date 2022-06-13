import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ list, onDeleteClick }) => {
  return (
    <ul className={s.listContainer}>
      {list.map(({ name, number, id }) => (
        <li className={s.listItem} key={name}>
          <p className={s.listText}>
            {name}: {number}
          </p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteClick(id, name)}
          ></button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactList;
