public enum Tipo
{
    Comida,
    Bebida,
    Higiene,
    Limpeza
}

public class ItemMercado
{
    public string Nome { get; set; }
    public Tipo Tipo { get; set; }
    public double Preco { get; set; }

    public ItemMercado(string nome, Tipo tipo, double preco)
    {
        Nome = nome;
        Tipo = tipo;
        Preco = preco;
    }
}

class Program
{
    static void Main(string[] args)
    {
        List<ItemMercado> lista = new List<ItemMercado>
        {
            new ItemMercado("Arroz", Tipo.Comida, 3.90),
            new ItemMercado("Azeite", Tipo.Comida, 2.50),
            new ItemMercado("Macarrão", Tipo.Comida, 3.90),
            new ItemMercado("Cerveja", Tipo.Bebida, 22.90),
            new ItemMercado("Refrigerante", Tipo.Bebida, 5.50),
            new ItemMercado("Shampoo", Tipo.Higiene, 7.00),
            new ItemMercado("Sabonete", Tipo.Higiene, 2.40),
            new ItemMercado("Cotonete", Tipo.Higiene, 5.70),
            new ItemMercado("Sabão em pó", Tipo.Limpeza, 8.20),
            new ItemMercado("Detergente", Tipo.Limpeza, 2.60),
            new ItemMercado("Amaciante", Tipo.Limpeza, 6.40)
        };

        var ItensHigiene = lista
            .Where(itens => itens.Tipo == Tipo.Higiene)
            .OrderByDescending(itens => itens.Preco)
            .ToList();
        var ListaMaior5 = lista
            .Where(itens => itens.Preco > 5)
            .OrderBy(itens => itens.Preco)
            .ToList();
        var ListaComidaBebida = lista
            .Where(itens => itens.Tipo == Tipo.Comida || itens.Tipo == Tipo.Bebida)
            .OrderBy(itens => itens.Nome)
            .ToList();
        var TipoQuantidade = lista
            .GroupBy(itens => itens.Tipo)
            .Select(group => new { Tipo = group.Key, Quantidade = group.Count() })
            .ToList();
        var resumoPorTipo = lista
            .GroupBy(itens => itens.Tipo)
            .Select(group => new
            {
                Tipo = group.Key,
                PrecoMaximo = group.Max(item => item.Preco),
                PrecoMinimo = group.Min(item => item.Preco),
                PrecoMedio = group.Average(item => item.Preco)
            })
            .ToList();

        Console.WriteLine("Itens de Higiene");
        foreach (var item in ItensHigiene)
        {
            Console.WriteLine($"Item de Higiene: {item.Nome}, Preço: {item.Preco}");
        }

        Console.WriteLine("\nItens com preço maior que 5");
        foreach (var item in ListaMaior5)
        {
            Console.WriteLine($"Item com preço maior que 5: {item.Nome}, Preço: {item.Preco}");
        }

        Console.WriteLine("\nItens de Comida ou Bebida");
        foreach (var item in ListaComidaBebida)
        {
            Console.WriteLine($"Item de Comida ou Bebida: {item.Nome}, Tipo: {item.Tipo}");
        }

        Console.WriteLine("\nQuantidade de Itens por Tipo");
        foreach (var tipoQuantidade in TipoQuantidade)
        {
            Console.WriteLine($"Tipo: {tipoQuantidade.Tipo}, Quantidade: {tipoQuantidade.Quantidade}");
        }

        Console.WriteLine("\nResumo por Tipo");
        foreach (var resumo in resumoPorTipo)
        {
            Console.WriteLine($"Tipo: {resumo.Tipo}, Preço Máximo: {resumo.PrecoMaximo}, Preço Mínimo: {resumo.PrecoMinimo}, Preço Médio: {resumo.PrecoMedio:F2}");
        }
    }
}
