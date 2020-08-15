import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import casual from 'casual-browserify';

import HobbyList from '../components/Home/HobbyList/index';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    const handleAddHobbyClick = () => {
        //Random a hobby object: id +  title
        const newHobby = {
            id: casual.uuid,
            title: casual.title,
        }

        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);

    }

    const handleHobbyClick = (hobby) => {
        console.log(hobby);
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div>
            <h1>HOME REDUX - Home Page</h1>
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;