import React from 'react';

const User = ({ info }) => info? (
    <div className="avatar" >
        <div width="100%" className="img-container" >
            <div className="img" style={{backgroundImage: `url(${info.avatar_url})`}} ></div>
        </div>
        <span>
            <p>
                <strong style={{color:"#33FF00"}}>
                    {info.hireable?<>Está disponível para contratação<br/></>:""}
                </strong>
                <strong>Name: </strong>{info.name}
            </p>
        </span>
        <span>
            <p>
                <strong>Bio: </strong> {info.bio}<br />
                <strong>Membro desde: </strong> {new Date(info.created_at).toString()}<br />
                <strong>Repositórios Públicos: </strong> {info.public_repos}<br />
            </p>
        </span>
        <a target="new_blank" href={info.html_url} >
            ir para perfil
        </a>
    </div>
): <div></div>;

export default User;
