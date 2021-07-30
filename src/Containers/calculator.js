import React, { Component } from 'react'

import Operands from '../Operands/Operands';
import Rap from '../hoc/Rap';
import Operators from '../Operators/Operators';
import Result from './Result/Result';

import './calculator.css'
import Contollers from '../Controllers/Contollers';

class Calculator extends Component{
    state={
        operand: null,
        result: null,
        currOperator: null,
    }
    
    render(){

    const operationHandler= () => {
           let computed=0;  
           if(this.state.operand !== null && this.state.currOperator ){        
         switch(this.state.currOperator){
            case "*":
                computed = this.state.result*this.state.operand;
                break;
            case "/":
                computed = this.state.result/this.state.operand;
                break;
            case "+":
                computed = this.state.result+this.state.operand;
                break;
            case "-":
                    computed = this.state.result-this.state.operand;
                    break;
            default:
                alert("Oops! You have an error");
               
        }     
           this.setState({result: computed.toFixed(3),operand:null});

      }
    }

    const inputHandler=(eva) => {
         if((!this.state.operand)&& (this.state.currOperator === null)){
            this.setState({result: eva}); 
            this.setState({firstInput: !this.state.firstInput})
          }
          else{
             this.setState({ operand: eva});  
        }
    }

    
    let values=[];
        for(let i=2;i>=0;i--){
            for(let j=1;j<=3;j++){
                values.push( <Operands 
                key={3*i+j} takeInput={()=>inputHandler(3*i+j)}
                value = {3*i+j}
              />);
            }
        }
      
    const acHandler= () =>{
        console.log("Work in AC")  
        this.setState({result:null,operand:null,currOperator:null});
    }
    const delHandler = () => {
        if(this.state.operand !==null){
            this.setState({operand: null});
        }
        else{
            this.setState({result:null});
        }
    }
     return (
     
      
        <div className="Calculator-container">
        <Result 
           value={this.state.operand}
           computedValue={this.state.result}
           operator={this.state.currOperator}  />

        <div className="Main">
        <div className="Operand-container">
            <Contollers aced={acHandler} deleted={delHandler}/>
        
            {values}    
            <button className="Operand-btn">.</button>
            <Operands key={0} takeInput={()=>inputHandler(0)} value = {0}/>
            <button className="Operand-btn" onClick={()=>{this.setState({currOperator:null}); operationHandler()}}>=</button>
        </div>

        <div className="Operators-container">
        <Operators clicked={()=>{this.setState({currOperator:"*"});  operationHandler()}} value="*"/>
        <Operators clicked={()=>{this.setState({currOperator:"/"});  operationHandler()}} value="/"/>
        <Operators clicked={()=>{this.setState({currOperator:"+"});  operationHandler()}} value="+"/>
        <Operators clicked={()=>{this.setState({currOperator:"-"});  operationHandler()}} value="-"/>
        </div>
        </div>
        </div>
      
      );
   
    }

}


export default Calculator;