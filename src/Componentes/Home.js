import React ,{useEffect}from 'react'

import {connect} from 'react-redux'





const Home = ({})=>{

    useEffect(()=>{

        
    })




    return (
        <main className='mt-5'>
          <h1>Hola React js</h1>
        </main>
    )
}


const mapStateToProps =(state)=>{
    return({})
}


const mapDisapatchToProps =(dispatch)=>({
        
})


export default connect(mapStateToProps, mapDisapatchToProps)(Home)