import Card from "./Card"

const Cards = () => {
    const data = [
         {imgurl:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D', name :'headphone'},
    {imgurl:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww', name:'Watch'},
    {imgurl:'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww', name:'Shoes'},
    {imgurl:'https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D', name:'facewash'}
    ]
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center w-full px-4 gap-10">
        {data.map((item, index)=> <Card key={index} Carditems={item}/>)}
        
    </div>
  )
}

export default Cards