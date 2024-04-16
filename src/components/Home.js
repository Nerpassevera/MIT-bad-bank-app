import Card from "../context";
import BankImg from '../bank.png'


export default function Home() {
  return (
    <Card
     txtcolor="black"
     header="BadBank Landing Page"
     title="Welcome to the bank"
     text="You can use this bank"
     body={(<img src={BankImg} className="img-fluid" alt=""/>)}
     />
  );
}