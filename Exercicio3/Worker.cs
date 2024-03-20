namespace Exercicio3
{
    class Worker
    {
        private string nome;

        public Worker(string nome)
        {
            this.nome = nome;
        }

        public void Work()
        {
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine($"{nome} esta trabalhando...");
                Thread.Sleep(5000);
            }
        }
    }
}
