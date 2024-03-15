object o = null;
try
{
    o.ToString();
}
catch (NullReferenceException)
{
    Console.WriteLine("Erro: Tentativa de operação em um objeto nulo.");
}
