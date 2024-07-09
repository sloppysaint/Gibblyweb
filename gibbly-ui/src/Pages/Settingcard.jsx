import React, { useState } from 'react';

const Settings = () => {
  const [language, setLanguage] = useState('EN');
  const [saved, setSaved] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const translations = {
    EN: {
      settings: "Settings",
      close: "Close",
      language: "Language",
      languageDesc: "Let us know which language you're most comfortable using. You can change it back at any time.",
      autoplay: "Autoplay videos",
      autoplayDesc: "Choose if you want to autoplay in your browser.",
      showPhotos: "Show profile photos",
      showPhotosDesc: "Choose whether to show or hide profile photos of other members.",
      save: "Save",
      cancel: "Cancel",
      saved: "Saved!"
    },
    IT: {
      settings: "Impostazioni",
      close: "Chiudi",
      language: "Lingua",
      languageDesc: "Facci sapere con quale lingua ti senti più a tuo agio. Puoi cambiarla di nuovo in qualsiasi momento.",
      autoplay: "Video a riproduzione automatica",
      autoplayDesc: "Scegli se desideri riprodurre automaticamente nel tuo browser.",
      showPhotos: "Mostra le foto del profilo",
      showPhotosDesc: "Scegli se mostrare o meno le foto del profilo degli altri membri.",
      save: "Salva",
      cancel: "Cancella",
      saved: "Salvato!"
    },
    ES: {
      settings: "Configuración",
      close: "Cerrar",
      language: "Idioma",
      languageDesc: "Indícanos en qué idioma te sientes más cómodo. Puedes cambiarlo en cualquier momento.",
      autoplay: "Reproducción automática de videos",
      autoplayDesc: "Elige si deseas reproducir automáticamente los videos en tu navegador.",
      showPhotos: "Mostrar fotos de perfil",
      showPhotosDesc: "Elige si deseas mostrar o no las fotos de perfil de otros miembros.",
      save: "Guardar",
      cancel: "Cancelar",
      saved: "Guardado!"
    }
  };

  const t = translations[language];

  return (
    <div className="container w-full max-w-md p-6 bg-white text-purple-800 relative overflow-hidden">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl">{t.settings}</h1>
        <div className="close-box flex flex-col items-center cursor-pointer">
          <i className="fa-solid fa-xmark text-xl"></i>
          <p className="text-sm pt-1">{t.close}</p>
        </div>
      </nav>
      <div className="main mt-6">
        <div className="above-hr flex flex-col gap-2.5">
          <h5 className="text-lg">{t.language}</h5>
          <p className="text-sm text-gray-900">{t.languageDesc}</p>
          <div className="language-box">
            <select 
              value={language} 
              onChange={handleLanguageChange} 
              className="w-52 border border-gray-200 shadow-md p-2 rounded"
            >
              <option value="EN" className="text-purple-700">English</option>
              <option value="IT" className="text-purple-700">Italian</option>
              <option value="ES" className="text-purple-700">Spanish</option>
            </select>
          </div>
        </div>
        <hr className="my-8 border-t border-gray-200" />
        <div className="under-hr flex flex-col gap-6">
          <div className="autoplay-box flex justify-center items-center">
            <div className="autoplay-caption w-3/5">
              <h5 className="text-base">{t.autoplay}</h5>
              <p className="text-sm mt-1.5 text-gray-900">{t.autoplayDesc}</p>
            </div>
            <div className="slide1 relative w-20 h-6 bg-gray-200 mx-auto rounded-full shadow-inner">
              <input type="checkbox" id="slide1" className="absolute invisible" defaultChecked />
              <label htmlFor="slide1" className="block w-8 h-5 cursor-pointer absolute top-0.5 left-0.5 bg-gradient-to-t from-gray-100 to-gray-300 rounded-full shadow transition-transform duration-300 ease-in-out"></label>
              <span className="absolute right-2 top-1 text-xs font-bold text-gray-900">OFF</span>
              <span className="absolute left-2 top-1 text-xs font-bold text-purple-700">ON</span>
            </div>
          </div>
          <div className="showphotos-box flex justify-center items-center">
            <div className="showphotos-caption w-3/5">
              <h5 className="text-base">{t.showPhotos}</h5>
              <p className="text-sm mt-1.5 text-gray-900">{t.showPhotosDesc}</p>
            </div>
            <div className="slide2 relative w-20 h-6 bg-gray-200 mx-auto rounded-full shadow-inner">
              <input type="checkbox" id="slide2" className="absolute invisible" defaultChecked />
              <label htmlFor="slide2" className="block w-8 h-5 cursor-pointer absolute top-0.5 left-0.5 bg-gradient-to-t from-gray-100 to-gray-300 rounded-full shadow transition-transform duration-300 ease-in-out"></label>
              <span className="absolute right-2 top-1 text-xs font-bold text-gray-900">OFF</span>
              <span className="absolute left-2 top-1 text-xs font-bold text-purple-700">ON</span>
            </div>
          </div>
          <div className="btns-box flex gap-4 my-4 w-full">
            <button onClick={handleSave} className="btn-save w-24 h-9 text-white bg-purple-700 rounded transition-transform duration-200 transform hover:translate-y-[-3px]">{t.save}</button>
            <button className="btn-cancel w-24 h-9 text-purple-700 bg-white border border-purple-700 rounded transition-transform duration-200 transform hover:translate-y-[-3px]">{t.cancel}</button>
          </div>
        </div>
      </div>
      {saved && (
        <div className="saved-box absolute top-0 right-32 bg-purple-700 text-white py-2 px-6 rounded-b animate-shiftDown">
          <p className="text-sm">{t.saved}</p>
        </div>
      )}
    </div>
  );
};

