


/**
 * <div id= "parent">
 *     <div id= "child1">
 *         <h1>"React is a library"</h1>
 *         <h2>"Hello Vamsi"</h2>
 *     </div>
 *     <div id= "child">
 *         <h1>"React is a library"</h1>
 *         <h2>"Hello Vamsi"</h2>
 *     </div>
 * </div>
 */
const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement(
                    "h1",
                    {},
                    "React is a library"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Hello Vamsi"
                )
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {},
                    "React is a library"
                ),
                React.createElement(
                    "h2",
                    {},
                    "Hello Vamsi"
                )
            ]
        )
    ]
)
const heading = React.createElement("h1",{},"Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);