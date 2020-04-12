import React from 'react';
import Search from '../Search/Search';
import home from '../../assets/home.svg';
import './Header.scss';

interface IProps {
    history: {
        push: Function,
        location: {
            pathname: string
        }
    }
}

const Header = (props: IProps) => {

    const goToHome = () => {
        props.history.push('/');
    }

    return (
        <div className="header_wrapper">
            {props.history.location.pathname === '/' ?
                <Search></Search>
                : <label className="heading">Movie Details</label>}
            <img className="home-icon" src={home} alt="home" onClick={goToHome}></img>
        </div>
    )
}

export default Header;