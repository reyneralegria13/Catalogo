import { SoftIcon } from '../ui/SoftIcon'
import { getCategoryIcon } from '../../utils/catalogIcons'

export function CategoryGrid({ categories, activeCategory, onSelectCategory }) {
  const visibleCategories = categories.filter((category) => category.id !== 'todos')

  return (
    <div className="categories-grid animate-in" id="categories-grid">
      {visibleCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelectCategory(category.id)}
          aria-pressed={activeCategory === category.id}
        >
          <div className="cat-main">
            <SoftIcon icon={getCategoryIcon(category.id)} className="cat-icon" />
            <div className="cat-text">
              <h3 className="cat-label">{category.label}</h3>
              <p className="cat-count">
                <strong>{category.count}</strong>
                <span>software{category.count !== 1 ? 's' : ''}</span>
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
