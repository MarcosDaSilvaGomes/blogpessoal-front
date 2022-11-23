import React from 'react';
 import './Title.css';
 
    Interface ITitle (props: any){
        return (
            <h1>Hello</h1>
        )
    }
    
 function Title (nome:string){
    return (
        <h1>Hello {nome}</h1>
    );
 }
 export {Title};