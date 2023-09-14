
import { BrowserRouter, Route,Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import home from './pages/home';
import Giris from './pages/giris';
import Kayit from './pages/kayit';
import React, { useState } from 'react';
import SonucluAnket from './SonucluAnket';



function App() {
  const [isSelected, setIsSelected] = useState(false);

  const toggleButton = () => {
    setIsSelected(!isSelected);
  };
  const buttonStyle = {
    backgroundColor: isSelected ? 'blue' : 'gray',
    color: isSelected ? 'white' : 'black',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<home/>}></Route>
          <Route path='/spor' element={<home/>}></Route>
          <Route path='/araba' element={<home/>}></Route>
          <Route path='/teknoloji' element={<home/>}></Route>
          <Route path='/siyaset' element={<home/>}></Route>
          <Route path='/e-spor' element={<home/>}></Route>
          <Route path='/giris' element={<Giris/>}></Route>
          <Route path='/kayit' element={<Kayit/>}></Route>
        </Routes>
      </BrowserRouter>
      <div className='container'>
      <h4 className='baslik' style={{textAlign:'center', color:'white', fontSize:'40px',marginTop:'3%'}}>Popüler Anketler</h4>
      <form style={{ marginTop:'5%', fontWeight:'bolder',marginLeft:'-8%'}}>
        <label>En iyi Futbolcu Hangisi?</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>Ronaldo</button>&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>Messi</button>
      </form>
     
      <form style={{marginLeft:'-8%', marginTop:'5%', fontWeight:'bolder'}}>
        <label>Favori Rengin?</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>Beyaz</button>&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>Siyah</button>&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{height:'30px', width:'100px',fontWeight:'bold'}}>Kırmızı</button>
      </form>
      <form style={{marginLeft:'-8%', marginTop:'5%', fontWeight:'bolder'}} >
        <label>En Güzel Manzara?</label>&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="#"> <img src ="https://i0.wp.com/mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg?fit=696%2C446&ssl=1" style ={{width:'20%',height:'20%'}}></img></a> &nbsp;&nbsp;
       <a href="#"><img src ="https://media.istockphoto.com/id/1297349747/tr/foto%C4%9Fraf/t%C3%BCrkiyede-botan-kanyonu-%C3%BCzerinde-u%C3%A7an-s%C4%B1cak-hava-balonlar%C4%B1.jpg?s=612x612&w=0&k=20&c=cB1OwAy1ndPfcjp_Mt7n0rLub2hiSzgMj-qBXHSrprU="style ={{width:'19.3%',height:'18.8%'}}></img></a>&nbsp;&nbsp;
       <a href="#"> <img src ="https://media.istockphoto.com/id/944812540/tr/foto%C4%9Fraf/da%C4%9F-manzaras%C4%B1-ponta-delgada-adas%C4%B1-azor.jpg?s=612x612&w=0&k=20&c=HKFZ_yJZilnbjlCRaR7ren2OsDZcNILjulHZ255t1qM=" style ={{width:'21.5%',height:'21.5%'}} ></img> </a>
      </form>
      <form style={{marginLeft:'6%', fontWeight:'bolder'}}>
      <button className='yuvarlakbuton2' type='clickbox' ></button>
      <button className='yuvarlakbuton2' type='clickbox' style = {{marginLeft:'22%',marginTop:'1%'}}></button>
      <button className='yuvarlakbuton2' type='clickbox' style = {{marginLeft:'21%'}}></button>
      </form>
      <form style={{ marginTop:'5%', fontWeight:'bolder',marginLeft:'-8%'}}>
        <label>En iyi İşletim Sistemi Hangisi?</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>Android</button>&nbsp;&nbsp;
        <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold' }}>IOS</button>
      </form>
      <form style={{marginLeft:'-8%', marginTop:'5%', fontWeight:'bolder'}}>
        
      <label>En İyi Araba Markası?</label>&nbsp;&nbsp;&nbsp;&nbsp; 
        <SonucluAnket/>
      
      </form>
      

  <br/>  <br/>  <br/>


  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3" style={{textAlign:'center'}}>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style={{color:'black'}}>Anasayfa</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style={{color:'black'}}>Özellikler</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style={{color:'black'}}>FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary" style={{color:'black'}}>Hakkımızda</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
  </footer>
  </div>  
      
    </div>
  
    
  );
}

export default App;
