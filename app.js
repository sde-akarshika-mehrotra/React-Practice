// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "root1" }, [
        React.createElement("h1", { id: "heading" }, "Hy! I am h1 tag"),
        React.createElement("h2", { id: "heading" }, "Hy! I am h2 tag"),
    ]),
    React.createElement("div", { id: "root2" }, [
        React.createElement("h1", { id: "heading" }, "Hy! I am h1 tag"),
        React.createElement("h2", { id: "heading" }, "Hy! I am h2 tag"),
    ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
