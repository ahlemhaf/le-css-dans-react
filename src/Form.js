import React, { Component } from 'react';
import styled from 'styled-components';

const Title=styled.h1`
color:red;
font-size:80px;

`


class Form extends Component {
render(){

    return (
        <div>
            <Title>Commentaire</Title>
            <button className='btn btn-danger'>valider</button>
        </div>
    )
}
}
export default Form;