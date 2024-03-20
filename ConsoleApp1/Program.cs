using System;
namespace ConsoleApp1;
class Program
{
    static void Main(string[] args)
    {
        Lampada lampada = new Lampada();

        lampada.Imprimir();

        lampada.Ligar();
        lampada.Imprimir();

        lampada.Desligar();
        lampada.Imprimir();
    }
}


