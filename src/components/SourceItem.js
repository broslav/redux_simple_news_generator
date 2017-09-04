import React from 'react';



export const SourceItem = (props) => {

    return (
        <li className={(props.disabledSources.indexOf(props.id) === -1) ? "source__item source" : "source__item source hidden"}>
            <a className="source__link" href={`//${props.domain}`} target="_blank">
                <div className="source__logo-holder">
                    <img src={props.logo_url} alt="" className="item__logo"/>
                </div>
                <div className="source__name">{props.name}</div>
            </a>
            <button className="source__toggle"  onClick={() => props.onClick(props.id)}>Вкл/Выкл</button>
        </li>
    )
};
