using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsoleApp1;
public class Lampada
{
    private bool Ligada;

    public Lampada()
    {
        Ligada = false;
    }
    public void Ligar()
    {
        Ligada = true;
    }

    public void Desligar()
    {
        Ligada = false;
    }

    public void Imprimir()
    {
        if (Ligada)
        {
            Console.WriteLine("Lâmpada ligada");
        }
        else
        {
            Console.WriteLine("Lâmpada desligada");
        }
    }
}

