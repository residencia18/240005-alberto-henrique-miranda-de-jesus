namespace Exercicio5;

public class Exercicio5
{

    public struct Ponto<T>
    {
        public T X { get; set; }
        public T Y { get; set; }
        public T Z { get; set; }
    }

    public struct Triangulo<T>
    {
        public Ponto<T> P1 { get; set; }
        public Ponto<T> P2 { get; set; }
        public Ponto<T> P3 { get; set; }
    }

    private static void Main(string[] args)
    {
        Ponto<int> ponto1 = new Ponto<int> { X = 1, Y = 2, Z = 3 };
        Ponto<int> ponto2 = new Ponto<int> { X = 4, Y = 5, Z = 6 };
        Ponto<int> ponto3 = new Ponto<int> { X = 7, Y = 8, Z = 9 };

        Triangulo<int> triangulo1 = new Triangulo<int> { P1 = ponto1, P2 = ponto2, P3 = ponto3 };

        Ponto<double> ponto4 = new Ponto<double> { X = 1.1, Y = 2.2, Z = 3.3 };
        Ponto<double> ponto5 = new Ponto<double> { X = 4.4, Y = 5.5, Z = 6.6 };
        Ponto<double> ponto6 = new Ponto<double> { X = 7.7, Y = 8.8, Z = 9.9 };

        Triangulo<double> triangulo2 = new Triangulo<double> { P1 = ponto4, P2 = ponto5, P3 = ponto6 };

        Console.WriteLine("Triangulo 1");
        Console.WriteLine($"P1: {triangulo1.P1.X} - {triangulo1.P1.Y} - {triangulo1.P1.Z}");
        Console.WriteLine($"P2: {triangulo1.P2.X} - {triangulo1.P2.Y} - {triangulo1.P2.Z}");
        Console.WriteLine($"P3: {triangulo1.P3.X} - {triangulo1.P3.Y} - {triangulo1.P3.Z}");

        Console.WriteLine("Triangulo 2");
        Console.WriteLine($"P1: {triangulo2.P1.X} - {triangulo2.P1.Y} - {triangulo2.P1.Z}");
        Console.WriteLine($"P2: {triangulo2.P2.X} - {triangulo2.P2.Y} - {triangulo2.P2.Z}");
        Console.WriteLine($"P3: {triangulo2.P3.X} - {triangulo2.P3.Y} - {triangulo2.P3.Z}");

    }
}
