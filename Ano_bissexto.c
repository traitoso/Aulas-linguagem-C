#include <stdio.h>

int main()
{
   int ano;
  printf("digite o ano);
  scanf("%d", &ano );
  if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    printf("o ano %f é bissexto", ano);
  }
  else{
    printf("o ano %f não é bissexto", ano);
  }
    printf("finalizando o programa...");
    return 0;
}
