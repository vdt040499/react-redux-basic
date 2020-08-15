import PropTypes from 'prop-types';
import React from 'react';

import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onHobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onHobbyClick: null,
}

function HobbyList(props) {

    const { hobbyList, activeId, onHobbyClick } = props;    

    const handleClick = (hobby) => {
        console.log('click');
        if(onHobbyClick) {
            onHobbyClick(hobby);
        }
    }

    return (
        <div>
            <ul className="hobby-list">
                {hobbyList.map(hobby => (
                    <li 
                        key={hobby.id}
                        className={hobby.id === activeId ? 'active' : ''}
                        onClick={() => handleClick(hobby)}
                    >{hobby.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyList;