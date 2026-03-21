
#include <stdio.h>


int main()
{
 //media de 5 numeros
 float n1, n2, n3, n4, n5, soma;
 //colcocando os numeros
 printf("digite o primeiro numero\n");
 scanf("%f", &n1);
  printf("digite o segundo numero\n");
 scanf("%f", &n2);
 printf("digite o terceiro numero\n");
 scanf("%f", &n3);
 printf("digite o quarto numero\n");
 scanf("%f", &n4);
 printf("digite o quinto numero\n");
 scanf("%f", &n5);
 //definindo a soma
 soma = n1 + n2 + n3 + n4 + n5;
 //média
 printf("a media dos 5 numeros é %.2f", soma / 5);
}
