import {useState} from 'react'
import '../ItemCount/ItemCount.css'
import {Link} from 'react-router-dom'


const ItemCount = (props) => {
	
	const [name,setName] = useState()
	
	

	const quantityToAdd = (e) => { 
		console.log(e.target.value);
		setName(e.target.value)
	}

	return (
		<>
			<div className="contador">
				<button className="btn btn-dark"  onClick={props.onLess}>-</button>
				<input type="number" placeholder={props.quantity} onChange={quantityToAdd}/>
				<button className="btn btn-dark"  onClick={props.onAdd}>+</button>
			</div>
			<Link to="/cart"><button className="btn btn-outline-dark mt-3 mb-5" onClick={props.showName(name)} >Agregar al carrito</button></Link>
		</>
	)
}


export default ItemCount

// import {useState} from 'react'
// import '../ItemCount/ItemCount.css'

// const ItemCount = ({stock, initial = 1, onAdd}) => {
// 	const [count, setCount] = useState(initial)

//   const sumar = () => {
//     if(count < stock){
//       setCount(count + 1)
//     }
// }

// const restar = () => {
//   if(count > initial){
// setCount(count - 1)
// }}

// 	return (
// 		<>
// 			<div className="contador">
// 				<button className="btn btn-dark" disabled={stock === 0 || count <= 1} onClick={restar}>-</button>
// 				<span>{count}</span>
// 				<button className="btn btn-dark" disabled={stock === 0 || count >= stock } onClick={sumar}>+</button>
// 			</div>
// 			<button className="btn btn-outline-dark mt-3" disabled={stock === 0 || count <= 0 || count > stock} onClick={() => onAdd(count)}>Agregar al carrito</button>
// 		</>
// 	)
// }


// export default ItemCount