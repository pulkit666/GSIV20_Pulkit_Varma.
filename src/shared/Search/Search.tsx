import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Search.scss';
import search from '../../assets/search.png';
import * as actionTypes from '../Store/types';

interface IProps {
    setFilter: Function;
}

const Search = (props: IProps) => {

    const [searchText, setSearchText] = useState('');

    const handleChange = (e: { target: { value: string } }) => {

        setSearchText(e.target.value);

        if (e.target.value === '')
            props.setFilter('all')
        else
            props.setFilter(e.target.value);
    }

    return (
        <span>
            <input
                className="search-style"
                placeholder="Search"
                type="search"
                onChange={e => {
                    handleChange(e);
                }}

                autoComplete="off"
                id="searchBox"
                value={searchText}
            />
            <img className="search-icon" src={search} alt="search"></img>
        </span>
    )
}


export const mapDispatchToProps = (dispatch: Function) => {
    return {
        setFilter: (value: string) => {
            dispatch({
                type: actionTypes.SET_FILTER_TYPE,
                payload: value
            })
        },
    }
}

export default connect(null, mapDispatchToProps)(Search);