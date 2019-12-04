import React, { Component } from 'react';
import ApiServe from "../../service/api";

class EditUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nome: '',
            cpf: '',
            endereco: '',
            telefone: '',
            email: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount(){
        this.loadUser();
    }

    loadUser(){
        ApiServe.fetchUserById(window.localStorage.getItem("userId")).then((res) =>{
            let user = res.data.result;
            this.setState({
                id: user.id,
                nome: user.nome,
                cpf: user.cpf,
                endereco: user.endereco,
                telefone: user.telefone,
                email: user.email
            })
        })
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = { id: this.state.id,
            nome: this.state.nome, cpf: this.state.cpf,
            endereco: this.state.endereco, telefone: this.state.telefone,
            email: this.state.email
        };
        ApiServe.attUser(user).then(res => {
            this.setState({ message: 'Usuário adicionado com sucesso.' });
            this.props.history.push('/users');
        });
    }

    onchange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Atualizar Usuário</h2>
                <form>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" name="name" className="form-control"
                            defaultValue={this.state.nome} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>CPF</label>
                        <input type="text" name="cpf" className="form-control"
                            defaultValue={this.state.cpf} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Endereço</label>
                        <input type="text" name="endereco" className="form-control"
                            defaultValue={this.state.endereco} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" name="name" className="form-control"
                            defaultValue={this.state.nome} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" name="name" className="form-control"
                            defaultValue={this.state.nome} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-sucess" onClick={this.saveUser}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default EditUserComponent;