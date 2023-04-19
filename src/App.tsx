import { useState } from 'react'

function App() {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<string>("");
  const [c, setC] = useState<string>("");
  const [d, setD] = useState<string>("");
  const [e, setE] = useState<string>("");
  const [f, setF] = useState<string>("");
  const [g, setG] = useState<string>("");
  const [h, setH] = useState<string>("");

  const handleReset = () => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach((t) => {
      t.value = "";
    })

    setA('')
    setB('')
    setC('')
    setD('')
    setE('')
    setF('')
    setG('')
    setH('')
  };

  return (
    <div className="App w-screen h-screen gap-2 p-2 align-middle bg-slate-100">
      <div className='flex gap-2 align-middle justify-center'>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={a} placeholder="A" onChange={(e)=> setA(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={b} placeholder="B" onChange={(e)=> setB(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={c} placeholder="C" onChange={(e)=> setC(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
      </div>
      <div className='p-1'/>
      <div className='flex gap-2 align-middle justify-center'>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={d} placeholder="D" onChange={(e)=> setD(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea value={a} placeholder="A" onChange={(e)=> setA(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={b} placeholder="B" onChange={(e)=> setB(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={c} placeholder="C" onChange={(e)=> setC(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={d} placeholder="D" onChange={(e)=> setD(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={e} placeholder="E" onChange={(e)=> setE(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={f} placeholder="F" onChange={(e)=> setF(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={g} placeholder="G" onChange={(e)=> setG(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={h} placeholder="H" onChange={(e)=> setH(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={e} placeholder="E" onChange={(e)=> setE(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
      </div>
      <div className='p-1'/>
      <div className='flex gap-2 align-middle justify-center'>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={f} placeholder="F" onChange={(e)=> setF(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={g} placeholder="G" onChange={(e)=> setG(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
        <div className='grid grid-cols-3 grid-rows-3 gap-1'>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea value={h} placeholder="H" onChange={(e)=> setH(e.target.value)} className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
          <textarea className='bg-slate-200 lg:pt-[2rem] pt-[3vw] overflow-clip rounded-md resize-none text-center h-[10vw] w-[10vw] lg:h-20 lg:w-20'></textarea>
        </div>
      </div>
      <div className='lg:absolute lg:top-[46.5vh] lg:right-[8vw] flex justify-center'>
        <button onClick={handleReset} className='bg-slate-200 rounded-full w-6 mt-2 text-xl'>↺</button>
      </div>
      <canvas className="hidden" id='canvas' />
    </div>
  )
}

export default App
