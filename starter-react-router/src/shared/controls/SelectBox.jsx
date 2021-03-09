import React, {Component} from 'react';
import render from 'react-dom';

const SelectBox = ({className = '', options = [], children, ...rest}) => {
    className = `custom-select ${className}`.trim();
    return (
        <select className={className} {...rest}>
            {children}
            {options.map((item, index) => <option key={index} value={item.value}>{item.text}</option>)}
        </select>
    );
};

export default SelectBox;