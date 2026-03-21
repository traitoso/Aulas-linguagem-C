#include <stdio.h>

int main()
{
    float num1, num2, result;
    char operacao;
    printf("insira um numero\n");
    scanf(" %f", &num1);
    printf("insira outro numero\n");
    scanf(" %f", &num2);
    printf("escolha a operação (+,-,*,/)\n");
    scanf(" %c", &operacao);
     switch(operacao){
        case('+'):
            result = num1 + num2;
            printf(" %.2f\n", result);
            break;
        case('-'):
            result = num1 - num2;
            printf(" %.2f\n", result);
            break;
        case('*'):
            result = num1 * num2;
            printf("%.2f\n", result);
            break;
           
            break;
        case('/'):
            result = num1 / num2;
            if(num2 == 0){
                printf("nao existe divisão por zero\n");
                break;
            }
            printf("%.2f\n", result);
            break;
        
     }
    printf("finalizando o programa...");
    return 0;
}
