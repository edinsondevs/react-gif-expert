export const GifItem = (props) => {
    const { title, image } = props.item;
    
  return (
    <div className="card" >
     <img src={ image } alt={ title } width='300px' height='300px'  
     />
     <h6>{ title }</h6>   
    </div>
  )
}
