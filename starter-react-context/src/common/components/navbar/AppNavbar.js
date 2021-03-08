import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import SearchBox from '../Search/SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import posed, { PoseGroup } from "react-pose";
import { render, ReactDOM } from "react-dom";
import styled from "styled-components";
import { SecureButton } from '../../../core/routing/PrivateRoute';
import withAuthorization from '../../../core/auth/withAutorization';
import DataContext from '../../../context/DataContext';


export default function AppNavbar() {
    const [info, setInfo] = useContext(DataContext);

    return (
        <div className="container">
            <div className="container">
                AppNavbar {info.nombre}
            </div>
            <button className="btn btn-danger" onClick={()=>{
                setInfo({
                    ...info,
                    apellido: "Tello" 
                })
            }}>Modificar Apellido</button>
        </div>
    );
}
