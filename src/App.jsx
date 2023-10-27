import React from 'react';

import Avatar from "./atoms/avatar";
import Badge from "./atoms/badge";
import Card from "./atoms/card";
import Counter from "./atoms/counter";
import Header from "./atoms/header";
import Footer from "./atoms/footer";

import Carro from './styles/carro.png'

import './App.css';

function App() {
    return (
        <div className="App">
                {/* Header */}
                <Header title="Carro" />
            <div className="container">
                {/* Avatar */}
                <Avatar 
                imageSrc={Carro}
                description= "Marcas"/>

                {/* Card */}
                <Card title="Mercedes" content="GLE 190"/>
                <Card title="Audi" content="Audi A3"/>
                <Card title="Porshe" content={<Counter/>}/>
                {/* Badge */}
                <Badge label="Enviar"/>
            </div>

                {/* Footer */}
                <Footer content="Created with ❤ by Andres"/>
        </div>
    );
}

export default App;