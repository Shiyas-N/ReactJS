const ReactContent = document.getElementById("root");

const Elmnt = () =>{
    return(
        <ul>
            <li>MANGO</li>
            <li>BANANA</li>
            <li>APPLE</li>
            <li>ORANGE</li>
            <li>GRAPE</li>
            <li>WATERMELON</li>
        </ul>
    )
}
ReactDOM.render(<Elmnt />,ReactContent)