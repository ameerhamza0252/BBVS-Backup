import React, { useState, useEffect } from 'react';
import DVideo from '../abis/DVideo.json';
import Navbar from './Navbar';
import Main from './Main';
import Web3 from 'web3';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ipfsClient from 'ipfs-http-client';
import Uploadvideo from './Uploadvideo';
import Wallet from './Wallet';
import Sendmoney from './Sendmoney';
import Recievemoney from './Recievemoney';
import Transactions from './Transactions';
import Login from './Login';
import Signup from './Signup';
import Feed from './Feed';
import VideoPlayer from './VideoPlayer';


const { create } = require('ipfs-http-client');
const projectId = '2Q0kjVCAUeyBEmeXmd3us3VASq8';
const projectSecret = 'ba8651b09ebeced2d05d389e646aafb1';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
const client = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  apiPath: '/api/v0',
  headers: {
    authorization: auth,
  },
});

const App = () => {
  const [buffer, setBuffer] = useState(null);
  const [account, setAccount] = useState('');
  const [dvideo, setDvideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [videoCount,setVideosCount]=useState(0);
  

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);
  
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable()
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  };
  const loadBlockchainData = async () => {
    
    const web3 = window.web3;
    if(web3!=null){
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = DVideo.networks[networkId];
    if (networkData) {
      const dvideo = new web3.eth.Contract(DVideo.abi, DVideo.networks[networkId].address);
      setDvideo(dvideo);
      console.log('above get videos')
      const videosCount = await dvideo.methods.videoCount().call();
      console.log('setting count')
      console.log(videosCount)
      setVideosCount(videosCount);
      for (let i = videosCount; i >= 1; i--) {
        const video = await dvideo.methods.videos(i).call();
        setVideos((prevVideos) => [...prevVideos, video]);
      }
      const latest = await dvideo.methods.videos(videosCount).call();
      setCurrentHash(latest.hash);
      setCurrentTitle(latest.title);
      setLoading(false);
    } else {
      window.alert('DVideo contract not deployed to detected network.');
    }
  }
  else{
    window.alert('Please Connect Metamask')
    window.location.reload(false);
  }
  };

  const captureFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
      console.log('buffer', buffer);
    };
  };

  const uploadVideo = (title) => {
    console.log('Submitting file to IPFS...');

    client.add(buffer, (error, result) => {
      console.log('IPFS result', result);
      if (error) {
        console.error(error);
        return;
      }

      setLoading(true);
      console.log(result[0].hash)
      dvideo.methods.uploadVideo(result[0].hash, title).send({ from: account }).on('transactionHash', (hash) => {
        setLoading(false);
      });
    });
  };

  const changeVideo = (hash, title) => {
    setCurrentHash(hash);
    setCurrentTitle(title);
  };
 
  return (
    
    
    
    <Router>
      <Navbar account={account} />
      <Routes>
        <Route path="/" exact element={<Feed  videos={videos} changeVideo={changeVideo} currentHash={currentHash} currentTitle={currentTitle} />}></Route>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/Signup" exact element={<Signup/>}/>
        <Route path="/uploadvideo" exact element={<Uploadvideo uploadVideo={uploadVideo}  captureFile={captureFile} />} />
        <Route path="/Wallet" exact element={<Wallet/>} />
        <Route path="/uploadvideo" exact element={<Uploadvideo/>}/>
        <Route path="/wallet" exact element={<Wallet/>}></Route>
        <Route path="/sendmoney" exact element={<Sendmoney/>}></Route>
        <Route path="/recievemoney" exact element={<Recievemoney/>}></Route>
        <Route path="/transactions" exact element={<Transactions/>}></Route>
        <Route path="/videoplayer" exact element={<VideoPlayer changeVideo={changeVideo} currentHash={currentHash} currentTitle={currentTitle}/>}></Route>
        <Route path='/main'
         exact element={<Main videos={videos} changeVideo={changeVideo} currentHash={currentHash} currentTitle={currentTitle} account={account}/>}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
