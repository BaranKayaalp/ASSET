import React from 'react';
import mavilogo from '../images/2sayfa.png';

const steps = [
  {
    number: 1,
    title: "Kamera Butonuna basın",
    description: "Uygulamayı telefonunuzda açın ve kamerayı etkinleştirin."
  },
  {
    number: 2,
    title: "Fotoğraf Çekin",
    description: "Kamerayı açtıktan sonra, tanımak istediğiniz nesneyi odaklayın ve fotoğrafını çekmek için dokunun."
  },
  {
    number: 3,
    title: "Tanıma İşlemi",
    description: "Çektiğiniz fotoğraf üzerinde, uygulama hızlı bir şekilde nesneyi analiz edecek ve tanımlayacaktır."
  },
  {
    number: 4,
    title: "Sonuçları İnceleme",
    description: "Tanıma işlemi tamamlandıktan sonra, ekranda nesnenin adını ve ilgili bilgileri içeren bir metin görüntülenecektir."
  },
  {
    number: 5,
    title: "Yeniden Fotoğraf Çekebilirsiniz",
    description: "Eğer istediğiniz sonuca ulaşamazsanız, tekrar fotoğraf çekerek yeni bir tanıma işlemi başlatabilirsiniz."
  }
];

export const Anasayfa2: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className='w-full h-1 bg-[#303f9f] mb-24'></div>
      
        
      
      <h1 className="text-7xl font-bold mb-20 text-[#303F9F]">UYGULAMA KULLANIM KILAVUZU</h1>



      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-w-4xl w-full">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-white relative text-[#303F9F] shadow-[0px_0px_27px_3px_#1a202c] text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mr-4 ">
              {step.number}
            </div>
            <div className="bg-[#D9D9D9] p-4 rounded-lg flex-1 shadow-md">
              <strong>{step.title}</strong><br />
              {step.description}
            </div>
          </div>
        ))}
      </div>




      <img src={mavilogo} alt="Mavi Logo" className=" a2bg"/>



    </div>
  );
}

export default Anasayfa2;
