#include <stdio.h>

int main()
{
   int ano;
  printf("digite o ano\n");
  scanf("%d", &ano );
  if(ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
    printf("o ano %d é bissexto\n", ano);
  }
  else{
    printf("o ano %d não é bissexto\n", ano);
  }
    printf("finalizando o programa...\n");
    return 0;
}
