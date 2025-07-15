import React, { useEffect, useState } from "react"

export const Semaforo =() => {

    const [encendido, setEncendido] = useState("null")

    const changeColor = (color) => {
        setEncendido(color)
    }

    return (
        <main>
            <div className="Contenedor"></div>
            <div className="luces">
                <div 
                    className={`verde ${encendido == "verde" ? "light-on" : ""}`}
                    onClick={()=> changeColor("verde")}
                ></div>
                <div 
                    className={`ambar ${encendido == "ambar" ? "light-on" : ""}`}
                    onClick={()=> changeColor("ambar")}
                ></div>
                <div 
                    className={`rojo ${encendido == "rojo" ? "light-on" : ""}`}
                    onClick={()=> changeColor("rojo")}
                ></div>
            </div>
        </main>
    );
};