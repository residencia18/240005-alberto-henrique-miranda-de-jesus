using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio1
{
    public class ContaBancaria
    {
        public double Saldo { get; private set; }

        public ContaBancaria(double saldo)
        {
            if (saldo < 0)
            {
                throw new ValorInvalidoException(saldo);
            }
            Saldo = saldo;
        }

        public void Sacar(double valor)
        {
            if (valor > Saldo)
            {
                throw new SaldoInsuficienteException(Saldo);
            }

            if (valor <= 0)
            {
                throw new ValorInvalidoException(valor);
            }
            Saldo -= valor;
        }

        public void Depositar(double valor)
        {
            if (valor <= 0)
            {
                throw new ValorInvalidoException(valor);
            }
            Saldo += valor;
        }

        public void Transferir(double valor, ContaBancaria contaDestino)
        {
            Sacar(valor);
            contaDestino.Depositar(valor);
        }

        public class ValorInvalidoException : Exception
        {
            public double ValorInvalido { get; }
            public ValorInvalidoException(double valorInvalido) : base($"Valor Invalido, valor inserido R${valorInvalido}")
            {
                ValorInvalido = valorInvalido;
            }
        }

        public class SaldoInsuficienteException : Exception
        {
            public double SaldoInsuficiente { get; }
            public SaldoInsuficienteException(double saldoInsuficiente) : base($"Saldo Insuficiente, Saldo: R${saldoInsuficiente}")
            {
                SaldoInsuficiente = saldoInsuficiente;
            }
        }
    }
}
