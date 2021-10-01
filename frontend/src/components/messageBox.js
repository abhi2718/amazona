import React from 'react';

const MessageBox=({msg,msgType})=>{

    return(
        <div style={{display:'flex',justifyContent:'center'}}>
        <p style={{...styles.msg,backgroundColor:(msgType==="danger"?"red":"whitesmoke")}}>
             {msg}
        </p>
        </div>
    )
}
const styles={
    msg:{
        textAlign:'center',
        maxWidth:"500px",
        padding:"8px",
        width:"80%",
        color:"blue",
        borderRadius:"10px"
    }
}

export default MessageBox;