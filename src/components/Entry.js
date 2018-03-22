import React from 'react'
import PropTypes from 'prop-types'

const Entry = ({ onClick, completed, text, id, created, m_type, privacy}) => (
    <li
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text} {id} {created.getSeconds()} {m_type} {privacy}
    </li>
);

Entry.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created: PropTypes.object.isRequired,
    m_type: PropTypes.string.isRequired,
    privacy: PropTypes.string.isRequired
};

export default Entry