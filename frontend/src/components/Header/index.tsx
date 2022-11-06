import router from "next/router";
import React from "react"

export default function Header() {
  function goHome() {
    router.push('/PesquisarLocais')
  }
  return (
    <div className="fixed w-full bg-cover bg-header p-5 flex justify-between">     
      <button onClick={goHome} className="h-28 w-28 bg-cover bg-teste "/>        
    </div>
  )
}
