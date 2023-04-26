
import './App.scss'

function App() {

  return (
    <>
    <aside className='card'>
      <picture>
        <source media='(min-width: 374px)' srcSet='/image-product-desktop.jpg'/>
        <source media='(max-width: 375px)' srcSet='/image-product-mobile.jpg'/>
        <img src="/image-product-desktop.jpg" alt="image product" />
      </picture>
      <section className='content'>
        <span className='sub'>PERFUME</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation compose by Oliver Polge, Perfumer-Creator fot the House of CHANEL 
        </p>
        <div className='price'>
          <strong>$149.99</strong>
          <span>$169.99</span>
        </div>
        <button>
          <img src="icon-cart.svg" alt="" />
          Add to cart
        </button>
      </section>
    </aside>
    </>
  )
}

export default App
