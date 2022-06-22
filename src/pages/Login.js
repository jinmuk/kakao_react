import React from "react";
import { useState } from 'react';

// import axios from "axios";

function Login() {
    const [userId, setUserId ] = useState();
    const [nickname, setNickname ] = useState();
    const [thumbnail, setThumbnail] = useState();

  const getProfile = async () => {
    // let data = await axios.get("https://kapi.kakao.com/v2/user/me");
    let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      setUserId(data.id);
      setNickname(data.properties.nickname);
      setThumbnail(data.properties.profile_image);

    console.log(data);
  };
  return (
    <div>
      login - user Info { userId }
      <div>nick : {nickname}</div>
      <div>

        <img src={thumbnail} alt="profileImg"/>
      </div>
      <button onClick={getProfile}>info</button>
    </div>
  );
}

export default Login;
