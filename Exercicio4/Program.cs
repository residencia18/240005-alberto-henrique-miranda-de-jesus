using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        Task task1 = DoWorkAsync("Tarefa 1", 5, 1000);
        Task task2 = DoWorkAsync("Tarefa 2", 7, 700);

        await Task.WhenAll(task1, task2);

        Console.WriteLine("Ambas as tarefas foram concluídas.");
    }

    static async Task DoWorkAsync(string taskName, int count, int delay)
    {
        for (int i = 0; i < count; i++)
        {
            Console.WriteLine($"{taskName} está trabalhando...");
            await Task.Delay(delay);
        }
    }
}
