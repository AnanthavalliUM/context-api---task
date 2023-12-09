import Productcard from '../productlist/product';
import "./home.css";


const Home = (props) =>{
    const { products } = props
    return (
        <div>
            <h1>New Products</h1>
            <div className='products-container' >
                {products.map((product, index) => (
                <Productcard  product={product} key={index} /> ))}
            
            </div>
            
        </div>
    )
}

export default Home;