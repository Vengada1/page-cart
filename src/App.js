import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

function App() {
  const data = [
    { 
      productimg: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3520/media-gallery/in3520nt-cnb-00055rf110-gn.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      productName: "Dell inspiron",
      price : 47500,
      Rating: 3.8,
      Description: "8 GB DDR4 RAM with Intel i5 Irisxe",
    },
    {
      productimg: "https://dlcdnwebimgs.asus.com/gain/74b68e7c-473f-4165-827f-d98addcbb37f/",
      productName: "Tuf-Gaming 1",
      price : 100000,
      Rating: 4.1,
      Description: "16 GB DDR4 RAM with Intel i7 & Irisxe",
    },

    {
      productimg: "data:image/jpeg;base64,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",
      productName: "Tuf-Gaming 2",
      price : 150000,
      Rating: 4.3,
      Description: "16 GB DDR4 RAM with AMD Ryzen 9 & GT",
    },
    {
      productimg: "https://dlcdnwebimgs.asus.com/gain/74b68e7c-473f-4165-827f-d98addcbb37f/",
      productName: "Tuf-Gaming 3",
      price : 180000,
      Rating: 4.5,
      Description: "32 GB DDR6 RAM with Intel i9 & RTX4090",
    }
  ];
  	const [count, setCount] = useState(0);
  return(
    <div className='App'>
          
      <div className='cart'>
        <Badge bg='success'>
          CART {count}
        </Badge>
      </div>
      <div className='cards'>
      {data.map((value,index)=> <Cards
      index ={index}
      value ={value}
      setCount={setCount}
      count={count}
      />)}
      </div>
    </div>
  );
}

export default App;

function Cards({value,index,setCount,count}){
  const [show, setShow]= useState(false);

  function addtocart(){
    setShow(!show)
    setCount(count + 1)
  } 
  function removefromcart(){
    setShow(!show)
    setCount(count - 1)
  }
  return(
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={value.productimg} />
              <Card.Body>
                <Card.Title><h1>{value.productName}</h1></Card.Title>
                <Card.Text>{value.Description}</Card.Text>
                <Card.Text><h3>Rs. {value.price}</h3></Card.Text>
                <Card.Text>{value.Rating}❤️</Card.Text>


                {!show ? <Button variant="primary"
                onClick={addtocart}>
                  Add Cart</Button> : ""}

                {show ? <Button variant="danger"
                onClick={removefromcart}>
                  Remove Cart</Button>  : ""}
              </Card.Body>
            </Card>
  )
}