import React from 'react';
import {NavLink}from 'react-router-dom';

import {FilterLink} from '../containers/FilterLink';

export const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <ul className="sidebar__nav nav">
                <li className="nav__item">
                    <NavLink exact className="nav__link" to="/">Main</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink exact className="nav__link" to="/sources">Sources</NavLink>
                </li>
            </ul>
            <div className={props.pathname === "/" ? 'filters-container visible' : 'filters-container'}>
                <ul>
                    <li>
                        <FilterLink filter="SHOW_ALL">
                            Все
                        </FilterLink>
                    </li>
                    <li>
                        <FilterLink filter="SHOW_LIFE">
                            Жизнь
                        </FilterLink>
                    </li>
                    <li>
                        <FilterLink filter="SHOW_SOCIETY">
                            Общество
                        </FilterLink>
                    </li>
                    <li><FilterLink filter="SHOW_YELLOW">
                        Жёлтые
                    </FilterLink></li>

                </ul>
            </div>
        </div>
    )

}

