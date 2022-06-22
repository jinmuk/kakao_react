import React from 'react'
import axios from 'axios';

function Main() {
  
    const getProfile =  () => {
        let data =  axios.get('https://kapi.kakao.com/v2/user/me');
        console.log(data);
    }

  return (
    <div>main
        <button onClick={getProfile}>main profile</button>
    </div>
  )
}

export default Main