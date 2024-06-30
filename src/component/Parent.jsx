// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PokemonDetail from './PokemonDetail';
// import SubPokeHeader from './SubPokeHeader';

// const App = () => {
//   const [totalQuantity, setTotalQuantity] = useState(0);

//   return (
//     <Router>
//       <div>
//         <SubPokeHeader totalQuantity={totalQuantity} />
//         <Routes>
//           <Route path="/pokemon/:id" element={<PokemonDetail setTotalQuantity={setTotalQuantity} />} />
//           {/* Add other routes here */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SubPokeHead from './SubPokeHead';
// import AppPokeBall from './AppPokeBall';
// // Import other components as needed

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <SubPokeHead />
//                 <Switch>
//                     <Route path="/pocket/:pocketId" component={AppPokeBall} />
//                     {/* Add other routes here */}
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// export default App;
