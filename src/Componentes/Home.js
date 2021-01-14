import React ,{useEffect}from 'react'
import {connect} from 'react-redux'





const Home = ({lista})=>{

    useEffect(()=>{

        
    })




    return (
        <main className='mt-5'>
        {
            lista.map((el)=>{
                return(
                    <h1>{el.category}</h1>
                )
            })
        }
        </main>
    )
}


const mapStateToProps =(state)=>{
    return({
        lista: state.lista
    })
}


const mapDisapatchToProps =(dispatch)=>({
        
})


export default connect(mapStateToProps, mapDisapatchToProps)(Home)