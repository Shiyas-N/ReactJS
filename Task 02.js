const ReactContent = document.getElementById("root");

const Elmnt = () =>{
    return(
        <div>
            <h2 align="center">FRUITS</h2>
            <ul>
              <li>MANGO</li>
              <li>BANANA</li>
              <li>APPLE</li>
              <li>ORANGE</li>
              <li>GRAPE</li>
              <li>WATERMELON</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<Elmnt />,ReactContent)