import React, { Component } from 'react';
import { flame } from '../utils';

import { Feed, ModalLanding } from '../components';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loaded: false,
            ipv6: '',
            formEbookState: false
        }
        this.getData();
    }

    componentDidMount = () => {
        this.setState({formEbookState:true})
    }

    getData = async () => {
        const posts = await flame.content.get({schemaKey: 'posts'});
        const tmp = [];
        for(let postId in posts){
            let img = "";
            try{
                if( 
                    posts[postId].imagemDeDemonstracao
                    && posts[postId].imagemDeDemonstracao[0]
                ){
                    img = await flame.storage.getURL({
                        fileId: posts[postId].imagemDeDemonstracao[0].id
                    });
                }
                tmp.push({...posts[postId], img})
            } catch(e){
                console.error(e.message);
            }
        }
        tmp.sort((l1, l2) => {
            return l2._fl_meta_.createdDate.seconds - l1._fl_meta_.createdDate.seconds;
        });

        this.setState({ posts: tmp, loaded: true });
    }

    handleDownloadEbook = () => {
        window.open("https://gallery.mailchimp.com/7690675303fdcdb532da4a90d/files/d8ba3fa8-3c29-47c9-af80-2c875752c2b2/ebook_como_ajudar_sem_dinheiro.pdf");
    }

    render() {
        const {formEbookState} = this.state;
        return (
            <div className="container" >
                <div className="row center-align">
                    <ModalLanding
                        pulseClick={formEbookState}
                        idForm={"formLanding"}
                        title={<span>Ajude nosso site, <b>Clique aqui</b> e baixe nosso ebook grátis sobre como ajudar pessoas sem gastar dinheiro</span>}
                        actionSubmit={this.handleDownloadEbook}
                    />
                </div>
                <div className="row">
                    { 
                        this.state.loaded?
                        <Feed posts={this.state.posts} />
                        : <div>Loading...</div>
                    }
                </div>
            </div>
        );
    }
}

export default Landing;