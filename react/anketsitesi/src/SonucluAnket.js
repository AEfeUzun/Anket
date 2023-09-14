import React,{ useState } from "react";
 
function SonucluAnket(){

        const [soru,setsoru] = useState('');
        const [cevap,setcevap] = useState({
            secenek1: 0,
            secenek2: 0,
            secenek3: 0,

        });

        const cevapVer = (secenek) => {
            setcevap((prevcevaplar) => ({
                ...prevcevaplar, [secenek]: prevcevaplar[secenek] +1,
            }));
            
        }
        return (
    <div>
      <h1>{soru}</h1>
      <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold', marginLeft:'20px' }} onClick={() => cevapVer('secenek1')}>
        Audi <span>({cevap.secenek1})</span>
      </button>
      <button className="yuvarlakbuton" style={{ height: '30px', width: '100px', fontWeight: 'bold',  marginLeft:'20px' }} onClick={() => cevapVer('secenek2')}>
         BMW <span>({cevap.secenek2})</span>
      </button>
      <button className="yuvarlakbuton" style={{ height: '30px', width: '130px', fontWeight: 'bold',  marginLeft:'20px' }} onClick={() => cevapVer('secenek3')}>
        Mercedes <span>({cevap.secenek3})</span>
      </button>

   
    </div>
          );
}
export default SonucluAnket;