export function formatMoney(value: number): string {
  const formattedValue: string = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formattedValue;
}
