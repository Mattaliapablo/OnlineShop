import react from 'react'
import { Link } from 'react-router-dom';
import '../Carts/carts.css';

const Carts = () => {


	return (
		<>
        <div className="container">
            <div className="row mt-5">
            <Link to="" className="link col-4 carts text-center">
                    <h1>REMERAS</h1>
                </Link>

                <Link to="" className="link col-4 carts text-center">
                    <h1>CAMPERAS</h1>
                </Link>

                <Link to="" className="link col-4 carts text-center">
                    <h1>ZAPATILLAS</h1>
                </Link>

            </div>
            <hr className="mt-5 linea"/>
        </div>
		</>
	)
}


export default Carts