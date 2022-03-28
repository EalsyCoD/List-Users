import React from 'react';
import styled from './SideBar.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const SideBar = () => {
    const dispatch = useDispatch()

    return (
        <div className={styled.container}>
            <h1 className={styled.title}>
                Сортировка
            </h1>
            <div  className={styled.btns}>
            <button type="submit"
                value="CITY"
             className={styled.city}>
                 <span className={styled.text}>по городу</span></button>
                <button value="COMPANY" className={styled.company}><span className={styled.text1}>по компании</span></button>
            </div>
        </div>
    );
}

export default SideBar;