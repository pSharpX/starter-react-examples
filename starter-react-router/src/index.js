import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faFacebook, 
    faFacebookSquare, 
    faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
    faStroopwafel,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faPlus,
    faShoppingCart,
    faCartPlus,
    faTable,
    faListUl,
    faThList,
    faFilter,
    faHeart,
    faStar,
    faSave,
    faPlusSquare,
    faPlusCircle,
    faEdit,
    faTrash,
    faTrashAlt,
    faRedo,
    faRedoAlt,
    faFolderOpen,
    faUndo,
    faUndoAlt,
    faDownload,
    faFileUpload,
    faUpload,
    faThumbsUp,
    faThumbsDown,
    faMinus,
    faSignInAlt,
    faSignOutAlt,
    faSpinner, faCircleNotch, faCog,
    faShieldAlt,
    faUserShield,
    faLock,
    faUnlockAlt,
    faUserLock,
    faLockOpen
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faStroopwafel,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faPlus,
    faShoppingCart,
    faCartPlus,
    faTable,
    faListUl,
    faThList,
    faFilter,
    faHeart,
    faStar,
    faSave,
    faPlusSquare,
    faPlusCircle,
    faRedo,
    faRedoAlt,
    faFolderOpen,
    faUndo,
    faUndoAlt,
    faDownload,
    faFileUpload,
    faUpload,
    faEdit,
    faTrash,
    faTrashAlt,
    faThumbsUp,
    faThumbsDown,
    faMinus,
    faSignInAlt,
    faSignOutAlt,
    faSpinner,
    faCircleNotch,
    faCog,
    faStroopwafel,
    faShieldAlt,
    faUserShield,
    faLock,
    faUnlockAlt,
    faUserLock,
    faLockOpen,
    faFacebook,
    faFacebookSquare,
    faFacebookF);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
