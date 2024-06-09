
import beyaz from '../images/beyazlogo.png';
import textblue from '../images/TextMavi.png';
import mavilogo from '../images/Mavilogo.png';

export const Anasayfa1 = () => {
  return (
    
    <div 
      className='w-full h-screen flex flex-col items-center justify-center bg-white relative' >
        <img src={mavilogo} alt="" className='anasayfabg' />
       
      <div className='flex flex-col items-center text-center'>
      
        <img src={textblue} alt="ASSET Logo" className=' w-96  mb-32' />
        <p className='text-center text-black mb-4 w-72 '>
          <strong>ASSET</strong>, yapay zeka ve mobil uygulama teknolojilerini kullanarak tarihi eserlere erişimi kolaylaştıran yenilikçi bir uygulamadır. Kullanıcılar, akıllı telefonlarını kullanarak çevrelerindeki tarihi eserleri tanımlayabilir ve bu eserlerin hikayelerini keşfedebilirler.
        </p>
      </div>

      <div 
        className='w-96 h-40 flex flex-col items-center justify-center bg-gray-400/75 rounded-lg shadow-[11px_-2px_56px_2px_#2a4365,0px_3px_8px_0px_#00000024] mt-8 relative'
      >
        <p className='text-center text-black mb-4'>
          Kullanım kılavuzuna erişmek için butona tıklayınız
        </p>
        <button className='flex items-center justify-center w-16 h-16 bg-blue-800 rounded-full'>
          <img src={beyaz} alt="icon" className='w-12 h-12' />
        </button>
      </div>
    </div>
  );
}

export default Anasayfa1;
