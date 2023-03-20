const Painting = (props) => {
    console.log(props)
    return (
        <div>
            <img src={props.url} alt={props.title} width="480" />
            {/* <h2>{}</h2> */}
        </div>
    )
}

export default Painting