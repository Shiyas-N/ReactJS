const ReactContent = document.getElementById("root");

const Elmnt = React.createElement(
    "ul", null , 
    [React.createElement("li",null,"MANGO"),
    React.createElement("li",null,"BANANA"),
    React.createElement("li",null,"APPLE"),
    React.createElement("li",null,"ORANGE"),
    React.createElement("li",null,"GRAPE"),
    React.createElement("li",null,"WATERMELON")]
)

ReactDOM.render(Elmnt,ReactContent);
