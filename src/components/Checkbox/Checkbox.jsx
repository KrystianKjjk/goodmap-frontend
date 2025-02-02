import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ name, translation, categoryName, onClick }) => (
    <div className="form-check" onClick={onClick}>
        <label htmlFor={name}>
            {translation}
            <input
                className={`form-check-input filter ${categoryName}`}
                type="checkbox"
                id={name}
                value={name}
            />
        </label>
    </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
