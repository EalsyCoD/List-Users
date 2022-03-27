import React from 'react';
import styled from './SideBar.module.scss'

const SideBar = () => {
    return (
        <div className={styled.container}>
            <h1 className={styled.title}>
                Сортировка
            </h1>
            <div className={styled.btns}>
            <button className={styled.city}><span className={styled.text}>по городу</span></button>
            <button className={styled.company}><span className={styled.text1}>по компании</span></button>
            </div>
        </div>
    );
}

export default SideBar;