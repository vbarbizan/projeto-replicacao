import React from "react";
import logo from "./imgs/logo.png"

export default function App() {
  return (

    <div className=" relative bg-black">

    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/BR-pt-20240909-TRIFECTA-perspective_7df47ec8-549f-49c7-8b10-a0336681c15b_small.jpg')] bg-cover bg-center opacity-80 ">

      <div className="w-full">
        <img className=" flex left-20 w-64 h-32 relative opacity-100 hover:w-70 h-38 " src={logo} />
      </div>


      <div className="bg-black bg-opacity-90 p-10 rounded-lg w-full max-w-md mx-auto ">
        <h1 className="text-3xl font-bold text-white mb-6">Entrar</h1>

        <input
          type="text"
          placeholder="Email ou número de celular"
          className="w-full p-3 mb-4 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border-2 border-gray-400"
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full p-3 mb-4 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border-2 border-gray-400"
        />

        <button className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition duration-300">
          Entrar
        </button>

        <div className="flex items-center justify-center my-4">
          <span className="text-gray-500">OU</span>
        </div>

        <button className="w-full  opacity-30 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-500 border-2 border-white">
          Usar um código de acesso
        </button>

        <div className="text-right mt-4">
          <a href="/" className="text-gray-400 hover:underline">Esqueceu a senha?</a>
        </div>

        <div className="flex items-center mt-4">
          <input
            id="remember"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-red-600 rounded"
          />
          <label htmlFor="remember" className="ml-2 text-gray-400">Lembre-se de mim</label>
        </div>

        <div className="mt-6">
          <p className="text-gray-400">
            Novo por aqui? <a href="/" className="text-white font-semibold hover:underline">Assine agora.</a>
          </p>
        </div>

        <div className="mt-4 text-gray-500 text-xs">
          Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="/" className="text-blue-500 hover:underline">Saiba mais.</a>
        </div>

      </div>

      <footer className="bg-black text-white py-10 w-full mt-20 opacity-90">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-5">Dúvidas? Ligue 0800 591 2876</p>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10">
            <a href="#" className="hover:underline">Perguntas frequentes</a>
            <a href="#" className="hover:underline">Central de Ajuda</a>
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Privacidade</a>
          </div>

          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10 mt-5">
            <a href="#" className="hover:underline">Preferências de cookies</a>
            <a href="#" className="hover:underline">Informações corporativas</a>
          </div>

          <div className="mt-8">
            <button className="bg-gray-800 text-white py-2 px-4 items-center space-x-2">
              <span>🌐</span>
              <span>Português</span>
              <span>▾</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};


