// @ts-nocheck
const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisível, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

// O describe foi atualizado para refletir a suíte robusta
describe('Suíte de Testes Robusta para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números (positivos, negativos e zero)', () => { 
    expect(soma(2, 3)).toBe(5); 
    expect(soma(-1, -1)).toBe(-2); // NOVO TESTE: Caso negativo
    expect(soma(5, 0)).toBe(5);     // NOVO TESTE: Caso com zero
  });
  test('2. deve subtrair dois números', () => { 
    expect(subtracao(5, 2)).toBe(3); 
    expect(subtracao(2, 5)).toBe(-3); // NOVO TESTE: Resultado negativo
  });
  test('3. deve multiplicar (incluindo por zero)', () => { 
    expect(multiplicacao(3, 4)).toBe(12); 
    expect(multiplicacao(3, 0)).toBe(0); // NOVO TESTE: Multiplicação por zero
  });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.'); // Asserção de erro mais específica
  });
  test('5. deve calcular a potência (incluindo expoente zero)', () => { 
    expect(potencia(2, 3)).toBe(8); 
    expect(potencia(10, 0)).toBe(1); // NOVO TESTE: Expoente zero
  });
  test('6. deve calcular a raiz quadrada (incluindo zero e erro)', () => { 
    expect(raizQuadrada(16)).toBe(4); 
    expect(raizQuadrada(0)).toBe(0); // NOVO TESTE: Caso de borda
    expect(() => raizQuadrada(-1)).toThrow(); // NOVO TESTE: Caso de erro
  });
  test('7. deve retornar o resto da divisão', () => { 
    expect(restoDivisao(10, 3)).toBe(1); 
    expect(restoDivisao(10, 2)).toBe(0); // NOVO TESTE: Resto zero
  });
  test('8. deve calcular o fatorial (incluindo casos base 0 e 1)', () => { 
    expect(fatorial(4)).toBe(24); 
    expect(fatorial(1)).toBe(1); // NOVO TESTE: Caso base 1
    expect(fatorial(0)).toBe(1); // NOVO TESTE: Caso base 0
    expect(() => fatorial(-1)).toThrow(); // NOVO TESTE: Caso de erro
  });
  test('9. deve calcular a média (incluindo array vazio)', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20); 
    expect(mediaArray([])).toBe(0); // NOVO TESTE: Array vazio
  });
  test('10. deve somar um array (incluindo array vazio)', () => { 
    expect(somaArray([1, 2, 3])).toBe(6); 
    expect(somaArray([])).toBe(0); // NOVO TESTE: Array vazio
  });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo (e lançar erro se vazio)', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50); 
    expect(maximoArray([-10, -5, -1])).toBe(-1); // NOVO TESTE: Negativos
    expect(() => maximoArray([])).toThrow(); // NOVO TESTE: Array vazio
  });
  test('12. deve encontrar o valor mínimo (e lançar erro se vazio)', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2); 
    expect(minimoArray([-10, -5, -1])).toBe(-10); // NOVO TESTE: Negativos
    expect(() => minimoArray([])).toThrow(); // NOVO TESTE: Array vazio
  });
  test('13. deve retornar o valor absoluto (incluindo positivo e zero)', () => { 
    expect(valorAbsoluto(-5)).toBe(5); 
    expect(valorAbsoluto(5)).toBe(5);   // NOVO TESTE: Número positivo
    expect(valorAbsoluto(0)).toBe(0);   // NOVO TESTE: Zero
  });
  test('14. deve arredondar números', () => { 
    expect(arredondar(9.8)).toBe(10); 
    expect(arredondar(9.2)).toBe(9); // NOVO TESTE: Arredondar para baixo
  });
  test('15. deve retornar true para par (e false para ímpar e zero)', () => { 
    expect(isPar(100)).toBe(true); 
    expect(isPar(101)).toBe(false); // NOVO TESTE: Caso ímpar
    expect(isPar(0)).toBe(true);    // NOVO TESTE: Caso zero
  });
  test('16. deve retornar true para ímpar (e false para par e zero)', () => { 
    expect(isImpar(7)).toBe(true); 
    expect(isImpar(8)).toBe(false); // NOVO TESTE: Caso par
    expect(isImpar(0)).toBe(false); // NOVO TESTE: Caso zero
  });
  test('17. deve calcular uma porcentagem', () => { 
    expect(calcularPorcentagem(50, 200)).toBe(100); 
    expect(calcularPorcentagem(0, 200)).toBe(0); // NOVO TESTE: Zero por cento
  });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal (incluindo zero e negativo)', () => { 
    expect(inverterSinal(42)).toBe(-42); 
    expect(inverterSinal(-42)).toBe(42); // NOVO TESTE: Inverter negativo
    expect(inverterSinal(0)).toBe(-0);   // NOVO TESTE: Inverter zero
  });
  
  // === Bloco 3 (21-30) ===
  // (Testes originais geralmente OK para funções Math, mas adicionando casos)
  test('21. deve calcular o seno', () => { 
    expect(seno(0)).toBe(0); 
    expect(seno(Math.PI / 2)).toBe(1); // NOVO TESTE
  });
  test('22. deve calcular o cosseno', () => { 
    expect(cosseno(0)).toBe(1); 
    expect(cosseno(Math.PI)).toBe(-1); // NOVO TESTE
  });
  test('23. deve calcular a tangente', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { 
    expect(arredondarParaBaixo(5.9)).toBe(5); 
    expect(arredondarParaBaixo(5.0)).toBe(5); // NOVO TESTE
  });
  test('27. deve arredondar para cima', () => { 
    expect(arredondarParaCima(5.1)).toBe(6); 
    expect(arredondarParaCima(5.0)).toBe(5); // NOVO TESTE
  });
  test('28. deve calcular a hipotenusa', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Bloco 4 (31-40) ===
  test('31. deve calcular o MDC', () => { 
    expect(mdc(10, 5)).toBe(5); 
    expect(mdc(7, 3)).toBe(1); // NOVO TESTE: Primos entre si
  });
  test('32. deve calcular o MMC', () => { 
    expect(mmc(10, 5)).toBe(10); 
    expect(mmc(7, 3)).toBe(21); // NOVO TESTE: Primos entre si
  });
  test('33. deve verificar se é primo (incluindo casos base)', () => { 
    expect(isPrimo(7)).toBe(true); 
    expect(isPrimo(1)).toBe(false);  // NOVO TESTE: Caso base 1
    expect(isPrimo(0)).toBe(false);  // NOVO TESTE: Caso base 0
    expect(isPrimo(4)).toBe(false);  // NOVO TESTE: Composto
  });
  test('34. deve calcular Fibonacci', () => { 
    expect(fibonacci(10)).toBe(55); 
    expect(fibonacci(0)).toBe(0); // NOVO TESTE: Caso base 0
    expect(fibonacci(1)).toBe(1); // NOVO TESTE: Caso base 1
  });
  test('35. deve calcular o produto de um array (incluindo vazio)', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24); 
    expect(produtoArray([])).toBe(1); // NOVO TESTE: Array vazio
  });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5);   // Dentro
    expect(clamp(-5, 0, 10)).toBe(0);  // NOVO TESTE: Abaixo do min
    expect(clamp(15, 0, 10)).toBe(10); // NOVO TESTE: Acima do max
  });
  test('37. deve verificar se um número é divisível', () => { 
    expect(isDivisivel(10, 2)).toBe(true); 
    expect(isDivisivel(10, 3)).toBe(false); // NOVO TESTE: Não divisível
  });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso (e lançar erro para zero)', () => { 
    expect(inverso(4)).toBe(0.25); 
    expect(() => inverso(0)).toThrow(); // NOVO TESTE: Erro no zero
  });

  // === Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  
  // Testes robustos para operadores de comparação
  test('44. deve verificar se é maior que (incluindo casos de igualdade)', () => { 
    expect(isMaiorQue(10, 5)).toBe(true); 
    expect(isMaiorQue(5, 5)).toBe(false);  // NOVO TESTE: Mata o mutante '>='
    expect(isMaiorQue(4, 5)).toBe(false);  // NOVO TESTE: Caso 'menor'
  });
  test('45. deve verificar se é menor que (incluindo casos de igualdade)', () => { 
    expect(isMenorQue(5, 10)).toBe(true); 
    expect(isMenorQue(5, 5)).toBe(false);  // NOVO TESTE: Mata o mutante '<='
    expect(isMenorQue(10, 5)).toBe(false); // NOVO TESTE: Caso 'maior'
  });
  test('46. deve verificar se é igual (incluindo casos diferentes)', () => { 
    expect(isEqual(7, 7)).toBe(true); 
    expect(isEqual(7, 8)).toBe(false); // NOVO TESTE: Caso diferente
    expect(isEqual(7, '7')).toBe(false);// NOVO TESTE: Mata o mutante '=='
  });

  test('47. deve calcular a mediana (array ímpar e par)', () => { 
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); // Caso ímpar
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);  // NOVO TESTE: Caso par
    expect(() => medianaArray([])).toThrow();      // NOVO TESTE: Caso de erro
  });
  test('48. deve calcular o dobro', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade', () => { expect(metade(20)).toBe(10); });
});