export default Settings;









// import React from 'react';

// const Settings = () => {
//   return (
//     <div className="p-6 bg-gray-100">
//       <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
//         <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-xl font-bold mb-4">Account Information</h2>
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Username:</span>
//               <span className="w-2/3">user20681422015373</span>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Role:</span>
//               <select className="w-2/3 p-2 border rounded">
//                 <option>Teacher</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Output Language:</span>
//               <select className="w-2/3 p-2 border rounded">
//                 <option>English</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Preferred Model:</span>
//               <div className="w-2/3 flex items-center">
//                 <span className="mr-2 bg-gray-200 p-2 rounded">AI Model:</span>
//                 <select className="p-2 border rounded">
//                   <option>⚡ Faster</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Date Joined:</span>
//               <span className="w-2/3">June 27, 2024</span>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Plan:</span>
//               <div className="w-2/3 flex items-center">
//                 <span>Starter</span>
//                 <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">Upgrade</button>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <span className="w-1/3 font-medium">Tokens:</span>
//               <div className="w-2/3 flex items-center">
//                 <span className="mr-2">Base: 10,000</span>
//                 <span>Bonus: 0</span>
//               </div>
//             </div>
//             <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Privacy & Terms</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-blue-500">Privacy Policy</a></li>
//               <li><a href="#" className="text-blue-500">Terms of Service</a></li>
//             </ul>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Support</h2>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-blue-500 flex items-center"><span className="material-icons">email</span>Contact Us</a></li>
//               <li><a href="#" className="text-blue-500 flex items-center"><span className="material-icons">school</span>Training Videos</a></li>
//               <li><a href="#" className="text-blue-500 flex items-center"><span className="material-icons">feedback</span>Leave Feedback</a></li>
//               <li><a href="#" className="text-blue-500 flex items-center"><span className="material-icons">favorite</span>Become a Gibbly Insider</a></li>
//             </ul>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-bold mb-4">Socials</h2>
//             <div className="flex space-x-4">
//               <a href="#" className="text-blue-500"><span className="material-icons">twitter</span></a>
//               <a href="#" className="text-blue-500"><span className="material-icons">facebook</span></a>
//               <a href="#" className="text-blue-500"><span className="material-icons">instagram</span></a>
//               <a href="#" className="text-blue-500"><span className="material-icons">tiktok</span></a>
//               <a href="#" className="text-blue-500"><span className="material-icons">pinterest</span></a>
//               <a href="#" className="text-blue-500"><span className="material-icons">linkedin</span></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;