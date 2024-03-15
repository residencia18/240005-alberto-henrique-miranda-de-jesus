using System;

namespace Exercicio1
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaBancaria conta1 = new ContaBancaria(0);
            ContaBancaria conta2 = new ContaBancaria(0);

            try
            {
                // Depósito válido
                conta1.Depositar(100);
                Console.WriteLine($"Depósito realizado com sucesso. Saldo: R${conta1.Saldo}");

                // Depósito inválido
                conta1.Depositar(-50);
            }
            catch (ContaBancaria.ValorInvalidoException ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {
                // Saque válido
                conta1.Sacar(50);
                Console.WriteLine($"\nSaque realizado com sucesso. Saldo: R${conta1.Saldo}");

                // Saque inválido
                conta1.Sacar(100);
            }
            catch (ContaBancaria.SaldoInsuficienteException ex)
            {
                Console.WriteLine(ex.Message);
            }

            try
            {
                // Transferência válida
                conta1.Transferir(50, conta2);
                Console.WriteLine($"\nTransferência realizada com sucesso. Saldo conta1: R${conta1.Saldo}. Saldo conta2: R${conta2.Saldo}");

                // Transferência inválida
                conta1.Transferir(100, conta2);
            }
            catch (ContaBancaria.SaldoInsuficienteException ex)
            {
                Console.WriteLine(ex.Message);
            }

            Console.WriteLine($"\nSaldo conta1: R${conta1.Saldo}. Saldo conta2: R${conta2.Saldo}");
        }
    }
}
