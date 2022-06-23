import React, {useState, useEffect} from 'react'
// import axios from 'axios';

function Main() {
  
    // const getProfile =  () => {
    //     let data =  axios.get('https://kapi.kakao.com/v2/user/me');
    //     console.log(data);
    // }
    const [token, setToken] = useState();

    useEffect(() => {
      setToken( window.Kakao.Auth.getAccessToken() );
    },[]);

    function handleLogin(){
      window.Kakao.Auth.login({
        success: function(res){
          console.log(res);
          setToken(res.access_token);
          // window.Kakao.API.re
        }
      })
    }
    function handleGetUserInfo(){
      window.Kakao.API.request({
        url : '/v2/user/me',
        success: function(res){
          console.log(res);
        }
      })
    }

  return (
    <div>main
        <button onClick={handleLogin}>main Login</button>
        <button onClick={handleGetUserInfo}>get UserInfo</button>
        <div>token: {token}</div>
    </div>
  )
}

export default Main