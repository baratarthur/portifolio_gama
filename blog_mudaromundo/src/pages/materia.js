import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ModalLanding } from '../components';
import { flame } from '../utils';
import ReactHtmlParser from 'react-html-parser';


class Materia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            materia: {},
            doc: "",
            load: false,
            formEbookState: false
        }
        this.getData();
        this.toggleFormEbook = this.toggleFormEbook.bind(this)
    }

    getData = async () => {
        const materia = await flame.content.getByField({
            schemaKey: 'posts',
            field: 'friendlyUrl',
            value: this.props.match.params.materia
        });

        try{
            for(let postId in materia) {
                let doc = "";
                if(
                    materia[postId].documentoParaDownload
                    && materia[postId].documentoParaDownload[0]
                ){
                    doc = await flame.storage.getURL({
                        fileId: materia[postId].documentoParaDownload[0].id
                    });
                }
                this.setState({materia: materia[postId], doc, load:true});
            }
        } catch(e) {
            console.error(e.message)
        }
    }

    toggleFormEbook = () => {
        this.setState({formEbookState:!this.state.formEbookState})
    }

    handleDownloadEbook = () => {
        const {doc} = this.state;
        window.open(doc);
    }

    render(){
        const {formEbookState} = this.state;
        return (
            <div className="container" >
                <h3 className="titulo-materia">
                    {this.state.load?this.state.materia.titulo:'Loading...'}
                </h3>
                <div className="texto-materia">
                    {this.state.load?ReactHtmlParser(this.state.materia.texto):'Loading...'}
                </div>
                <div className="row center">
                    {this.state.doc?
                        <a
                            className="btn-large"
                            onClick={e=>{this.toggleFormEbook()}}
                            >
                                <span><b>Clique aqui</b> para baixar o e-book!</span>
                        </a>
                        : ""
                    }
                    <ModalLanding
                        pulseClick={formEbookState}
                        localButton={false}
                        idForm={"formEbook"}
                        actionSubmit={this.handleDownloadEbook}
                   />
                </div>
            </div>
        );
    }
}

export default Materia;