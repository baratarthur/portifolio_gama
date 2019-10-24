import React from 'react';

const Entrada = ({ handle }) => (
    <form onSubmit={handle} >
        <label htmlFor="user" >Usuário: </label>
        <input type="text" name="user" />
        <button type="submit" >PESQUISAR</button>
    </form>
);

export default Entrada;
