class Gerador {
    Proposta(Cliente) {
        if (Cliente.Salario <= 1000.0) {
            return [
                this.Proposta(2,2, Cliente.valorEmprestimo),
                this.Proposta(3,2, Cliente.valorEmprestimo),
            ];
        }
        else if (Cliente.Salario >= 1000 && Cliente.Salario <= 5000) {
            return [
                this.Proposta(2,1.3, Cliente.valorEmprestimo),
                this.Proposta(4,1.5, Cliente.valorEmprestimo),
                this.Proposta(10,1.5, Cliente.valorEmprestimo),
            ];
        }
        else if (Cliente.Salario > 5000) {
            return [
                this.Proposta(2,1.2, Cliente.valorEmprestimo),
                this.Proposta(4,1.3, Cliente.valorEmprestimo),
                this.Proposta(10,1.3, Cliente.valorEmprestimo),
                this.Proposta(20,1.4, Cliente.valorEmprestimo),
            ];
        }
    }

    GeradorDeProposta(Parcelas, Fator, ValorEmprestimo) {
        return {
            parcelas: Parcelas,
            valorEmprestimo: Fator * ValorEmprestimo,
            valorParcela: (Fator * ValorEmprestimo) / Parcelas
        }
    }
}
module.exports = Gerador;