interface IGreation {
    name: string
}
const Greation = ({name}:IGreation) => {

    return(
        <div>
            <h1>hi {name}</h1>
        </div>
    )
}

export default Greation