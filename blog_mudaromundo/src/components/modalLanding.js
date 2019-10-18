import React,{Component} from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css';
import dateFormat  from 'dateformat';
import axios from 'axios';
import { firebase } from '../utils';

import { ModalContext } from '../contexts/modal-context';

const db = firebase.firestore();

class FormLeading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ipv6: '',
            success: '',
            error: '',
            idButton: '',
            idModal: '',
            idClose: ''
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    static contextType = ModalContext;

    componentDidMount = () => {
        const {idForm} = this.props;
        this.setState({
            idModal: `formModal-${idForm}`,
            idButton: `formButton-${idForm}`,
            idClose: `formClose-${idForm}`,
        })
        const options = {
            onOpenStart: () => {
            },
            onOpenEnd: () => {
            },
            onCloseStart: () => {
                document.getElementById("full_name").value = '';
                document.getElementById("email").value = '';
                this.setState({error:'', success:''})
            },
            onCloseEnd: () => {
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=8ceb24c54d804269af22025160c956a4')
            .then(res => {
                this.setState({ipv6:res.data.ip})
            })
            .catch(err=>{
                this.setState({ipv6:'unknownip'})
            })
    }

    componentDidUpdate = (prevProps) => {
        const { modalNeedOpen, setModalDontNeedOpen } = this.context;

        if (prevProps.pulseClick !== this.props.pulseClick && modalNeedOpen) {
            this.toggleModal()
            setModalDontNeedOpen();
        }
    }

    handleConfirmForm = async (e) => {
        e.preventDefault();
        document.getElementById('btn-envio').disabled = true;
        const fullName = e.target.full_name.value;
        const email = e.target.email.value;
        const d = new Date();
        const date = dateFormat(d,'yyyy-mm-dd HH:MM:ss');
        const {ipv6} = this.state;

        if(fullName && email){
            try{
                const new_lead = await db.collection("landing").add({
                    nome: fullName,
                    email: email,
                    data: date,
                    ipv6: ipv6
                })
                this.props.actionSubmit();
                document.getElementById(this.state.idClose).click()
                this.setState({success: "Obrigado por se cadastrar!", error:'' });
            } catch (e) {
                this.setState({error: e.message});
            }
        } else {
            this.setState({error: 'Ops, parece que você esqueceu de alguma coisa :/'});
        }
        document.getElementById('btn-envio').disabled = false;
    }

    toggleModal = () => {
        const { idButton } = this.state;
        document.getElementById(idButton).click()
    }

    render() {
        const {title, localButton, small} = this.props;
        const {idModal, idButton, idClose} = this.state;
        
        return (
            <>
                <a 
                    id={idButton}
                    style={{height:"unset", display: localButton ? "auto" : "none"}}
                    className={"waves-effect waves-light modal-trigger right " + (small ? 'btn' : 'btn-large')}
                    data-target={idModal} >
                    {title}
                </a>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id={idModal}
                    className="modal"
                >
                    <form onSubmit={this.handleConfirmForm} >
                        <div className="modal-content">
                            <a 
                                href="#"
                                id={idClose}
                                className="modal-close right"
                                style={{color: 'black', fontSize:'20px'}} >X</a>
                            <h6 style={{color:"#26a69a", textAlign:"center"}}>Cadastre-se aqui e ajude ongs a divulgarem seus trabalhos!</h6>
                            <div className="row">
                                <div className="col s12" style={{color:'red'}} >
                                    {this.state.error}
                                </div>
                                <div className="col s12" style={{color:'green'}} >
                                    {this.state.success}
                                </div>
                                <div className="col s12">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="full_name" type="text" className="validate inputForm" name="full_name" />
                                            <label htmlFor="full_name">Nome Completo</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input id="email" type="email" className="validate inputForm" name="email" />
                                            <label htmlFor="email">Email</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="center-align">
                                <button id="btn-envio" type="submit" className="waves-effect waves-green btn">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

FormLeading.propTypes = {
    idForm: PropTypes.string,
    localButton: PropTypes.bool,
    pulseClick: PropTypes.bool,
    title: PropTypes.node,
    actionSubmit: PropTypes.func,
    small: PropTypes.bool
}

FormLeading.defaultProps = {
    idForm: 'modal1',
    localButton: true,
    pulseClick: false,
    title:<span></span>,
    actionSubmit: ()=>{},
    small: false,
}

export default FormLeading;