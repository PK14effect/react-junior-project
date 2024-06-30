// import React, { createContext, useContext, useState } from 'react';

// // Create context
// const PocketContext = createContext();

// // Export context
// export { PocketContext };

// // Provider component
// export const PocketProvider = ({ children }) => {
//     const [pocketCount, setPocketCount] = useState(0);
//     const [allData, setAllData] = useState([]);
//     const [addedPokemonIds, setAddedPokemonIds] = useState([]);

//     const addToPocketHandler = (pokemonId) => {
//         // Check if pokemonId is already in pocket
//         if (!addedPokemonIds.includes(pokemonId)) {
//             setAddedPokemonIds(prevIds => [...prevIds, pokemonId]);
//             setPocketCount(prevCount => prevCount + 1);

//         }
//     };

//     let data = [];

//     const addToPocket = (newData) => {
//         // เพิ่มข้อมูลใหม่เข้าไปใน data หาก id ยังไม่ซ้ำ
//         if (!data.some(item => item.id === newData.id)) {
//             data.push(newData);
//         }
        
//     };


//     // Value provided to consumers
//     const value = {
//         pocketCount,
//         addToPocketHandler,
//         addToPocket,
//         allData,
//         setAllData
//     };

//     return (
//         <PocketContext.Provider value={value}>
//             {children}
//         </PocketContext.Provider>
//     );
// };

// // Custom hook to use the context
// export const usePocket = () => {
//     const context = useContext(PocketContext);
//     if (!context) {
//         throw new Error('usePocket must be used within a PocketProvider');
//     }
//     return context;
// };