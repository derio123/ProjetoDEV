import React, { Component } from 'react';
import ApiServe from "../../service/api";

class AddUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            cpf: '',
            endereco: '',
            telefone: '',
            email: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            nome: this.state.nome, cpf: this.state.cpf,
            endereco: this.state.endereco, telefone: this.state.telefone,
            email: this.state.email
        };
        ApiServe.inserirUser(user).then(res => {
            this.setState({ message: 'Usuário adicionado com sucesso.' });
            this.props.history.push('/users');
        });
    }

    onchange = (e) => this.setState({ [e.target.nome]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Adicionar Usuário</h2>
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
                        <label>Email</label>
                        <input type="text" name="name" className="form-control"
                            defaultValue={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" name="name" className="form-control"
                            defaultValue={this.state.telefone} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-sucess" onClick={this.saveUser}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;