
#include <stdio.h>

int main()
{
 //definindo variaveis, constantes
const float gravidade = 9.8;
float massa, forca_peso;
//dando valor pra constante
printf("digite a massa\n");
scanf("%f", &massa);
//calculo força peso
forca_peso = massa * gravidade;
//resultado
printf("\na força peso é de %.2f newtons", forca_peso);
return 0;



}
