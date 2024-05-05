import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function ProfilePage() {
  // const data=useLoaderData();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [userPosts,setUserPosts]=useState([]);
  const [savedPosts,setSavedPosts]=useState([])
  const [chatData,setChatData]=useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("callessssss",);
fetchData();
fetchChatData();
  },[])

  const fetchChatData=async()=>{
    const res=await axios.get('http://localhost:8800/api/chats',{
      withCredentials: true, 
    })
    console.log("resssssss;s;s;s;s;ss",res.data);
    setChatData(res.data)
  }

  const fetchData=async()=>{
    const res=await axios.get('http://localhost:8800/api/users/profilePosts',{
      withCredentials: true, 
    })
    setUserPosts(res.data.userPosts);
    setSavedPosts(res.data.savedPosts)
    console.log('====================================');
    // console.log("ressssss",res.data.us);
    console.log('====================================');
  }

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/login");
  //   }
  // }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser?.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser?.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?.email}</b>
            </span>
            <button onClick={()=>handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <List posts={userPosts} />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List posts={savedPosts} />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat chatData={chatData}/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
