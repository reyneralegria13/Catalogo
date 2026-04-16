import { Select } from '@radix-ui/themes'

export function ProductsToolbar({ sortBy, priceMax, onSortChange, onPriceChange, totalProducts }) {
  return (
    <div className="products-toolbar animate-in">
      <label htmlFor="sort-select">Ordenar por:</label>
      <Select.Root value={sortBy} onValueChange={onSortChange}>
        <Select.Trigger id="sort-select" className="toolbar-select radix-select-trigger" aria-label="Ordenar produtos" />
        <Select.Content position="popper">
          <Select.Item value="relevance">Relevância</Select.Item>
          <Select.Item value="price-asc">Menor preço</Select.Item>
          <Select.Item value="price-desc">Maior preço</Select.Item>
          <Select.Item value="rating">Melhor avaliação</Select.Item>
        </Select.Content>
      </Select.Root>

      <label htmlFor="price-filter">Faixa de preço:</label>
      <Select.Root value={String(priceMax)} onValueChange={(value) => onPriceChange(Number(value))}>
        <Select.Trigger id="price-filter" className="toolbar-select radix-select-trigger" aria-label="Filtrar por preço" />
        <Select.Content position="popper">
          <Select.Item value="0">Todos os preços</Select.Item>
          <Select.Item value="300">Até R$ 300</Select.Item>
          <Select.Item value="600">Até R$ 600</Select.Item>
          <Select.Item value="1000">Até R$ 1.000</Select.Item>
          <Select.Item value="2000">Até R$ 2.000</Select.Item>
        </Select.Content>
      </Select.Root>

      <span className="products-count" id="products-count" aria-live="polite">
        {totalProducts} produto{totalProducts !== 1 ? 's' : ''} encontrado{totalProducts !== 1 ? 's' : ''}
      </span>
    </div>
  )
}
