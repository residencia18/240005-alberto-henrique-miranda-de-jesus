enum Exercicio
{
    Academia = 1,
    Luta = 2,
    Corrida = 3
}

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Opções de exercícios existentes:");
        Console.WriteLine("1 - Academia");
        Console.WriteLine("2 - Luta");
        Console.WriteLine("3 - Corrida");

        Console.Write("Digite o número do exercício desejado: ");
        int exercicioEscolhido;
        if (int.TryParse(Console.ReadLine(), out exercicioEscolhido))
        {
            if (Enum.IsDefined(typeof(Exercicio), exercicioEscolhido))
            {
                Exercicio exercicio = (Exercicio)exercicioEscolhido;
                Console.WriteLine($"Exercício escolhido: {exercicio}");
            }
            else
            {
                Console.WriteLine("Opção inválida.");
            }
        }
        else
        {
            Console.WriteLine("Opção inválida.");
        }
    }
}
