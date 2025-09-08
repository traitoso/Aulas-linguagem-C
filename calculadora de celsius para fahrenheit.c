
#include <stdio.h>

int main()
{
    //codigo celsius para Fahrenheit
 float temperatura;
 printf("escreva em graus celsius uma temperatura para ser convertida\n");
 scanf("%f",&temperatura);
 printf("sua temperatura em Fahrenheit é\'%.2f\'", temperatura * 1.8 + 32);

    return 0;
}