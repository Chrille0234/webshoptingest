const products = [
    {
        URL: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "yellow",
        title: "banana",
        price: "499"
    },
    {
        URL: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
        color: "cyan",
        title: "apple",
        price: "449"
    },
    {
        URL: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "blue",
        title: "grape",
        price: "399"
    },
    {
        URL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
        color: "yellow",
        title: "banana",
        price: "599"
    },
    {
        URL: "https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        color: "blue",
        title: "banana",
        price: "499"
    },
    {
        URL: "https://images.unsplash.com/photo-1535368459444-9bcff7349a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "grapefruit",
        price: "299"
    },
    {
        URL: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        color: "pink",
        title: "pineapple",
        price: "699"
    },
    {
        URL: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        color: "orange",
        title: "pear",
        price: "499"
    },
    {
        URL: "https://images.unsplash.com/photo-1520931061294-db3e762a9273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1200&q=60",
        color: "orange",
        title: "blueberry",
        price: "499"
    },
    
]

var url = new URL(window.location.href)
var item = url.searchParams.get("item")

item = parseInt(item)
console.log(parseInt(item));