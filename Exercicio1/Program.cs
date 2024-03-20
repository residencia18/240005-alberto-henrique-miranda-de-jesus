List<double> Lista = new List<double> { 3, 7, 2, 4, 6 };

List<double> convertedList = Lista.ConvertAll(x => x / 2);

Console.WriteLine("Lista convertida:");
convertedList.ForEach(x => Console.Write(x + " "));

