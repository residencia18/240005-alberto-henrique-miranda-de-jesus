using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Exercicio4;

public interface IServico
{
    void Executar();
}

public class ServicoFabrica<T> where T : IServico, new()
{
    public T NovaInstancia()
    {
        return new T();
    }
}
