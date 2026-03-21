
#include <stdio.h>

int main()
{
    #define gravidade 9.8
 //queda livre
 float queda_livre, tempo;
 printf("a quanto tempo ele esta de distancia do chao?\n");
 scanf(" %f", &tempo);
 queda_livre = 0.5 * gravidade * tempo * tempo;
 printf("ele esta a uma altura de \'%.2f\'metros!", queda_livre);
 return 0;
}