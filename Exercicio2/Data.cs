using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio2
{
    public class Data
    {
        public const int FORMATO_12H = 12;
        public const int FORMATO_24H = 24;
        private readonly int dia;
        private readonly int mes;
        private readonly int ano;
        private readonly int hora;
        private readonly int minuto;
        private readonly int segundo;

        public Data(int dia, int mes, int ano)
        {
            if (!DataValida(dia, mes, ano))
            {
                return;
            }
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }

        public Data(int dia, int mes, int ano, int hora, int minuto, int segundo) : this(dia, mes, ano)
        {
            if (!HoraValida(hora, minuto, segundo))
            {
                return;
            }

            this.hora = hora;
            this.minuto = minuto;
            this.segundo = segundo;
        }

        public void Imprimir(int horario = 24)
        {
            if (hora == 0 && minuto == 0 && segundo == 0)
            {
                Console.WriteLine($"{dia}/{mes}/{ano}");
                return;
            }

            string horaFormatada;
            if (horario == 12)
            {
                int horaFormatada12h = hora % 12;
                if (horaFormatada12h == 0)
                {
                    horaFormatada12h = 12;
                }
                horaFormatada = $"{horaFormatada12h}:{minuto:D2}:{segundo:D2} {(hora < 12 ? "AM" : "PM")}";
            }
            else
            {
                horaFormatada = $"{hora:D2}:{minuto:D2}:{segundo:D2}";
            }

            Console.WriteLine($"{dia}/{mes}/{ano} {horaFormatada}");

        }

        public bool DataValida(int dia, int mes, int ano)
        {
            if (dia < 1 || dia > 31)
            {
                return false;
            }

            if (mes < 1 || mes > 12)
            {
                return false;
            }

            if (ano < 1)
            {
                return false;
            }

            return true;
        }

        public bool HoraValida(int hora, int minuto, int segundo)
        {
            if (hora < 0 || hora > 23)
            {
                return false;
            }

            if (minuto < 0 || minuto > 59)
            {
                return false;
            }

            if (segundo < 0 || segundo > 59)
            {
                return false;
            }

            return true;
        }
    }
}
