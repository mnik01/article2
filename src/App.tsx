
function App() {
  

  const generateGraph = async () => {
    const QDA = (document.getElementById('QDA') as HTMLInputElement).value;
    const QDB = (document.getElementById('QDB') as HTMLInputElement).value;
    const QSA = (document.getElementById('QSA') as HTMLInputElement).value;
    const QSB = (document.getElementById('QSB') as HTMLInputElement).value;
    
    const apiURL = `http://www.rnz.ru/ekonomika/grafik_sprosa_i_predlojeniya.php`;
    const response = await fetch(apiURL, {
      "mode": 'cors',
      "headers": {
        'Access-Control-Allow-Origin':'*',
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "pragma": "no-cache",
        "upgrade-insecure-requests": "1"
      },
      "body": `QDA=${QDA}&QDB=${QDB}&QSA=${QSA}&QSB=${QSB}`,
      "method": "POST",
    });
    console.log(await response.json())
  }


  return (
    <main className="p-4 bg-slate-100 h-screen w-screen">
      <form className="w-72 flex-col flex gap-4 bg-white shadow-md rounded-2xl p-4">
        <fieldset className="contents">
          <div>
            <label className="text-xs">Введите функцию спроса:</label>
            <div className="flex w-full mt-1 gap-1">
              <p>Qd = </p>
              <input value={20} className="w-6 ring-1" id="QDA" type="number" />
              <p>-</p>
              <input value={4} className="w-6 ring-1" id="QDB" type="number" />
              <p>* P</p>
            </div>
          </div>
          <div>
            <label className="text-xs">Введите функцию предложения:</label>
            <div className="flex w-full mt-1 gap-1">
              <p>Qs = </p>
              <input value={-4} className="w-6 ring-1" id="QSA" type="text" />
              <p>+</p>
              <input value={4} className="w-6 ring-1" id="QSB" type="text" />
              <p>* P</p>
            </div>
          </div>
        </fieldset>
        <button type="button" onClick={generateGraph} className="bg-purple-300 hover:bg-purple-400 transition-colors text-sm font-medium text-purple-800 hover:text-purple-900 rounded-lg px-2 py-1 uppercase w-full">Расчитать</button>
      </form>
    </main>
  )
}

export default App
